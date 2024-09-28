import prisma from "@/lib/db";
import "@/css/form.css";
import { User } from "@prisma/client";
import { Form } from "@/components/Form";

export default async function Page({ params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <>
      <h1>user id - {user?.id}</h1>
      <Form user={user!} />
    </>
  );
}
