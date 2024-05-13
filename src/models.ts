/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type UsersLinkedCompanies = {
  id?: number;
  identifier?: string;
  title?: string;
  name?: string;
  name_en?: string;
  name_native?: string;
  company_size?: string;
  jurisdiction?: string;
  inactive?: boolean;
  addresses?: Addresses;
  contacts?: Contacts;
  identifiers?: {
    type?: string;
    value?: string;
  }[];
  main_industry_code?: {
    code?: string;
    description?: string;
    is_main?: boolean;
  }[];
  industry_codes?: IndustryCodes[];
  officers?: Officers;
  shareholders?: Shareholders;
  risks?: Risks;
  /** @format date-time */
  last_update_date?: string;
  /** @format date-time */
  dissolution_date?: string;
  /** @format date-time */
  incorporation_date?: string;
  structure?: string;
  /** @format date-time */
  deleted_at?: string;
}[];

export interface CompaniesByMainIndustryCode {
  company?: {
    id?: number;
    identifier?: string;
    title?: string;
    name?: string;
    name_en?: string;
    name_native?: string;
    company_size?: string;
    jurisdiction?: string;
    industry?: string;
    inactive?: boolean;
    addresses?: Addresses;
    headcount?: Headcount;
    identifiers?: {
      type?: string;
      value?: string;
    }[];
    industry_codes?: IndustryCodes;
    main_industry_code?: {
      code?: string;
      description?: string;
      is_main?: boolean;
    };
    officers?: Officers;
  }[];
  /** @format int64 */
  total?: number;
  /** @format uint64 */
  pagination_total?: number;
  /** @format int64 */
  pagination_offset?: number;
}

export interface ParentIndustryCode {
  main_industry_code?: string;
  key?: string;
  industry_codes?: ParentIndustryCode[];
}

export interface QuasiContracts {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  lot_id?: number;
  lot_name?: string;
  status?: string;
  /** @format int64 */
  advert_id?: number;
  advert_name?: string;
  customer_identifier?: string;
  customer_name?: string;
  /** @format double */
  count?: number;
  /** @format double */
  price?: number;
  supplier_name?: string;
  supplier_identifier?: string;
  /** @format date-time */
  date?: string;
  source_url?: string;
  source?: string;
  /** @format int64 */
  total?: number;
}

export interface QuasiContractsWithMeta {
  quasi_contracts?: QuasiContracts[];
  /** @format int64 */
  total?: number;
  /** @format uint64 */
  pagination_total?: number;
  /** @format int64 */
  pagination_offset?: number;
}

export interface DataView {
  key?: string;
  value?: string;
}

export interface DataViewResult {
  scoring?: DataView;
  shareholders?: DataView;
  officers?: DataView;
  certs?: DataView;
  conformity_certs?: DataView;
  intellectual_properties?: DataView;
  events?: DataView;
  debtors?: DataView;
  stores?: DataView;
  jobs?: DataView;
  trademarks?: DataView;
  quasi_contracts?: DataView;
  pos_terminals?: DataView;
  places?: DataView;
  bank_accounts?: DataView;
  marketplaces?: DataView;
  counterparties?: DataView;
  websites?: DataView;
  gov_loans?: DataView;
  farmers?: DataView;
  names?: DataView;
  court_cases?: DataView;
  employees?: DataView;
  shareholders_by_count?: DataView;
  officers_by_count?: DataView;
  registries?: DataView;
}

export interface ReportsHistory {
  business?: {
    id?: number;
    identifier?: string;
    title?: string;
    name?: string;
    name_en?: string;
    name_native?: string;
    company_size?: string;
    jurisdiction?: string;
    industry?: string;
    status?: string;
    ownership_type?: string;
    inactive?: boolean;
    addresses?: Addresses;
    headcount?: Headcount;
    industry_codes?: IndustryCodes;
    officers?: {
      name?: string;
      name_en?: string;
      name_native?: string;
      role?: string;
      /** @format date */
      start_date?: string;
      /** @format date */
      end_date?: string;
      inactive?: boolean;
    }[];
    structure?: string;
    /** @format date */
    view_date?: string;
  }[];
  total?: number;
  pagination_count?: number;
  pagination_offset?: number;
}

export interface FavouriteObjectResponse {
  pagination_offset?: number;
  pagination_total?: number;
  items?: {
    id?: number;
    company_id?: number;
    company_name?: string;
    industry?: string;
    jurisdiction?: string;
    addresses?: Addresses;
    headcount?: Headcount;
    officers?: Officers;
    identifiers?: {
      type: string;
      value?: string;
    }[];
    /** @format date */
    created_at?: string;
    /** @format date */
    deleted_at?: string;
  }[];
}

export interface FavouriteListResponse {
  pagination_offset?: number;
  pagination_total?: number;
  list?: {
    user_id?: number;
    name?: string;
    id?: number;
    org_id?: number;
    /** @format date */
    created_at?: string;
    /** @format date */
    deleted_at?: string;
  }[];
}

export interface OrganizationInvitesResponse {
  pagination_offset?: number;
  pagination_total?: number;
  list?: {
    org_id?: number;
    user_id?: number;
    status?: string;
    /** @format date */
    created_at?: string;
    /** @format date */
    deleted_at?: string;
  }[];
}

export interface OrganizationResponse {
  id?: number;
  name?: string;
  tax_id?: string;
  billing_address?: string;
  jurisdiction?: string;
  owner_user_id?: string;
  owner_user_email?: string;
  owner_user_name?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  start_date?: string;
  end_date?: string;
  next_bill_date?: string;
  reports?: string;
  plan_id?: string;
}

export interface PlanResponse {
  id?: number;
  plan?: string;
  price?: number;
  currency?: string;
  reports?: number;
  alternative?: number;
}

export interface ExportResult {
  export?: {
    id?: number;
    user_id?: number;
    filters?: {
      type?: string;
      file_type?: string;
      filters?: {
        jurisdiction?: string[];
        structure?: string[];
        company_size?: string[];
        main_industry_code?: string[];
        inactive?: boolean[];
        state?: string[];
        query?: string;
        limit?: string[];
        true_limit?: number;
      };
    };
    fields?: string[];
    type?: string;
    status?: string;
    chargeable?: boolean;
    balance_reserved?: boolean;
    file_path?: string;
    file_name?: string;
    file_type?: string;
    /** @format date */
    created_at?: string;
    /** @format date */
    updated_at?: string;
    error?: string;
    language?: string;
    hash_id?: string;
    url?: string;
    description?: string;
  }[];
  total?: number;
  pagination_count?: number;
  pagination_offset?: number;
}

export interface TokensResponse {
  access_token?: string;
  refresh_token?: string;
  /** @format date */
  expire_at?: string;
}

export interface UserResponse {
  id?: number;
  name?: string;
  company_name?: string;
  position?: string;
  role?: string;
  email?: string;
  email_verified?: boolean;
  phone?: string;
  phone_verified?: boolean;
  language?: string;
  /** @format date-time */
  created_at?: string;
  /** @format date-time */
  updated_at?: string;
  /** @format date-time */
  deleted_at?: string;
  plan_id?: number;
  reports?: number;
  /** @format date-time */
  start_date?: string;
  /** @format date-time */
  end_date?: string;
  /** @format date-time */
  next_bill_date?: string;
  api_token?: string;
  email_delivery_ability?: boolean;
  status?: string;
  last_sign_in_date?: string;
}

export interface LocationResponse {
  jurisdiction?: string;
  areas?: {
    name?: string;
    path?: string;
    name_en?: string;
    name_native?: string;
  }[];
  name_ru?: string;
  name_en?: string;
}

export interface GovContractsWithMeta {
  count?: number;
  pagination_count?: number;
  pagination_offset?: number;
  government_contract?: {
    supplier_biin?: string;
    supplier_bik?: string;
    supplier_iik?: string;
    supplier_bank_name_kz?: string;
    supplier_bank_name_ru?: string;
    customer_bin?: string;
    customer_bik?: string;
    customer_iik?: string;
    customer_bank_name_kz?: string;
    customer_bank_name_ru?: string;
    sign_reason_doc_name?: string;
    supplier_name?: string;
    customer_name?: string;
    customer_statsnet_id?: string;
    supplier_statsnet_id?: string;
    description_kz?: string;
    description_ru?: string;
    contract_sum_wnds?: number;
    sign_date?: string;
    ec_end_date?: string;
  }[];
}

export interface Search {
  company?: {
    id?: string;
    title?: string;
    identifiers?: {
      type?: string;
      value?: string;
    }[];
    name?: string;
    name_en?: string;
    inactive?: boolean;
    jurisdiction?: string;
    addresses?: {
      raw?: string;
      state?: string;
    }[];
    structure?: string;
  }[];
  count?: number;
  pagination_count?: number;
  pagination_offset?: number;
  is_phone?: boolean;
}

export interface FizRelations {
  nodes?: {
    id?: number;
    name?: string;
    type?: string;
    identifier?: string;
    key?: string;
  }[];
  links?: {
    source_identifier?: string;
    source_name?: string;
    source_key?: number;
    company_id?: number;
    company_name?: string;
    company_identifier?: string;
    company_key?: number;
    connection?: string;
  }[];
  affiliation_links?: {
    source_identifier?: string;
    source_name?: string;
    source_key?: number;
    company_id?: number;
    company_name?: string;
    company_identifier?: string;
    company_key?: number;
    connection?: string;
  }[];
  meta?: {
    connection?: string;
    count?: number;
  }[];
}

export interface IndividualPersonWithData {
  name?: string;
  name_en?: string;
  identifier?: string;
  jurisdiction?: string;
  contacts?: {
    value: string;
  }[];
  risks?: Risks;
  shareholders?: Alternatives;
  officers?: Alternatives;
  meta?: {
    old_shareholder_count?: number;
    new_shareholder_count?: number;
    old_officer_count?: number;
    new_officer_count?: number;
  };
  is_full?: boolean;
}

export interface ContractsMeta {
  company_id?: number;
  gov_contracts_meta?: {
    sum?: number;
    year?: number;
    count?: number;
    method?: string;
  }[];
  gov_applications_meta?: {
    sum?: number;
    year?: number;
    count?: number;
  }[];
  quasi_contracts_meta?: {
    sum?: number;
    year?: number;
    count?: number;
  }[];
}

export interface View {
  activities?: number;
  bank_accounts?: number;
  certs?: number;
  companies_contacts?: number;
  counterparties?: number;
  court_cases?: number;
  debtors?: number;
  debtors_amount?: number;
  employees?: number;
  employment_contracts?: number;
  events?: number;
  gov_contracts?: number;
  gov_loans?: number;
  id?: number;
  intellectual_properties?: number;
  jobs?: number;
  marketplaces?: number;
  names?: number;
  officers?: number;
  officers_by_count?: string;
  places?: number;
  pos_terminals?: number;
  procurement?: number;
  quasi_contracts?: number;
  registries?: {
    end_date?: string;
    inclusion_reason?: string;
    jurisdiction?: string;
    name?: string;
    registry_name?: string;
    source?: string;
    start_date?: string;
  }[];
  shareholders?: number;
  shareholders_by_count?: string;
  social_networks?: number;
  stores?: number;
  subsidiaries?: number;
  trademarks?: number;
  websites?: number;
}

export interface ListOfData {
  registrations?: {
    name?: string;
    short_name?: string;
    reg_status?: string;
    reg_department?: string;
    creation_method?: string;
    typical_character?: string;
    non_profit?: boolean;
    foreign_invert?: boolean;
    enterprise?: boolean;
    enterprise_type?: boolean;
    international?: boolean;
    branches_existence?: boolean;
    ownership_type?: string;
    without_citizenship?: string;
    founders_count?: number;
  }[];
  farmers?: {
    name?: string;
    officer_name?: string;
    state?: string;
    fields_types_summary_2023?: {
      title?: string;
      square?: string;
      "Кол-во СХТП"?: string;
      "Кол-во полей"?: string;
    }[];
    fields_crop_summary_2023?: {
      title?: string;
      square?: string;
      "Кол-во СХТП"?: string;
      "Кол-во полей"?: string;
    }[];
    source_url?: string;
  }[];
  conf_certs?: {
    /** @format date */
    start_date?: string;
    /** @format date */
    end_date?: string;
    registration_number?: string;
    product_name?: string;
    source?: string;
    source_url?: string;
    cert_issuer?: string;
    producer_name?: string;
    declarant_name?: string;
  }[];
  excises?: {
    /** @format date */
    start_date?: string;
    /** @format date */
    end_date?: string;
    status?: string;
    product?: string;
    excise_code?: string;
    object?: string;
    address?: string;
  }[];
  bank_accounts?: {
    bank_bic?: string;
    bank_name?: string;
    created_at?: string;
    date_open?: string;
    holder?: string;
    iban?: string;
    id?: number;
    identifier?: string;
    jurisdiction?: string;
    type?: string;
    updated_at?: string;
  }[];
  stores?: {
    address?: string;
    company_identifier?: string;
    created_at?: string;
    id?: number;
    jurisdiction?: string;
    license?: string;
    name?: string;
    store_name?: string;
    updated_at?: string;
  }[];
  certs?: {
    agency?: string;
    applicant_address?: string;
    applicant_contacts?: string[];
    applicant_desc?: string;
    applicant_identifier?: string;
    applicant_origin?: string;
    comment?: string;
    created_at?: string;
    doc_type?: string;
    end_date?: string;
    hs_code?: string;
    id?: number;
    issue_date?: string;
    jurisdiction?: string;
    number?: string;
    producer_address?: string;
    producer_contacts?: string[];
    producer_desc?: string;
    producer_identifier?: string;
    producer_origin?: string;
    product_name?: string;
    source?: string;
    start_date?: string;
    status?: string;
    updated_at?: string;
  }[];
  debtors?: {
    count?: number;
    recoverer_identifier?: string;
    sum?: number;
  }[];
  jobs?: {
    company_id?: number;
    company_url?: string;
    education?: string;
    experience?: string;
    id?: number;
    identifier?: string;
    industry?: string;
    internship?: string;
    job_type?: string;
    salary?: string;
    start_date?: string;
    title?: string;
    work_schedule?: string;
    work_terms?: string;
  }[];
  quasi_contracts?: {
    advert_id?: number;
    advert_name?: string;
    count?: number;
    customer_identifier?: string;
    customer_name?: string;
    date?: string;
    id?: number;
    lot_id?: number;
    lot_name?: string;
    price?: number;
    source?: string;
    source_url?: string;
    status?: string;
    supplier_identifier?: string;
    supplier_name?: string;
  }[];
  places?: {
    address?: string;
    area?: string;
    city?: string;
    contacts?: string[];
    district?: string;
    foursquare?: string;
    from_?: string;
    heading?: string;
    home_number?: string;
    id?: number;
    index?: string;
    latitude?: string;
    livejournal?: string;
    longitude?: string;
    name?: string;
    street_name?: string;
    subheading?: string;
    time_work?: string;
    ways_of_payment?: any;
  }[];
  states?: {
    created_at?: string;
    end_date?: string;
    registration_date?: string;
    roles?: string[];
    source?: string;
  }[];
  post_terminals?: {
    address?: string;
    created_at?: string;
    end_date?: string;
    id?: number;
    identifier?: string;
    jurisdiction?: string;
    name?: string;
    source?: string;
    start_date?: string;
    updated_at?: string;
  }[];
  domains?: {
    city?: string;
    contacts?: string[];
    country?: string;
    current_registar?: string;
    domain_created?: string;
    domain_name?: string;
    domain_status?: string;
    email_address?: string;
    entities?: string[];
    fax_number?: string;
    last_modified?: string;
    name?: string;
    nic_handle?: string;
    organization_name?: string;
    phone_number?: string;
    postal_code?: string;
    primary_ip_address?: string;
    primary_server?: string;
    registar_created?: string;
    secondary_ip_address?: string;
    secondary_server?: string;
    social_networks?: string[];
    state?: string;
    street_address?: string;
    title?: string;
    upload_id?: any;
  }[];
  scoring?: {
    bad_rate?: number;
    created_at?: string;
    group?: string;
    id?: number;
    identifier?: string;
    jurisdiction?: string;
    name?: string;
    retrieved_at?: string;
    score?: number;
    updated_at?: string;
  }[];
  gov_loans?: {
    bank_name?: string;
    created_at?: string;
    desc?: string;
    end_date?: string;
    financing_source?: string;
    guarantee_amount?: number;
    id?: number;
    identifier?: string;
    loan_amount?: number;
    loan_rate?: string;
    name?: string;
    purpose?: string;
    start_date?: string;
    updated_at?: string;
  }[];
  trademarks?: {
    application_date?: string;
    application_number?: string;
    bulletin_date?: string;
    bulletin_number?: string;
    classifications?: string[];
    exp_date?: string;
    holder?: string;
    pdf_url?: string;
    reg_date?: string;
    reg_number?: string;
    source_url?: string;
    trademark_name?: string;
  }[];
  counterparties?: {
    customer_identifier?: string;
    customer_name?: string;
    source?: string;
    supplier_identifier?: string;
    supplier_name?: string;
  }[];
  kaspi_shops?: {
    cities?: string;
    identifier?: string;
    jurisdiction?: string;
    phone?: string;
    products?: number;
    reviews?: number;
    shop_id?: string;
    shop_name?: string;
    source?: string;
    source_url?: string;
  }[];
  assets?: {
    type?: string;
  }[];
  rights?: {
    application_date?: string;
    company_id?: number;
    holders?: string[];
    name?: string;
    object_date?: string;
    object_type?: string;
    person_name?: string;
    registration_date?: string;
    registration_number?: string;
    status?: string;
  }[];
  assets_count?: number;
  bank_accounts_count?: number;
  certs_count?: number;
  counterparties_count?: number;
  debtors_count?: number;
  domains_count?: number;
  farmers_count?: number;
  fields_count?: number;
  gov_loans_count?: number;
  jobs_count?: number;
  kaspi_count?: number;
  places_count?: number;
  pos_terminals_count?: number;
  quasi_contracts_count?: number;
  rights_count?: number;
  scoring_count?: number;
  states_count?: number;
  stores_count?: number;
  trademarks_count?: number;
  excises_count?: number;
  conf_certs_count?: number;
}

export interface CompanyWithState {
  company?: {
    id?: number;
    identifier?: string;
    title?: string;
    name?: string;
    name_en?: string;
    name_native?: string;
    company_size?: string;
    jurisdiction?: string;
    industry?: string;
    inactive?: boolean;
    addresses?: Addresses;
    headcount?: Headcount;
    identifiers?: {
      type?: string;
      value?: string;
    }[];
    industry_codes?: IndustryCodes;
    main_industry_code?: {
      code?: string;
      description?: string;
      is_main?: boolean;
    };
    officers?: Officers;
  }[];
  state?: {
    state?: string;
    total?: number;
  };
  count?: number;
  pagination_count?: number;
  pagination_offset?: number;
}

export interface EventsWithMeta {
  events?: {
    jurisdiction?: string;
    /** @format date */
    date?: string;
    attr?: string;
    before?: string;
    after?: string;
  }[];
}

export interface SubsidiariesCompanyWithMeta {
  companies?: {
    id?: number;
    identifier?: string;
    name?: string;
    name_en?: string;
  }[];
  total?: number;
  pagination_count?: number;
  pagination_offset?: number;
}

export interface RelationResult {
  node?: {
    id?: number;
    name?: string;
    type?: string;
    is_person?: boolean;
    key?: string;
  }[];
  links?: {
    id?: number;
    name?: string;
    source_key?: number;
    type?: string;
    connection_type?: string;
    connection_id?: number;
    connection_name?: string;
    connection_hash_identifier?: string;
    connection_key?: number;
    is_person?: boolean;
  }[];
  meta?: {
    name?: number;
  }[];
  total?: number;
}

export type SocialNetworks = {
  name?: string;
  account_name?: string;
  identifier?: string;
  description?: string;
  url?: string;
  email?: string;
  website?: string;
  jurisdiction?: string;
  matched_contact?: string[];
}[];

export interface TaxDeclarationsResult {
  tax_regime?: string;
  tax_declarations?: {
    amount?: number;
    doc_type?: string;
    doc_num?: string;
    date?: string;
  }[];
}

export interface CourtCaseResult {
  court_cases?: {
    external_id: string;
    case_number: string;
    instance?: string;
    case_type?: string;
    start_date?: string;
    end_date?: string;
    court: string;
    category?: string;
    judge?: string;
    sides?: string[];
    defendants?: string[];
    plaintiffs?: string[];
    result?: string;
    events?: {
      status?: string;
      date?: string;
    }[];
    jurisdiction: string;
  }[];
  case_type_meta?: CourtCasesMeta;
  meta?: CourtCasesMeta;
  year_meta?: CourtCasesMeta;
  total?: number;
}

export type CourtCasesMeta = {
  type: string;
  total: number;
}[];

export interface EmployeesWithMeta {
  employees?: {
    identifier?: string;
    name?: string;
    position?: string;
    employer_identifier?: string;
    employer_name?: string;
    employer_jurisdiction?: string;
    /** @format date */
    created_at?: string;
    /** @format date */
    updated_at?: string;
    /** @format date */
    start_date?: string;
    /** @format date */
    end_date?: string;
  }[];
  total?: number;
  type_total?: {
    type?: string;
    total?: number;
  };
  pagination_count?: number;
  pagination_offset?: number;
}

export interface CompanyResult {
  company?: Company;
  alternatives?: Alternatives;
  is_full: boolean;
  risks_meta_data?: RisksMetaData;
  contacts?: ResultContacts;
  seo?: Seo;
}

export interface CompanyBetaResult {
  company?: Company;
  alternatives?: Alternatives;
  risks_meta_data?: RisksMetaData;
  seo?: Seo;
  relations?: RelationsMeta;
  meta?: ViewMetaBeta;
}

export interface Company {
  id?: number;
  identifier?: string;
  title?: string;
  name?: string;
  name_en?: string;
  name_native?: string;
  legal_form?: string;
  company_size?: string;
  jurisdiction?: string;
  industry?: string;
  status?: string;
  ownership_type?: string;
  var_payer?: boolean;
  inactive?: boolean;
  addresses?: Addresses;
  contacts?: Contacts;
  financials?: Financials;
  headcount?: Headcount;
  identifiers?: {
    type: string;
    value?: string;
  }[];
  main_industry_code?: {
    code: string;
    description?: string;
    is_main: boolean;
  };
  industry_codes?: IndustryCodes;
  officers?: Officers;
  shareholders?: Shareholders;
  risks?: Risks;
  capital?: {
    share_capital?: number;
    paid_up_capital?: number;
    currency?: string;
  };
  managing_company_id?: number;
  managing_company_name?: string;
  branches?: {
    id?: number;
    name?: string;
    name_en?: string;
  }[];
  names?: {
    name: string;
  }[];
  export?: string[];
  import?: string[];
  /** @format date */
  last_update_date?: string;
  /** @format date */
  dissolution_date?: string;
  /** @format date */
  incorporation_date?: string;
  /** @format date */
  created_at?: string;
  /** @format date */
  updated_at?: string;
  structure?: string;
}

export type Addresses = {
  raw: string;
  state?: string;
  path: string;
}[];

export type Contacts = {
  id: number;
  type: string;
  value: string;
}[];

export type Financials = {
  year?: number;
  taxes?: number;
  net_profit?: number;
  revenue?: number;
  accruals?: {
    kbk?: string;
    paid?: number;
    year?: number;
  }[];
}[];

export type Headcount = {
  count?: string;
  /** @format date */
  date?: string;
}[];

export type Risks = {
  status: string;
  object: string;
  source: string;
  records?: {
    object: string;
    desc: string;
    records?: {
      k: string;
      v: string;
    }[];
  }[];
}[];

export type IndustryCodes = {
  code: string;
  description?: string;
  is_main: boolean;
}[];

export type Officers = {
  identifier?: string;
  name: string;
  name_en: string;
  name_native?: string;
  role?: string;
  /** @format date */
  start_date?: string;
  /** @format date */
  end_date?: string;
  inactive: boolean;
  contacts?: {
    id: number;
    value: string;
  }[];
  risks?: {
    status: string;
    object: string;
    source: string;
    records?: {
      object: string;
      desc: string;
      records?: {
        k: string;
        v: string;
      }[];
    };
  }[];
  hash_bin: string;
}[];

export type Shareholders = {
  shareholder_company_id: number;
  identifier?: string;
  name: string;
  name_en: string;
  name_native: string;
  role?: string;
  is_person: boolean;
  share?: number;
  share_capital?: number;
  /** @format date */
  start_date?: string;
  /** @format date */
  end_date?: string;
  inactive?: boolean;
  contacts?: {
    id: number;
    value: string;
  }[];
  risks?: {
    status?: string;
    object?: string;
    source?: string;
    records?: {
      object: string;
      desc: string;
      records?: {
        k: string;
        v: string;
      }[];
    }[];
  }[];
  hash_bin: string;
}[];

export type Alternatives = {
  id?: number;
  identifier?: string;
  title?: string;
  name?: string;
  name_en?: string;
  company_size?: string;
  jurisdiction?: string;
  industry?: string;
  industry_code?: string;
  main_industry_code?: {
    code: string;
    description?: string;
    is_main: boolean;
  };
  source_inactive?: boolean;
}[];

export interface RisksMetaData {
  company?: Risks;
  shareholders?: Risks;
  officers?: Risks;
}

export interface Seo {
  title?: string;
  description?: string;
  keywords?: string;
}

export interface ResultContacts {
  website?: Contacts;
  phone?: Contacts;
  email?: Contacts;
}

export type RelationsMeta = {
  connection: string;
  count: number;
}[];

export interface ViewMetaBeta {
  events?: number;
  employment_contracts?: number;
  subsidiaries?: number;
  contacts?: number;
}

export interface Error {
  error: number;
  message: string;
}
