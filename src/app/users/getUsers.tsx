export default async function getUser() {
  const data = await fetch("https://dummyjson.com/users").then((data) =>
    data.json()
  );
  return data;
}
