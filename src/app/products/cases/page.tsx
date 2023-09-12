"use client";

import React from "react";
import { useEffect, useState } from "react";
import { getAllCases } from "@/app/firebase/firebase";

export default function Cases() {
	const [allCases, setAllCases] = useState(Array());

	useEffect(() => {
		getAllCases().then((data) => {
			setAllCases(data);
		});
	}, []);

	const caseList = allCases?.map((compcase) => (
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
