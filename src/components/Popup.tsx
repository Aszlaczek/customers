"use client";

import { deleteUser } from "@/actions/actions";
import prisma from "@/lib/db";
import Link from "next/link";
async function getUser({ param }: { param: { id: string } }) {
  const user = await prisma.user.findUnique({ where: { id: param.id } });
  return user;
}
export default async function Popup({ params }: { params: { id: string } }) {
  return (
    <div className="popup">
      <h1>Are you sure?</h1>
      <button onClick={() => deleteUser(params.id)}>Yes</button>
      <Link href={"/users"}>No</Link>
    </div>
  );
}
