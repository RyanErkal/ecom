import React from "react";
import Image from "next/image";

type CardProps = {
	key?: string;
	image?: string;
	title?: string;
	price?: number;
	children?: React.ReactNode;
};

export default function Card({
	key,
	image = "image",
	title = "title",
	price = 0,
	children
}: CardProps) {
	return (
		<div className="card lg:card-side bg-base-200 shadow-xl" id={key}>
			<figure className="pl-4 pt-8 lg:py-8">
				<Image src={image} alt={title} width={200} height={200} />
			</figure>
			<div className="card-body text-center lg:text-left">
				<h2 className="text-2xl font-bold card-title text-center justify-center lg:justify-start lg:text-left">
					{title}
				</h2>
				{children}
				<div className="card-actions justify-around items-center lg:justify-end lg:flex-col lg:items-end">
					<h3 className="font-bold text-xl ">£{price}</h3>
					<button className="btn btn-secondary">Add to Cart</button>
				</div>
			</div>
		</div>
	);
}
