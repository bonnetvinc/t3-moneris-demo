/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useEffect, useState } from 'react';
import { preload } from 'react-dom';
import { serialize } from 'v8';
import { env } from "~/env.mjs";

const useMoneris = () => {

    const [monerisLoaded, setmonerisLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const loadJsScript = () => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://gatewayt.moneris.com/chktv2/js/chkt_v2.00.js";
        document.body.appendChild(script);
        return script;
    }


    const openCheckout = (preloadResponseId: string) => {
        console.log("preloadResponseId", preloadResponseId);
        const myCheckout = new window["monerisCheckout"]();
        myCheckout.setMode("qa");
        myCheckout.setCheckoutDiv("monerisCheckout");
        myCheckout.startCheckout(preloadResponseId);

    }

    useEffect(() => {
        const script = loadJsScript()
        console.log("script", script);

        async function preload() {
            const response = await fetch("/api/moneris/preload", {
                method: "POST",
            });

            const a = await response.json();
            openCheckout(a.response.ticket);
            setCallback();
            setIsLoading(false);
        }

        const preloadResponseId = preload().catch((e) => { console.error(e) });

        console.log("preloadResponseId", preloadResponseId);

        return () => {
            document.body.removeChild(script);
        };
    }, []);



    const setCallback = () => {
        var myCheckout = new monerisCheckout() as any;
        myCheckout.setCallback("page_loaded", (e) => console.info("page_loaded", e));
        myCheckout.setCallback(
            "cancel_transaction",
            (e) => console.info("cancel_transaction", e)
        );
        myCheckout.setCallback("error_event", (e, a) => console.info("error_event", e, a));
        myCheckout.setCallback("payment_receipt", (e) => console.info("payment_receipt", e));
        myCheckout.setCallback(
            "payment_complete",
            (e, a) => console.info("payment_complete", e, a)
        );
    };

    return { monerisLoaded, isLoading };
};

export default useMoneris;