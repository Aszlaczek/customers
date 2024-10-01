import prisma from "@/lib/db";
import Link from "next/link";

export default async function Users() {
  const users = await prisma.user.findMany({
    orderBy: {
      join: "asc",
    },
  });
  return (
    <ul className="userList">
      {users.map((user, id) => {
        return (
          <li key={id}>
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <p>{user.email}</p>
            <div className="options">
              <Link href={`/users/edit/${user.id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="24"
                  height="24"
                >
                  <path
                    fill="white"
                    d="M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z"
                  />
                </svg>
              </Link>
              <Link href={`/users/${user.id}`}>
                <svg
                  width="24"
                  height="24"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 11V20.4C19 20.7314 18.7314 21 18.4 21H5.6C5.26863 21 5 20.7314 5 20.4V11"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 17V11"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 17V11"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 7L16 7M3 7L8 7M8 7V3.6C8 3.26863 8.26863 3 8.6 3L15.4 3C15.7314 3 16 3.26863 16 3.6V7M8 7L16 7"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
