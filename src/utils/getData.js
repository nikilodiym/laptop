import { BASE_URL } from "./db_prifile";
// export const BASE_URL = "http://localhost:4040/notebbok/q=5";
export let arreyData;

export default async function getData(path) {
  try {
    const response = await fetch(`${BASE_URL}/${path}`);
    const data = await response.json();
    arreyData = data;
    return arreyData;
  } catch (error) {
    console.error(error);
  }
}
// getData("notebook");
