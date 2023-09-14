"use client";
import useCart from "../(store)/store";
import Image from "next/image";

export default function ProductPage(props: any) {
	const { searchParams } = props;
	const product = useCart((state) => state.product);
	const addItemToCart = useCart((state) => state.addItemToCart);

	console.log(product);

	if (!product?.name) {
		window.location.href = "/";
	}

	function handleAddToCart() {
		const newItem = {
			product: product,
			quantity: 1
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
						<h3 className="text-2xl font-bold">{product.name}</h3>
						<p className="text-sm flex-1">{product.description}</p>
						<p className="font-bold">
							£{product.default_price.unit_amount / 100}
						</p>
					</div>
					<button
						className="btn btn-secondary"
						onClick={handleAddToCart}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}
