import { env } from "~/env.mjs";
import { type NextApiRequest, type NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';
import { type PreloadMonerisCheckoutResponse } from "~/lib/moneris/monerisTypes";

const preloadRequest = async (req: NextApiRequest, res: NextApiResponse<PreloadMonerisCheckoutResponse>): Promise<void> => {

    if (req.method === 'POST') {
        try {

            const monerisUrl = "https://gatewayt.moneris.com/chkt/request/request.php";
            const data = JSON.stringify({
                store_id: env.NEXT_PUBLIC_MONERIS_STORE_ID,
                api_token: env.NEXT_PUBLIC_MONERIS_API_TOKEN,
                checkout_id: env.NEXT_PUBLIC_MONERIS_CHECKOUT_ID,
                environment: "qa",
                action: "preload",
                order_no: `order_${uuid()}`,
            });

            const monerisResponse = await fetch(monerisUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: data,
            })

            const monerisResponseJson = await monerisResponse.json() as PreloadMonerisCheckoutResponse;
            return res.status(200).json(monerisResponseJson);

        } catch (e) {
            return res.status(500);
        }
    }
    return res.status(405).json({ message: 'Unsupported method only PATCH is allowed' });
};

export default preloadRequest;