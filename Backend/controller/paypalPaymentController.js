import got from "got";
import axios from 'axios'

const getAccessToken = async () => {
    try {

        const response = await got.post(
            `${process.env.PAYPAL_BASEURL}/v1/oauth2/token`,
            {
                form: {
                    grant_type: "client_credentials",
                },
                headers: {
                    Authorization:
                        "Basic " +
                        Buffer.from(
                            `${process.env.PAYPAL_CLIENTID}:${process.env.PAYPAL_SECRET}`
                        ).toString("base64"),
                },
            }
        );
        console.log(response.body);
        const data = JSON.parse(response.body);
        const newAccessToken = data.access_token;
        return newAccessToken
    } catch (err) {
        throw new Error(err);
    }
};

export const createOrderPaypal = async (req, res) => {
    try {
        const {amount} = req.body;
        console.log(amount)
        if(!amount){
            return res.status(400).json({error: "Amount is required"})
        }
        const accessToken = await getAccessToken();

        const response = await axios.post(
            `${process.env.PAYPAL_BASEURL}/v2/checkout/orders`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                json: {
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                          amount: {
                            currency_code: "USD",
                            value: amount,
                            breakdown: {
                              item_total: {
                                currency_code: "USD",
                                value: amount,
                              },
                            },
                          },
                          items: [
                            {
                              name: "T-shirt",
                              quantity: "1",
                              unit_amount: {
                                currency_code: "USD",
                                value: amount,
                              },
                            },
                          ],
                        },
                      ],
                    

                    payment_source: {
                        paypal: {
                            experience_context: {
                                payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
                                payment_method_selected: "PAYPAL",
                                locale: "en-US",
                                return_url: `${process.env.PAYPAL_REDIRECT_BASEURL}/complete-payment`,
                                cancel_url: `${process.env.PAYPAL_REDIRECT_BASEURL}/cancel-payment`
                            }
                        }
                    }
                },
                responseType: "json",
            }
        );
        console.log(response.body)
        const orderId = response.body.id;
        console.log(orderId)

        // return res.status(200).json({ orderId })
        const { id, status, links } = response.body;

        // Find the payer-action link
        const approvalLink = links.find(link => link.rel === "payer-action")?.href;

        if (!approvalLink) {
            return res.status(500).json({ error: "Approval link not found" });
        }

        return res.status(200).json({ orderId: id, status, approvalLink });
    } catch (err) {
        res.status(500).json({ error: "internal server error" });
    }
};

export const captureOrder = async(req,res)=>{
    try{
        const accessToken = await getAccessToken();
        const { paymentId } = req.body;
        if (!paymentId) {
            return res.status(400).json({ success: false, message: "Missing order ID" });
        }

        const response = await axios.post(
            `${process.env.PAYPAL_BASEURL}/v2/checkout/orders/${paymentId}/capture`,
            {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                responseType: "json",
            }
        );
        
        const paymentData = response.body;
        res.status(200).json(paymentData);
        console.log(paymentData)
    }catch(err){
        res.status(500).json({error:"internal server error."})
    }
}

