import React from "react";
import ProductCard from "./components/ProductCard";

async function getStripeProducts() {
	const Stripe = require("stripe");
	const stripe = Stripe(
		"sk_test_51Nq7BXCCN8mM1iY0qavKDs0OQClwegL9KrcoqvQcFedjvsry5Ljtrmgh0pEaTnU0JHrRjZIkSQnLpHCeIO2e8dMV00k7UsPVy2"
	);
	const res = await stripe.products.list({
		expand: ["data.default_price"]
	});
	const products = res.data;
	return products;
}

export default async function Home() {
	const products = await getStripeProducts();
	/* console.log(products); */
	return (
		<div className="p-6 flex flex-col">
			<h1 className="text-3xl font-bold p-6 text-center">
				Featured Products
			</h1>
			<div className="mx-auto w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
				{products.map((product: any) => (
					<ProductCard id={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
