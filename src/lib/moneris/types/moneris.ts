export type MonerisCheckoutCallback = (res: string) => void

export interface MonerisChekout {
    setCallback: (e: MonerisCheckoutCallbackType, callback: MonerisCheckoutCallback) => void;
    closeCheckout: () => void;
    setMode: (a: "prod" | "qa") => void;
    setCheckoutDiv: (a: string) => void;
    startCheckout: (a: string) => void;
}

export interface MonerisCheckoutSetCallback {
    setErrorCallback: MonerisCheckoutCallback,
    setReceiptCallback: MonerisCheckoutCallback,
    setCancelCallback: MonerisCheckoutCallback,
    setCompleteCallback: MonerisCheckoutCallback,
    setLoadedCallback: MonerisCheckoutCallback,
}

export interface PreloadMonerisCheckoutResponse {
    "response": {
        "success": string,
        "ticket": string
    }
}

export interface MonerisHandlerResponse {
    handler: string;
    ticket: string;
    response_code: string;
}

export interface MonerisReceiptResponse {
    "response": {
        "success": boolean,
        "request": {
            "txn_total": string,
            "cust_info": {
                "first_name": string,
                "last_name": string,
                "phone": string,
                "email": string
            },
            "shipping": {
                "address_1": string,
                "address_2": string,
                "city": string,
                "country": string,
                "province": string,
                "postal_code": string
            },
            "billing": string,
            "cc_total": string,
            "pay_by_token": string,
            "cc": {
                "first6last4": string,
                "expiry": string,
                "cardholder": string
            },
            "ticket": string,
            "cust_id": string,
            "dynamic_descriptor": string,
            "order_no": string,
            "eci": string
        },
        "receipt": {
            "result": string,
            "cc": {
                "order_no": string,
                "cust_id": string,
                "transaction_no": string,
                "reference_no": string,
                "transaction_code": string,
                "transaction_type": string,
                "transaction_date_time": string,
                "corporate_card": string,
                "amount": string,
                "response_code": string
                "iso_response_code": string,
                "approval_code": string,
                "card_type": string,
                "dynamic_descriptor": string,
                "invoice_number": string,
                "customer_code": string,
                "eci": string,
                "cvd_result_code": string,
                "avs_result_code": string,
                "cavv_result_code": string,
                "first6last4": string,
                "expiry_date": string,
                "recur_success": string,
                "issuer_id": string,
                "is_debit": string,
                "ecr_no": string,
                "batch_no": string,
                "sequence_no": string,
                "result": string,
                "tokenize": {
                    "success": string,
                    "first4last4": string,
                    "datakey": string,
                    "status": string,
                    "message": string
                },
                "fraud": {
                    "3d_secure": MonerisReceiptResponseFraud,
                    "kount": MonerisReceiptResponseFraud,
                    "cvd": MonerisReceiptResponseFraud,
                    "avs": MonerisReceiptResponseFraud
                }
            }
        }
    }

}

export interface MonerisReceiptResponseFraud {
    "decision_origin": string,
    "result": string,
    "condition": string,
    "status": string,
    "code": string,
    "details": string
}


export enum MonerisCheckoutCallbackType {
    PAGE_LOADED = "page_loaded",
    CANCEL_TRANSACTION = "cancel_transaction",
    ERROR_EVENT = "error_event",
    PAYMENT_RECEIPT = "payment_receipt",
    PAYMENT_COMPLETE = "payment_complete",
}