function validateLimit(value: number) {
    if (value > 500 || value < 1) {

    }
}

function validateJurisdiction(allow_empty: boolean, value: string | undefined) {
    if (!allow_empty && !value) {
        throw new InvalidParamsError(
            "jurisdiction is empty, but its not allowed",
            "jurisdiction",
            value
        )
    }
}