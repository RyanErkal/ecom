import React from "react";
import { getAllCases } from "@/app/firebase/firebase";
import Card from "../components/Card";

const allCases = await getAllCases();

interface Case {
	id?: string;
	image?: string;
	name?: string;
	height?: string;
	width?: string;
	depth?: string;
	weight?: string;
	price?: number;
}

export default function Cases() {
	const caseList = allCases?.map((compcase: Case) => (
		<Card
			key={compcase.id}
			image={compcase.image}
			price={compcase.price}
			title={compcase.name}>
			<p>{compcase.height}</p>
			<p>{compcase.width}</p>
			<p>{compcase.depth}</p>
			<p>{compcase.weight}</p>
		</Card>
	));

	return (
		<>
			<div>
				<h1 className="text-3xl font-bold text-center m-4 text-secondary">
					CASES
				</h1>
				<div className="grid grid-cols-1 gap-6 m-6 md:grid-cols-2 xl:grid-cols-3">
					{caseList}
				</div>
			</div>
		</>
	);
}
