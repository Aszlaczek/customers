"use client";

import { editUser } from "@/actions/actions";
import { useState } from "react";

export type User = {
  id: String;
  name: String;
  surname: String;
  email: String;
  join: Date;
};

export function Form({ user }: { user: User }) {
  const [newUser, setNewUser] = useState(user);
  return (
    <form action={editUser}>
      <label htmlFor="name">
        <p>Name</p>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Write here"
          value={newUser.name as string}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
      </label>
      <label htmlFor="surname">
        <p>Surname</p>
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="Write here"
          value={newUser.surname as string}
          onChange={(e) => setNewUser({ ...newUser, surname: e.target.value })}
        />
      </label>
      <label htmlFor="email">
        <p>Email</p>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Write here"
          value={newUser.email as string}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input type="hidden" name="id" value={newUser.id as string} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}
