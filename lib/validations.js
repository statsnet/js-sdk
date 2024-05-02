"use strict";
function validateLimit(value) {
    if (value > 500 || value < 1) {
    }
}
function validateJurisdiction(allow_empty, value) {
    if (!allow_empty && !value) {
        throw new InvalidParamsError("jurisdiction is empty, but its not allowed", "jurisdiction", value);
    }
}
