

const currencyFormat = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    currencyDisplay: 'symbol',
});

export default currencyFormat;

export const currencySymbol = (value:string) => {
    switch (true){
        case value === 'USD':
            return '$'
        case value === 'NGN':
            return '₦'
        case value === 'GHC':
            return '₵'
        case value === 'KES':
            return 'KSh'
        default:
            return '$'
    }
}
