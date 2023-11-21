export function numberToArray(number) {
    const result = [];

    for (let i = number; i > 0; --i) {
        result.push(i)
    }

    return result
}

export function getWithDiscount(value, percent) {
    return value && percent ? value - (value / 100 * percent) : value
}