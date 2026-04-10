export function productAmount (productPrice) {
    return `$${(productPrice/100).toFixed(2)}`
}