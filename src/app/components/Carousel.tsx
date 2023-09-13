import React from "react";
import Image from "next/image";

export default function CarouselGPU() {
	return (
		<div className="carousel carousel-end rounded-box">
			<div className="carousel-item">
				<Image src="/4070.png" width={600} height={600} alt="4070" />
			</div>
			<div className="carousel-item">
				<Image src="/4080.png" width={600} height={600} alt="4080" />
			</div>
			<div className="carousel-item">
				<Image src="/4090.png" width={600} height={600} alt="4090" />
			</div>
			<div className="carousel-item">
				<Image src="/4070.png" width={600} height={600} alt="4070" />
			</div>
			<div className="carousel-item">
				<Image src="/4080.png" width={600} height={600} alt="4080" />
			</div>
			<div className="carousel-item">
				<Image src="/4090.png" width={600} height={600} alt="4090" />
			</div>
			<div className="carousel-item">
				<Image src="/4070.png" width={600} height={600} alt="4070" />
			</div>
			<div className="carousel-item">
				<Image src="/4080.png" width={600} height={600} alt="4080" />
			</div>
			<div className="carousel-item">
				<Image src="/4090.png" width={600} height={600} alt="4090" />
			</div>
		</div>
	);
}
