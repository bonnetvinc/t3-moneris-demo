export { };

declare global {
    interface Window {
        monerisCheckout: new () => MonerisChekout
    }
}