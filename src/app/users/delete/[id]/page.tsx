"use client";
import prisma from "@/lib/db";

export default async function Page({ params }: { params: { id: String } }) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id as string,
    },
  });

  return (
    <>
      <h1>Are you Sure?</h1>
      <h3>To delete</h3>
      <p>
        {user?.name} {user?.surname}
      </p>
      <button onClick={() => console.log("work")}>Yes</button>
      <button>No</button>
    </>
  );
}
