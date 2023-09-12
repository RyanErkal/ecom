"use client";

import React from "react";
import { useEffect, useState } from "react";
import { getAllCpus } from "@/app/firebase/firebase";

export default function CPUs() {
	const [allCpus, setAllCpus] = useState(Array());

	useEffect(() => {
		getAllCpus().then((data) => {
			setAllCpus(data);
		});
	}, []);

	const cpuList = allCpus?.map((cpu) => (
		<div key={cpu.id}>
			<h2>{cpu.name}</h2>
			<p>{cpu.cores}</p>
			<p>{cpu.threads}</p>
		</div>
	));

	console.log(allCpus);

	return (
		<>
			<div>
				<h1>CPUs</h1>
				{cpuList}
			</div>
		</>
	);
}
