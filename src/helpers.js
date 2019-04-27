export const formatPrice = (price, currency) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency || 'USD',
    });
    return formatter.format(price)
};