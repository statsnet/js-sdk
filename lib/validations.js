"use strict";
//def validate_id(value: int) -> NoReturn:
//     if not type(value) is int:
//         raise InvalidParams("id must be of type int", "id", id)
//
//
// def validate_limit(value: int) -> NoReturn:
//     if not type(value) is int or value > 500 or value < 1:
//         raise InvalidParams("Limit must be between 1 and 500 and must be int instance", "limit", value)
//
//
// def validate_jurisdiction(allow_empty: bool, value: Optional[str]) -> NoReturn:
//     if not isinstance(value, (str, type(None))):
//         raise InvalidParams("jurisdiction must be of type str or can be None if allowed", "jurisdiction", value)
//     if not allow_empty and not value:
//         raise InvalidParams("jurisdiction is empty, but its not allowed", "jurisdiction", value)
function validateLimit(value) {
    if (value > 500 || value < 1) {
    }
}
