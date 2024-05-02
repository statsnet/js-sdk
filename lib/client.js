"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(apiKey) {
        if (apiKey === "") {
            apiKey = process.env.STATSNET_API_KEY;
        }
        if (apiKey === undefined) {
            throw new Error('No api key provided. Set via argument or environment variable STATSNET_API_KEY.');
        }
        this.apiKey = apiKey;
        this.baseURL = "https://dev.statsnet.co/api/v2";
    }
    request(method, endpoint, params, json) {
        return __awaiter(this, void 0, void 0, function* () {
            const fullUrl = new URL(endpoint, this.baseURL) + "?" + new URLSearchParams(params);
            const initData = {
                method: method,
                body: ""
            };
            if (json !== undefined) {
                initData.body = JSON.stringify(json);
            }
            const r = fetch(fullUrl, initData);
            return fetch(fullUrl, initData).then((response) => __awaiter(this, void 0, void 0, function* () {
                if (!response.ok) {
                    throw new ClientError(endpoint, response.status, yield response.arrayBuffer());
                }
                return yield response.arrayBuffer();
            }));
        });
    }
    get(endpoint, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request("GET", endpoint, params, undefined);
        });
    }
    post(endpoint, params, json) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request("POST", endpoint, params, json);
        });
    }
    stringifyResponse(response) {
        const buf = new ArrayBuffer(64);
        const decoder = new TextDecoder();
        return decoder.decode(buf);
    }
    me() {
        return __awaiter(this, void 0, void 0, function* () {
            const r = this.get("/user/me", undefined);
            return JSON.parse(this.stringifyResponse(r));
        });
    }
    search(query_1) {
        return __awaiter(this, arguments, void 0, function* (query, jurisdiction = undefined, limit = 5) {
            if (!query) {
                throw new InvalidParamsError("query must not be empty", "query", query);
            }
            validateLimit(limit);
            validateJurisdiction(true, jurisdiction);
            const filters = jurisdiction ? { jurisdiction: jurisdiction } : {};
            const r = this.post("/business/search", [["limit", String(limit)]], { filters: filters, query: query });
            return JSON.parse(this.stringifyResponse(r));
        });
    }
    getCompany(jurisdiction, id) {
        return __awaiter(this, void 0, void 0, function* () {
            validateJurisdiction(false, jurisdiction);
            const r = this.get(`/business/${jurisdiction}/${id}/paid`, undefined);
            return JSON.parse(this.stringifyResponse(r));
        });
    }
    getCompanyMeta(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = this.get(`/business/${id}/data/view/meta`, undefined);
            return JSON.parse(this.stringifyResponse(r));
        });
    }
    getCompanyCourtCases(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, limit = 5) {
            validateLimit(limit);
            const r = this.get(`/business/${id}/court_cases`, [["limit", String(limit)]]);
            return JSON.parse(this.stringifyResponse(r));
        });
    }
    getCompanyDepartments(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, limit = 5) {
            validateLimit(limit);
            const r = this.get(`/business/${id}/department`, [["limit", String(limit)]]);
            return JSON.parse(this.stringifyResponse(r));
        });
    }
    getCompanyGovContracts(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, limit = 5) {
            validateLimit(limit);
            const r = this.get(`/business/${id}/gov_contracts`, [["limit", String(limit)]]);
            return JSON.parse(this.stringifyResponse(r));
        });
    }
    getCompanyEvents(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, limit = 5) {
            validateLimit(limit);
            const r = this.get(`/business/${id}/events`, [["limit", String(limit)]]);
            return JSON.parse(this.stringifyResponse(r));
        });
    }
}
