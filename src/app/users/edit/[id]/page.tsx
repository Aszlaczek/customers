import prisma from "@/lib/db";
import "@/css/form.css";
import { Form } from "@/components/Form";
import { editUser } from "@/actions/actions";

export default async function Page({ params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <>
      <h1>Edit User - {user?.name}</h1>
      <Form user={user!} action={editUser} />
    </>
  );
}
