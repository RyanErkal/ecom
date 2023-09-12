import { initializeApp } from "firebase/app";
import {
	getFirestore,
	doc,
	getDoc,
	collection,
	getDocs
} from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyDhQY3WgK7wVzW8yAIPXQvMA8wn8ruwMMY",
	authDomain: "ecom-67a54.firebaseapp.com",
	projectId: "ecom-67a54",
	storageBucket: "ecom-67a54.appspot.com",
	messagingSenderId: "100313982609",
	appId: "1:100313982609:web:1ec3df208f79e06cff4130"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getCpu(id: string) {
	const docRef = doc(db, "cpus", id);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		// docSnap.data() will be undefined
		console.log("No such document!");
	}
}

export async function getGpu(id: string) {
	const docRef = doc(db, "gpus", id);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		// docSnap.data() will be undefined
		console.log("No such document!");
	}
}

export async function getCase(id: string) {
	const docRef = doc(db, "cases", id);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		// docSnap.data() will be undefined
		console.log("No such document!");
	}
}

export async function getAllCpus() {
	const querySnapshot = await getDocs(collection(db, "cpus"));
	const cpus = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id
	}));
	return cpus;
}

export async function getAllGpus() {
	const querySnapshot = await getDocs(collection(db, "gpus"));
	const gpus = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id
	}));
	return gpus;
}

export async function getAllCases() {
	const querySnapshot = await getDocs(collection(db, "cases"));
	const cases = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id
	}));
	return cases;
}
