import Popup from "@/components/Popup";
import Users from "@/components/User";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>Users List</h1>
      <Users />
      <Popup params={params} />
    </>
  );
}
