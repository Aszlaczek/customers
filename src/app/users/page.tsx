import getUser from "./getUsers";

export default async function Users() {
  const users = await getUser();
  const usersList = users.users.map((e: any) => e.firstName);
  console.log(usersList);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {usersList.map((name: string, id: number) => {
          return (
            <li key={id}>
              <h3>Name: {name}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
