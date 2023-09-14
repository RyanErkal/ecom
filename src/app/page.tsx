import React from "react";
import CarouselGPU from "./components/Carousel";
import CarouselCPU from "./components/CarouselCPU";
import Stripe from "stripe";
import Product from "./product/page";
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
	console.log(products);
	return (
		<div className="p-4 flex flex-col">
			<div className="max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				{products.map((product: any) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
