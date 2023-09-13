import React from "react";
import { getAllGpus } from "@/app/firebase/firebase";

const allGpus = await getAllGpus();

interface GPU {
	id: string;
	name?: string;
	baseclock?: string;
	boostlock?: string;
	memory?: string;
	memoryclock?: string;
}

export default function GPUs() {
	const gpuList = allGpus?.map((gpu: GPU) => (
		<div key={gpu.id}>
			<h2>{gpu.name}</h2>
			<p>{gpu.baseclock}</p>
			<p>{gpu.boostlock}</p>
			<p>{gpu.memory}</p>
			<p>{gpu.memoryclock}</p>
		</div>
	));

	return (
		<>
			<div>
				<h1>GPUs</h1>
				{gpuList}
			</div>
		</>
	);
}
