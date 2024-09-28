"use client";
import Link from "next/link";
import style from "@/css/page.module.css";
import { usePathname } from "next/navigation";
export default function Navigation() {
  const pathName = usePathname();
  return (
    <nav className={style.navigation}>
      <ul className={style.nav_list}>
        <li className={`${pathName === "/" ? style.active : style.item}`}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={`${pathName === "/users" ? style.active : style.item}`}>
          <Link href={"/users"}>Users</Link>
        </li>
        <li
          className={`${
            pathName === "/users/create" ? style.active : style.item
          }`}
        >
          <Link href={"/users/create"}>Create User</Link>
        </li>
      </ul>
    </nav>
  );
}
