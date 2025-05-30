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
import breakfast from "../../json/breakfast.json"

const foodCollection = collection(db, "breakfast");

export const feedProducts = async () => {

    const querySnapshot = await getDocs(foodCollection);
    querySnapshot.forEach(async (food) => {
        await deleteDoc(doc(db, "breakfast", food.id));
    });

    breakfast.forEach(async (food) => {
        const docRef = await doc(foodCollection);
        await setDoc(docRef, { ...food, foodid: docRef.id, category: food.category.toUpperCase() });
    });
};


export const getFoodById = async ({ queryKey }) => {
    const [id] = queryKey;
    const docRef = await doc(db, "breakfast", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
};


export const getFoodByCategory = async ({queryKey}) => {
    const [category] = queryKey;
    const q = await query(foodCollection, where("category", "==", category.toUpperCase()));
    let querySnapshot = await getDocs(q);
    let result = [];
    querySnapshot.forEach((food) =>{
        result.push(food.data());
    })
    return result;
};

export const getFood = async () => {
    let querySnapshot = await getDocs(foodCollection);
    let result = [];
    querySnapshot.forEach(async (food) =>{
        await result.push(food.data());
    });
    console.log({ result });
    return result;
}

export const getFoodById2 = async () => {
    const q = await query(foodCollection, where("id2", "==", 1));
    let querySnapshot = await getDocs(q);
    let result = [];
    querySnapshot.forEach((food) =>{
        result.push(food.data());
    })
    return result;
};