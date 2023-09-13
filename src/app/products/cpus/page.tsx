import React from "react";
import { getAllCpus } from "@/app/firebase/firebase";

const allCpus = await getAllCpus();

interface CPU {
	id: string;
	name?: string;
	cores?: string;
	threads?: string;
}

export default function CPUs() {
	const cpuList = allCpus?.map((cpu: CPU) => (
		<div key={cpu.id}>
			<h2>{cpu.name}</h2>
			<p>{cpu.cores}</p>
			<p>{cpu.threads}</p>
		</div>
	));

	return (
		<>
			<div>
				<h1>CPUs</h1>
				{cpuList}
			</div>
		</>
	);
}
