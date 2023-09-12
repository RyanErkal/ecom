import React from "react";
import Link from "next/link";
import Theme from "./Theme";

export default function Nav() {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<p>Products</p>
							<ul className="p-2">
								<li>
									<Link href="/products">All</Link>
								</li>
								<li>
									<Link href="/products/cpus">CPUs</Link>
								</li>
								<li>
									<Link href="/products/gpus">GPUs</Link>
								</li>
								<li>
									<Link href="/products/cases">Cases</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<p className="btn btn-ghost normal-case text-xl">
					<Link href="/">Erkommerce</Link>
				</p>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li tabIndex={0}>
						<details>
							<summary>Products</summary>
							<ul className="p-2">
								<li>
									<Link href="/products">All</Link>
								</li>
								<li>
									<Link href="/products/cpus">CPUs</Link>
								</li>
								<li>
									<Link href="/products/gpus">GPUs</Link>
								</li>
								<li>
									<Link href="/products/cases">Cases</Link>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>

			<div className="navbar-end">
				<Theme />
				<p className="btn ml-2">Log In</p>
			</div>
		</div>
	);
}
