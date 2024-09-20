import style from "@/css/page.module.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={style.page}>{children}</div>;
}
