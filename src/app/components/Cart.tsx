"use client";

import React from "react";
import useCart from "../(store)/store";

export default function Cart() {
	const cart = useCart((state: any) => state.cart);
	console.log(cart);
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
					<div className="flex flex-col justify-between">
						<div>
							{cart.length === 0 &&
								"Your cart is empty. Add some items to your cart to see them here."}

							{cart.length > 0 &&
								cart.map((item: any, itemIndex: number) => (
									<div className="flex flex-row justify-between items-center bg-base-100 p-4 my-2 rounded-xl">
										<p key={itemIndex}>
											{item.product.name}
										</p>
										<p>x{item.quantity}</p>
										<p>
											£
											{(item.quantity *
												item.product.default_price
													.unit_amount) /
												100}
										</p>
										<button className="btn btn-secondary">
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
					</div>
				</div>
			</div>
		</div>
	);
}
