import React from "react";
import { getAllCases } from "@/app/firebase/firebase";

const allCases = await getAllCases();

interface Case {
	id: string;
	name?: string;
	height?: string;
	width?: string;
	depth?: string;
	weight?: string;
}

export default function Cases() {
	const caseList = allCases?.map((compcase: Case) => (
		<div key={compcase.id}>
			<h2>{compcase.name}</h2>
			<p>{compcase.height}</p>
			<p>{compcase.width}</p>
			<p>{compcase.width}</p>
			<p>{compcase.weight}</p>
		</div>
	));

	return (
		<>
			<div>
				<h1>Cases</h1>
				{caseList}
			</div>
		</>
	);
}
