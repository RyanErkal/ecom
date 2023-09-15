"use client";

import React from "react";
import useCart from "../(store)/store";
import { useRouter } from "next/navigation";

export default function Cart() {
	const cart = useCart((state: any) => state.cart);
	const removeItemFromCart = useCart((state) => state.removeItemFromCart);
	const router = useRouter();
	/* console.log(cart); */

	async function checkout() {
		const lineItems = cart.map((item: any) => {
			return {
				price: item.product.default_price.id,
				quantity: item.quantity
			};
		});
		/* console.log(lineItems); */
		const res = await fetch("../api", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ lineItems })
		});
		const data = await res.json();
		router.push(data.session.url);
	}

	return (
		<div className="drawer drawer-end z-[100]">
			<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content m-0">
				{/* Page content here */}
				<label htmlFor="my-drawer-4" className="drawer-button btn">
					Cart {cart.length > 0 && cart.length}
				</label>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-4" className="drawer-overlay"></label>
				<div className=" p-4 w-96 h-full bg-base-200 text-base-content">
					<h3 className="text-3xl font-bold">Cart</h3>
					<button
						id="my-drawer-4"
						type="button"
						className="drawer-button absolute top-0 right-0 p-6 font-bold"
						onClick={() => {
							document.getElementById("my-drawer-4")?.click();
						}}>
						X
					</button>
					<h2 className="text-sm font-bold">
						Test Card Number: 4242 4242 4242 4242
					</h2>
					<h2 className="text-sm font-bold">CVC: Any 3 digits</h2>
					<h2 className="text-sm font-bold">Date: Any future date</h2>
					<div className="flex flex-col justify-between">
						<div className="">
							{cart.length === 0 && (
								<p className="text-sm">Your cart is empty.</p>
							)}

							{cart.length > 0 &&
								cart.map((item: any, itemIndex: number) => (
									<div className="flex flex-row justify-between items-center bg-base-100 p-4 my-2 rounded-xl">
										<div className="flex flex-col">
											<p
												key={itemIndex}
												className="font-bold">
												{item.product.name}
											</p>
											<div className="flex">
												<p>x{item.quantity}</p>
												<p className="ml-2">
													£
													{(item.quantity *
														item.product
															.default_price
															.unit_amount) /
														100}
												</p>
											</div>
										</div>
										<button
											className="btn btn-sm lg:btn text-sm"
											onClick={() => {
												removeItemFromCart(
													item.product.id
												);
											}}>
											Remove
										</button>
									</div>
								))}
						</div>
						<div className="my-6 p-4 flex justify-end">
							{cart.length > 0 && (
								<div className="text-3xl font-bold">
									Total: £
									{cart.reduce(
										(accumulator: number, item: any) =>
											accumulator +
											(item.product.default_price
												.unit_amount *
												item.quantity) /
												100,
										0
									)}
								</div>
							)}
						</div>
						{cart.length > 0 && (
							<div className="flex justify-end">
								<button
									className="btn btn-secondary font-bold text-2xl"
									onClick={checkout}>
									Checkout
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
