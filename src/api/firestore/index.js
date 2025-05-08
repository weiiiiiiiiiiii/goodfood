import {
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    deleteDoc,
    query,
    where,
} from "firebase/firestore"
import { db } from "../firebaseConfig"
import breakfast from "@/json/breakfast.json"

const foodCollection = collection(db, "breakfast");

export const feedProducts = async () => {
    // DELETE ALL EXISTING DOCS
    const querySnapshot = await getDocs(foodCollection);
    querySnapshot.forEach(async (food) => {
        await deleteDoc(doc(db, "breakfast", food.id));
    });
    // ADD NEW DOCS
    breakfast.forEach(async (food) => {
        const docRef = await doc(foodCollection);
        await setDoc(docRef, { ...food, id: docRef.id, category: food.category.toUpperCase() });
    });
};

export const getProducts = async () => {
    const querySnapshot = await getDocs(foodCollection);

    // Convert the query to a json array.
    let result = [];
    querySnapshot.forEach(async (food) => {
        await result.push(food.data());
    });
    // console.log({ result });
    return result;
};

export const getProductById = async ({ queryKey }) => {
    const [id] = queryKey;
    const docRef = await doc(db, "breakfast", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
};

export const getProductsByCategory = async ({ queryKey }) => {
    const [category] = queryKey;
    const q = await query(
        foodCollection,
        where("category", "==", category.toUpperCase())
    );
    const querySnapshot = await getDocs(q);
    // Convert the query to a json array.
    let result = [];
    querySnapshot.forEach(async (food) => {
        await result.push(food.data());
    });
    return result;
};
