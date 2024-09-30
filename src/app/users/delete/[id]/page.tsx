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
      <p>{user?.name}</p>
      <p>{user?.surname}</p>
    </>
  );
}
