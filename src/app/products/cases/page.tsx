import React from "react";
import { getAllCases } from "@/app/firebase/firebase";
import Card from "../components/Card";

const allCases = await getAllCases();

interface Case {
	id?: string;
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
			image="/images/cases/phanteks-p400a-digital-rgb.jpg"
			price={compcase.price}
			title={compcase.name}>
			<p>Phanteks P400A Digital RGB</p>
			<p>Phanteks P400A Digital RGB</p>
		</Card>
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
