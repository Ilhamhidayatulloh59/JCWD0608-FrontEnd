"use server";

import { revalidateTag } from "next/cache";
import { notFound } from "next/navigation";

export async function tagRevalidate(tags: string) {
  revalidateTag(tags);
}

export async function getTodo() {
  const res = await fetch(
    "https://snazzyfoot-us.backendless.app/api/data/todo?sortBy=%60id%60%20asc",
    { cache: "force-cache", next: { tags: ["todo"] } }
  );
  return await res.json();
}

export async function getTodoDetail(objectId: string) {
  const res = await fetch(
    `https://snazzyfoot-us.backendless.app/api/data/todo/${objectId}`
  );
  if (!res.ok) return notFound();
  return await res.json();
}
