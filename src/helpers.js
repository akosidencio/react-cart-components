export const formatPrice = (price, currencySymbol) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencySymbol,
    });
    return formatter.format(price)
};