import React from "react";
import Image from "next/image";

export default function ProductCard({
	product,
	key
}: {
	product: any;
	key: any;
}) {
	return (
		<div className="card lg:card-side bg-base-200 shadow-xl" id={key}>
			<figure className="pl-4 pt-8 lg:py-8">
				<Image
					src={product.images[0]}
					alt={product.name}
					width={200}
					height={200}
				/>
			</figure>
			<div className="card-body text-center lg:text-left">
				<h2 className="text-2xl font-bold card-title text-center justify-center lg:justify-start lg:text-left">
					{product.name}
				</h2>
				<div className="card-actions justify-around items-center lg:justify-end lg:flex-col lg:items-end">
					<h3 className="font-bold text-xl ">
						£{product.default_price.unit_amount / 100}
					</h3>
					<button className="btn btn-secondary">Add to Cart</button>
				</div>
			</div>
		</div>
	);
}
