/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useEffect, useState } from 'react';
import { getMonerisReceipt, openCheckout, preloadMonerisCheckout, setCallback } from './monerisLib';
import { type MonerisCheckoutSetCallback, type MonerisChekout, type MonerisHandlerResponse, type MonerisReceiptResponse } from './monerisTypes';


const useMoneris = () => {

    const [monerisTicketSuccess, setMonerisTicketSuccess] = useState<string>();
    const [monerisResult, setMonerisResult] = useState<MonerisReceiptResponse>();
    const [monerisCheckout, setMonerisCheckout] = useState<MonerisChekout>();


    const handlePaymentReceipt = (receipt: string) => {

        const receiptJson = JSON.parse(receipt) as MonerisHandlerResponse;
        console.info("handlePaymentReceipt", receiptJson);
        setMonerisTicketSuccess(receiptJson.ticket)
    }

    const confCallback: MonerisCheckoutSetCallback = {
        setCancelCallback: (e: string) => console.info("setCancelCallback", e),
        setCompleteCallback: (e: string) => console.info("setCompleteCallback", e),
        setErrorCallback: (e: string) => console.info("setErrorCallback", e),
        setLoadedCallback: (e: string) => console.info("setLoadedCallback", e),
        setReceiptCallback: handlePaymentReceipt,
    }

    useEffect(() => {
        preloadMonerisCheckout().then(
            (a) => {
                console.info("preloadMonerisCheckout", a);
                openCheckout(a.response.ticket)
                const createdCheckout = setCallback(confCallback)
                setMonerisCheckout(createdCheckout)
            }
        ).catch((e) => { console.error(e) });

        return () => {
            if (monerisCheckout)
                monerisCheckout.closeCheckout();
        }
    }, []);

    useEffect(() => {

        if (monerisTicketSuccess) {
            getMonerisReceipt(monerisTicketSuccess).then(
                (a) => {
                    console.info("getMonerisReceipt", a);
                    setMonerisResult(a);
                }
            ).catch((e) => { console.error(e) });
        }

    }, [monerisTicketSuccess]);

    return { monerisResult };
};

export default useMoneris;


