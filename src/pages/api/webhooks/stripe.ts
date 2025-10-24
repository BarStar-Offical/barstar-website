import { NextApiRequest, NextApiResponse } from "next";

const stripeWebhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Placeholder handler for Stripe webhooks
  // Replace with Stripe SDK verification and event handling in production.
  console.log("Stripe webhook received", req.body);
  return res.status(200).json({ received: true });
};

export default stripeWebhookHandler;
