# Javascript SDK for statsnet.co
## Installation

```sh
npm install statsnet_js_sdk
```

## Usage
Import statsnet client and set API keys:

```javascript
const sdk = require("statsnet_js_sdk")

const token = "123" // or set via STATSNET_API_KEY environment variable
```

```javascript
const client = new sdk.Client(token)
```

```javascript
// Get info about current user (/api/v2/user/me)
const me = client.me()
```

```javascript
// Find company by query and jurisdiction (/api/v2/business/search)
const companies = client.search("казпочта", "kz", 5)
// Or without specifiying jurisdiction
const companies = client.search("казпочта", undefined, 5)
```

```javascript
// Get company by id and jurisdiction (/api/v2/business/{jurisdiction}/{id}/paid
const company = client.getCompany("kz", 1)
```

```javascript
// Get company meta by id (/api/v2/business/{id}/data/view/meta)
const meta = client.getCompanyMeta(1)
```

```javascript
// Get company court cases (/business/{id}/court_cases)
const courtCases = client.getCompanyCourtCases(1, 5)
```

```javascript
// Get company departments (/business/{id}/department)
const departments = client.getCompanyDepartments(1, 5)
```

```javascript
// Get company gov contracts (/business/{id}/gov_contracts)
const govContracts = client.getCompanyGovContracts(1, 5)
```

```javascript
// Get company events (/business/{id}/events)
const companyEvents = client.getCompanyEvents(1, 5)
```

```javascript
// Get company relations (/business/{id}/relations/table)
const companyRelations = client.getCompanyRelations(1, 5)
```

```javascript
// Get company by identifier
const company = client.getCompanyByIdentifier("1")
```

##### Limit must be between 1 and 500, 501 is already invalid value