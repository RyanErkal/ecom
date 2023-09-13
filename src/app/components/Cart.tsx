import React from "react";

export default function Cart() {
	return (
		<div className="drawer drawer-end z-[100]">
			<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content m-0">
				{/* Page content here */}
				<label htmlFor="my-drawer-4" className="drawer-button btn">
					Cart
				</label>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-4" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
					{/* Sidebar content here */}
					<li>
						<a>Cart Item 1</a>
					</li>
					<li>
						<a>Cart Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
