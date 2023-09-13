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
			<figure>
				<Image src={image} alt={title} width={500} height={500} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				{children}
				<p className="card-price">{price}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Add to Cart</button>
				</div>
			</div>
		</div>
	);
}
