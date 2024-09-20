import style from "@/css/page.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.list_of_socials}>
        <li>
          <p>Made by Adrian</p>
        </li>
        <li>
          <a
            className={style.socials}
            href="https://github.com/aszlaczek"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              id={style.github}
            >
              <path
                d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7C6.73 19.91 6.14 18 6.14 18A2.69 2.69 0 0 0 5 16.5c-.91-.62.07-.61.07-.61a2.13 2.13 0 0 1 1.53 1 2.14 2.14 0 0 0 2.91.83 2.16 2.16 0 0 1 .63-1.34c-2.14-.21-4.52-1.07-4.52-4.9a3.89 3.89 0 0 1 1-2.69 3.57 3.57 0 0 1 .1-2.64s.84-.27 2.75 1a9.63 9.63 0 0 1 5 0c1.91-1.29 2.75-1 2.75-1a3.57 3.57 0 0 1 .1 2.64 3.89 3.89 0 0 1 1 2.69c0 3.84-2.34 4.68-4.57 4.93a2.39 2.39 0 0 1 .68 1.85v2.75c0 .33.18.58.69.48A10 10 0 0 0 12 2Z"
                fillRule="evenodd"
              />
            </svg>
          </a>
          <a
            className={style.socials}
            href="https://linkedin.com/in/adrian-wzorek-902572309"
            target="_blank"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id={style.linkedin}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.667 3A1.322 1.322 0 0 1 21 4.298V19.7a1.323 1.323 0 0 1-1.333 1.3H4.328A1.32 1.32 0 0 1 3 19.701V4.3A1.32 1.32 0 0 1 4.328 3h15.339Zm-4.898 6.1a2.834 2.834 0 0 0-2.55 1.403h-.036V9.316H9.6V18h2.692v-4.296c0-1.133.214-2.23 1.616-2.23 1.382 0 1.4 1.296 1.4 2.303V18H18v-4.764c0-2.338-.503-4.136-3.231-4.136Zm-6.86.216H5.213V18h2.694V9.316ZM6.561 5A1.57 1.57 0 0 0 5 6.565a1.57 1.57 0 0 0 1.562 1.564l.142-.006a1.572 1.572 0 0 0 1.42-1.558l-.006-.142A1.572 1.572 0 0 0 6.562 5Z" />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}
