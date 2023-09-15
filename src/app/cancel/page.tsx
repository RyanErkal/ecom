import Link from "next/link";
import React from "react";

export default function Success() {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<h1>Maybe next time...</h1>
			<Link href="/">
				<button className="btn btn-secondary">Back to home</button>
			</Link>
		</div>
	);
}
