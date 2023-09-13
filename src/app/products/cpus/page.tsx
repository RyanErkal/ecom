import React from "react";
import { getAllCpus } from "@/app/firebase/firebase";
import Card from "../components/Card";

const allCpus = await getAllCpus();

interface CPU {
	id: string;
	image?: string;
	name?: string;
	cores?: string;
	threads?: string;
	turboclock?: string;
	price?: number;
}

export default function CPUs() {
	const cpuList = allCpus?.map((cpu: CPU) => (
		<Card key={cpu.id} image={cpu.image} price={cpu.price} title={cpu.name}>
			<p>{cpu.cores}</p>
			<p>{cpu.threads}</p>
			<p>{cpu.turboclock}</p>
		</Card>
	));

	return (
		<>
			<div>
				<h1 className="text-3xl font-bold text-center m-4 text-secondary">
					CPUs
				</h1>
				<div className="grid grid-cols-1 gap-6 m-6 md:grid-cols-2 xl:grid-cols-3">
					{cpuList}
				</div>
			</div>
		</>
	);
}
