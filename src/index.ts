import { ClientError, InvalidParamsError } from "./exceptions";
import { validateJurisdiction, validateLimit } from "./validations";
import {
  CompanyResult,
  CourtCaseResult,
  DataViewResult,
  EventsWithMeta,
  GovContractsWithMeta,
  Search,
  UserResponse,
} from "./models";

export class Client {
  apiKey: string;
  baseURL: string;
  constructor(apiKey: string | undefined = undefined) {
    if (apiKey === "" || apiKey === undefined) {
      apiKey = process.env.STATSNET_API_KEY;
    }
    if (apiKey === undefined) {
      throw new Error(
        "No api key provided. Set via argument or environment variable STATSNET_API_KEY.",
      );
    }
    this.apiKey = apiKey as string;
    this.baseURL = "https://dev.statsnet.co/api/v2";
  }

  private async request(
    method: string,
    endpoint: string,
    params: string[][] | undefined,
    json: object | undefined,
  ): Promise<ArrayBuffer> {
    const fullUrl = this.baseURL + endpoint + "?" + new URLSearchParams(params);

    const requestInit = {
      method: method,
      json: json,
      headers: {
        "X-API-KEY": this.apiKey,
      },
    };

    return fetch(fullUrl, requestInit).then(async (response) => {
      if (!response.ok) {
        throw new ClientError(
          endpoint,
          response.status,
          await response.arrayBuffer(),
        );
      }
      return await response.arrayBuffer();
    });
  }

  private async get(
    endpoint: string,
    params: string[][] | undefined,
  ): Promise<ArrayBuffer> {
    return await this.request("GET", endpoint, params, undefined);
  }

  private async post(
    endpoint: string,
    params: string[][] | undefined,
    json: object | undefined,
  ): Promise<ArrayBuffer> {
    return await this.request("POST", endpoint, params, json);
  }

  private stringifyResponse(response: ArrayBuffer): string {
    const decoder = new TextDecoder();
    return decoder.decode(response);
  }

  async me(): Promise<UserResponse> {
    const r = this.get("/user/me", undefined);

    return r
      .then((buf) => {
        return buf;
      })
      .then((r) => {
        return JSON.parse(this.stringifyResponse(r));
      });
  }

  async search(
    query: string,
    jurisdiction: string | undefined = undefined,
    limit: number = 5,
  ): Promise<Search> {
    if (!query) {
      throw new InvalidParamsError("query must not be empty", "query", query);
    }
    validateLimit(limit);
    validateJurisdiction(true, jurisdiction);

    const filters = jurisdiction ? { jurisdiction: [jurisdiction] } : {};

    const r = this.post("/business/search", [["limit", String(limit)]], {
      filters: filters,
      query: query,
    });

    return r
      .then((buf) => {
        return buf;
      })
      .then((r) => {
        return JSON.parse(this.stringifyResponse(r));
      });
  }

  async getCompany(jurisdiction: string, id: number): Promise<CompanyResult> {
    validateJurisdiction(false, jurisdiction);

    const r = this.get(`/business/${jurisdiction}/${id}/paid`, undefined);
    return r
      .then((buf) => {
        return buf;
      })
      .then((r) => {
        return JSON.parse(this.stringifyResponse(r));
      });
  }

  async getCompanyMeta(id: number): Promise<DataViewResult> {
    const r = this.get(`/business/${id}/data/view/meta`, undefined);
    return r
      .then((buf) => {
        return buf;
      })
      .then((r) => {
        return JSON.parse(this.stringifyResponse(r));
      });
  }

  async getCompanyCourtCases(
    id: number,
    limit: number = 5,
  ): Promise<CourtCaseResult> {
    validateLimit(limit);
    const r = this.get(`/business/${id}/court_cases`, [
      ["limit", String(limit)],
    ]);

    return r
      .then((buf) => {
        return buf;
      })
      .then((r) => {
        return JSON.parse(this.stringifyResponse(r));
      });
  }

  async getCompanyDepartments(id: number, limit: number = 5): Promise<object> {
    validateLimit(limit);
    const r = this.get(`/business/${id}/department`, [
      ["limit", String(limit)],
    ]);

    return r
      .then((buf) => {
        return buf;
      })
      .then((r) => {
        return JSON.parse(this.stringifyResponse(r));
      });
  }
  async getCompanyGovContracts(
    id: number,
    limit: number = 5,
  ): Promise<GovContractsWithMeta> {
    validateLimit(limit);
    const r = this.get(`/business/${id}/gov_contracts`, [
      ["limit", String(limit)],
    ]);

    return r
      .then((buf) => {
        return buf;
      })
      .then((r) => {
        return JSON.parse(this.stringifyResponse(r));
      });
  }
  async getCompanyEvents(
    id: number,
    limit: number = 5,
  ): Promise<EventsWithMeta> {
    validateLimit(limit);
    const r = this.get(`/business/${id}/events`, [["limit", String(limit)]]);

    return r
      .then((buf) => {
        return buf;
      })
      .then((r) => {
        return JSON.parse(this.stringifyResponse(r));
      });
  }
}
