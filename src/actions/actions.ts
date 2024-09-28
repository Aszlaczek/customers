"use server";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export async function createUser(formData: FormData) {
  await prisma.user.create({
    data: {
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
      email: formData.get("email") as string,
    },
  });
  redirect("/users");
}

export async function editUser(formData: FormData) {
  await prisma.user.update({
    where: {
      id: formData.get("id") as string,
    },
    data: {
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
      email: formData.get("email") as string,
    },
  });
  redirect("/");
}
