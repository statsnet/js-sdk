import {stringify} from "node:querystring";


class Client {
    apiKey: string
    baseURL: string
    constructor(apiKey: string | undefined) {
        if (apiKey === "") {
            apiKey = process.env.STATSNET_API_KEY
        }
        if (apiKey === undefined) {
            throw new Error('No api key provided. Set via argument or environment variable STATSNET_API_KEY.');
        }
        this.apiKey = apiKey as string;
        this.baseURL = "https://dev.statsnet.co/api/v2"
    }

    private async request(method: string, endpoint: string, params: string[][] | undefined, json: object | undefined): Promise<ArrayBuffer> {
        const fullUrl = new URL(endpoint, this.baseURL) + "?" + new URLSearchParams(params)

        const initData = {
            method: method,
            body: ""
        };
        if (json !== undefined) {
            initData.body = JSON.stringify(json)
        }

        const r = fetch(fullUrl, initData)

        return fetch(fullUrl, initData).then(
            async (response) => {
                if (!response.ok) {
                    throw new ClientError(endpoint, response.status, await response.arrayBuffer())
                }
                return await response.arrayBuffer()
            }
        )
    }

    private async get(endpoint: string, params: string[][] | undefined): Promise<ArrayBuffer> {
        return await this.request("GET", endpoint, params, undefined)
    }

    private async post(endpoint: string, params: string[][] | undefined, json: object | undefined): Promise<ArrayBuffer> {
        return await this.request("POST", endpoint, params, json)
    }

    private stringifyResponse(response: Promise<ArrayBuffer>): string {
        const buf = new ArrayBuffer(64);
        const decoder = new TextDecoder();
        return decoder.decode(buf);
    }

    async me(): Promise<object> {
        const r = this.get("/user/me", undefined)

        return JSON.parse(this.stringifyResponse(r))
    }

    async search(query: string, jurisdiction: string | undefined = undefined, limit: number = 5): Promise<object> {
        if (!query) {
            throw new InvalidParamsError("query must not be empty", "query", query)
        }
        validateLimit(limit)
        validateJurisdiction(true, jurisdiction)

        const filters = jurisdiction ? {jurisdiction: jurisdiction} : {}

        const r = this.post("/business/search", [["limit", String(limit)]], {filters: filters, query: query})

        return JSON.parse(this.stringifyResponse(r))

    }

    async getCompany(jurisdiction: string, id: number): Promise<object> {
        validateJurisdiction(false, jurisdiction)

        const r = this.get(`/business/${jurisdiction}/${id}/paid`, undefined)
        return JSON.parse(this.stringifyResponse(r))
    }

    async getCompanyMeta(id: number): Promise<object> {
        const r = this.get(`/business/${id}/data/view/meta`, undefined)
        return JSON.parse(this.stringifyResponse(r))
    }

    async getCompanyCourtCases(id: number, limit: number = 5): Promise<object> {
        validateLimit(limit)
        const r = this.get(`/business/${id}/court_cases`, [["limit", String(limit)]])

        return JSON.parse(this.stringifyResponse(r))
    }


    async getCompanyDepartments(id: number, limit: number = 5): Promise<object> {
        validateLimit(limit)
        const r = this.get(`/business/${id}/department`, [["limit", String(limit)]])

        return JSON.parse(this.stringifyResponse(r))
    }
    async getCompanyGovContracts(id: number, limit: number = 5): Promise<object> {
        validateLimit(limit)
        const r = this.get(`/business/${id}/gov_contracts`, [["limit", String(limit)]])

        return JSON.parse(this.stringifyResponse(r))
    }
    async getCompanyEvents(id: number, limit: number = 5): Promise<object> {
        validateLimit(limit)
        const r = this.get(`/business/${id}/events`, [["limit", String(limit)]])

        return JSON.parse(this.stringifyResponse(r))
    }
}

