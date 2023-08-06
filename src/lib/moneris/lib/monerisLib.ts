import { MonerisCheckoutCallbackType, type MonerisCheckoutSetCallback, type MonerisChekout, type MonerisReceiptResponse, type PreloadMonerisCheckoutResponse } from "../types/moneris";




const preloadMonerisCheckout = async (): Promise<PreloadMonerisCheckoutResponse> => {
    console.info("preloadMonerisCheckout- start");
    const response = await fetch("/api/moneris/preload", {
        method: "POST",
    })

    const responseJson = await response.json() as PreloadMonerisCheckoutResponse;
    console.info("preloadMonerisCheckout- response", responseJson);
    return responseJson;
}


const createCheckout = () => {
    let myCheckout: unknown;
    if (window) {
        myCheckout = new window.monerisCheckout();
        const checkout = myCheckout as MonerisChekout;
        return checkout;
    }
}

const openCheckout = (preloadResponseId: string) => {
    const checkout = createCheckout();
    if (checkout) {
        checkout.setMode("qa");
        checkout.setCheckoutDiv("monerisCheckout");
        checkout.startCheckout(preloadResponseId);
    }
}


const getMonerisReceipt = async (ticket: string): Promise<MonerisReceiptResponse> => {
    console.info("getMonerisReceipt- request", ticket)
    const response = await fetch("/api/moneris/receipt", {
        method: "POST",
        body: JSON.stringify({ ticket }),
    });

    const responseJson = await response.json() as MonerisReceiptResponse;
    return responseJson;
}


const closeCheckout = (checkout: MonerisChekout) => {
    checkout.closeCheckout()
}


const setCallback = ({ setCancelCallback, setCompleteCallback, setErrorCallback, setLoadedCallback, setReceiptCallback }: MonerisCheckoutSetCallback) => {
    const checkout = createCheckout();
    if (checkout) {
        checkout.setCallback(MonerisCheckoutCallbackType.PAGE_LOADED, setLoadedCallback);
        checkout.setCallback(
            MonerisCheckoutCallbackType.ERROR_EVENT,
            setErrorCallback
        );
        checkout.setCallback(MonerisCheckoutCallbackType.CANCEL_TRANSACTION, setCancelCallback);
        checkout.setCallback(MonerisCheckoutCallbackType.PAYMENT_RECEIPT, setReceiptCallback);
        checkout.setCallback(
            MonerisCheckoutCallbackType.PAYMENT_COMPLETE,
            setCompleteCallback
        );
    }
    return checkout;
};


export {
    getMonerisReceipt,
    closeCheckout,
    setCallback,
    openCheckout,
    preloadMonerisCheckout
};