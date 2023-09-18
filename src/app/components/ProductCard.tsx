"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useCart from "../(store)/store";

export default function ProductCard({
	product,
	key
}: {
	product: any;
	key: any;
}) {
	const setProduct = useCart((state: any) => state.setProduct);
	const addItemToCart = useCart((state) => state.addItemToCart);

	const router = useRouter();

	function onProductClick() {
		const newProduct = product;
		setProduct({ newProduct });
		router.push("/product");
	}

	function handleAddToCart(e: Event) {
		const newItem = {
			product: product,
			quantity: 1
		};
		addItemToCart({ newItem });
		e.stopPropagation();
	}

	return (
		<div
			className="card xl:card-side bg-base-200 shadow-xl cursor-pointer hover:shadow-2xl transition-all ease-in-out"
			key={key}
			onClick={onProductClick}>
			<figure className="pl-4 pt-8 lg:py-8">
				<Image
					src={product.images[0]}
					alt={product.name}
					width={300}
					height={300}
				/>
			</figure>
			<div className="card-body justify-between text-center xl:text-left">
				<div className="flex flex-col text-center justify-center xl:justify-start xl:text-left">
					<h2 className="text-2xl font-bold card-title text-center justify-center xl:justify-start xl:text-left">
						{product.name}
					</h2>
					<p className="text-md">{product.description}</p>
				</div>
				<div className="card-actions justify-around items-center xl:justify-end xl:flex-col xl:items-end">
					<h3 className="font-bold text-xl ">
						£{product.default_price.unit_amount / 100}
					</h3>
					<button
						className="btn btn-secondary"
						onClick={(e: any) => handleAddToCart(e)}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}
