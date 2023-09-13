import React from "react";
import { getAllGpus } from "@/app/firebase/firebase";
import Card from "../components/Card";

const allGpus = await getAllGpus();

interface GPU {
	id: string;
	image?: string;
	name?: string;
	baseclock?: string;
	boostclock?: string;
	memory?: string;
	memoryclock?: string;
	price?: number;
}

export default function GPUs() {
	const gpuList = allGpus?.map((gpu: GPU) => (
		<Card key={gpu.id} image={gpu.image} price={gpu.price} title={gpu.name}>
			<p>{gpu.baseclock}</p>
			<p>{gpu.boostclock}</p>
			<p>{gpu.memory}</p>
			<p>{gpu.memoryclock}</p>
		</Card>
	));

	return (
		<>
			<div>
				<h1 className="text-3xl font-bold text-center m-4 text-secondary">
					GPUs
				</h1>
				<div className="grid grid-cols-1 gap-6 m-6 md:grid-cols-2 xl:grid-cols-3">
					{gpuList}
				</div>
			</div>
		</>
	);
}
