import React from "react";
import CarouselGPU from "./components/Carousel";
import CarouselCPU from "./components/CarouselCPU";

export default function Home() {
	return (
		<div>
			<CarouselGPU />
			<div className="hero bg-base-200">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Erkal PC Store</h1>
						<p className="py-6">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Eos tenetur aspernatur hic, pariatur, iure
							repellat minima quo quidem similique animi delectus
							itaque eaque fugiat quisquam qui ullam maxime
							ducimus consequuntur!
						</p>
						<button className="btn btn-primary">Shop All</button>
					</div>
				</div>
			</div>
			<CarouselCPU />
		</div>
	);
}
