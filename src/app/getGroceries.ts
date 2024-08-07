"use server";

import db from "@/db/db";
import { groceries } from "@/db/schema";

export default async function getGroceries() {
  try {
    const myGroceries = await db.select().from(groceries);
    return myGroceries;
  } catch (error) {
    console.log(error);
    throw new Error("Error happened");
  }
}
