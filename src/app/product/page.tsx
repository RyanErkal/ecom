"use client";
import React from "react";
import { useState } from "react";
import useCart from "../(store)/store";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductPage(props: any) {
	const product = useCart((state) => state.product);
	const addItemToCart = useCart((state) => state.addItemToCart);
	const [quantity, setQuantity] = useState(1);
	const searchParams = props.searchParams;

	/* console.log(product);
	console.log(product.features); */

	if (!product) {
		const router = useRouter();
		router.push("/");
	}

	if (product) {
		const productFeatures = product.features.map((feature: any) => {
			return (
				<div className="flex flex-col gap-2 mt-2">
					<h3 className="text-xl font-bold">{feature.name}</h3>
				</div>
			);
		});
	}

	function handleAddToCart() {
		const newItem = {
			product: product,
			quantity: quantity
		};
		addItemToCart({ newItem });
	}

	return (
		<div className="flex flex-col p-6 bg-base-200">
			<div className="grid grid-cols-1 lg:grid-cols-2 w-full mx-auto">
				<div className="m-auto">
					<Image
						src={product.images[0]}
						alt={product.name}
						width={600}
						height={600}
					/>
				</div>
				<div className="flex flex-col gap-2 p-4 justify-between">
					<div className="flex flex-col lg:items-start text-xl items-center justify-between gap-2">
						<h3 className="text-3xl font-bold">{product.name}</h3>
						{productFeatures}
						<p className="font-bold text-3xl mt-2">
							£{product.default_price.unit_amount / 100}
						</p>
					</div>
					<div>
						<div className="w-full flex justify-center px-12">
							<button
								className="btn btn-accent w-12 h-10"
								onClick={() =>
									setQuantity((prevquantity) =>
										prevquantity > 2 ? prevquantity - 1 : 1
									)
								}>
								-
							</button>
							<button className="btn w-full h-10 lg:w-20">
								{quantity}
							</button>
							<button
								className="btn btn-accent w-12 h-10"
								onClick={() =>
									setQuantity(
										(prevquantity) => prevquantity + 1
									)
								}>
								+
							</button>
						</div>
						<button
							className="btn btn-secondary w-full mt-4"
							onClick={handleAddToCart}>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
