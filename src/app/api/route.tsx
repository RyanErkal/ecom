import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: any) {
	// if (request.method !== 'POST') { return res.sendStatus(405) }
	const body = await request.json();

	if (body.lineItems.length === 0) {
		return new Response("Error", {
			status: 405
		});
	}

	try {
		const stripe = new Stripe(
			"sk_test_51Nq7BXCCN8mM1iY0qavKDs0OQClwegL9KrcoqvQcFedjvsry5Ljtrmgh0pEaTnU0JHrRjZIkSQnLpHCeIO2e8dMV00k7UsPVy2",
			{
				apiVersion: "2023-08-16"
			}
		);

		const session = await stripe.checkout.sessions.create({
			success_url: "http://localhost:3000/success",
			cancel_url: "http://localhost:3000/cancel",
			line_items: body.lineItems,
			mode: "payment"
		});
		return NextResponse.json({ session });
	} catch (err) {
		console.log("BROKED");
		console.log(err);
		return new Response("Error", {
			status: 405
		});
	}
}
