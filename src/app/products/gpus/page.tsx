"use client";

import React from "react";
import { useEffect, useState } from "react";
import { getAllGpus } from "@/app/firebase/firebase";

export default function GPUs() {
	const [allGpus, setAllGpus] = useState(Array());

	useEffect(() => {
		getAllGpus().then((data) => {
			setAllGpus(data);
		});
	}, []);

	const gpuList = allGpus?.map((gpu) => (
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
