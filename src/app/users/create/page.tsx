import "@/css/form.css";
import { createUser } from "@/actions/actions";
export default function Create() {
  return (
    <>
      <h1>New User</h1>
      <form action={createUser}>
        <label htmlFor="name">
          <p>Name</p>
          <input type="text" id="name" name="name" placeholder="Write here" />
        </label>
        <label htmlFor="surname">
          <p>Surname</p>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Write here"
          />
        </label>
        <label htmlFor="email">
          <p>Email</p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Write here"
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </>
  );
}
