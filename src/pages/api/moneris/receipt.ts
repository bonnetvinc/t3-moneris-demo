import { type NextApiRequest, type NextApiResponse } from "next";
import { env } from "~/env.mjs";
import { type MonerisReceiptResponse } from "~/lib/moneris/types/moneris";

interface ExtendedNextApiRequest extends NextApiRequest {
    body: string;
}

interface BodyType { ticket: string }

const receiptRequest = async (req: ExtendedNextApiRequest, res: NextApiResponse<MonerisReceiptResponse>): Promise<void> => {

    let payload: unknown;

    if (req.body && req.method === 'POST') {
        payload = JSON.parse(req.body)
        const body = payload as BodyType;
        const ticketId = body.ticket;

        const monerisUrl = "https://gatewayt.moneris.com/chkt/request/request.php";
        const data = JSON.stringify({
            store_id: env.MONERIS_STORE_ID,
            api_token: env.MONERIS_API_TOKEN,
            checkout_id: env.MONERIS_CHECKOUT_ID,
            environment: "qa",
            action: "receipt",
            ticket: ticketId,
        });

        const monerisResponse = await fetch(monerisUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: data,
        })

        const monerisResponseJson = await monerisResponse.json() as MonerisReceiptResponse;
        return res.status(200).json(monerisResponseJson);
    }
}

export default receiptRequest