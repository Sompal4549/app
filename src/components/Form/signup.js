"use client";
// import { sql } from "@vercel/postgres";

// import { useFormState } from "react-dom";
import { Input, Button } from "@chakra-ui/react";
// import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
// import { useRouter } from "next/router";
// import { createUser } from "@/app/lib/actions";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Signup({ user, session }) {
  // const router = useRouter();
  const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createUser, initialState);
  // const date = new Date().toLocaleDateString();
  // async function dispatch(formData) {
  //   "use server";
  //   const userName = formData.get("userName");
  //   const userEmail = formData.get("userEmail");
  //   const userPassword = formData.get("userPassword");
  //   try {
  //     await sql`
  //     INSERT INTO AppUsers (userName, userEmail, userPassword) VALUES (${userName}, ${userEmail}, ${userPassword})
  //     `;
  //   } catch (error) {
  //     return {
  //       message: `Database Error: Failed to Sign In.`,
  //     };
  //   }
  //   revalidatePath("/movies");
  //   redirect("/movies");
  // }
  // console.log(session);
  return (
    <form
    // action={dispatch}
    >
      <label htmlFor="name" className="mb-2 block text-sm font-medium">
        userName {user}
      </label>
      <Input
        type="text"
        name="userName"
        id="name"
        aria-describedby="userName-error"
      />
      {/* {state?.errors?.userName &&
        state?.errors.userName.map((error) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))} */}

      <label htmlFor="email" className="mb-2 block text-sm font-medium">
        Enter your Email
      </label>
      <Input
        id="email"
        name="userEmail"
        type="email"
        placeholder="Enter your mail"
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
        aria-describedby="userEmail-error"
      />
      {/* {state?.errors?.userEmail &&
        state?.errors?.userEmail?.map((error) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))} */}

      {/* Invoice Status */}
      <label htmlFor="password" className="mb-2 block text-sm font-medium">
        Password
      </label>
      <Input
        type="text"
        name="userPassword"
        id="password"
        aria-describedby="userPassword-error"
      />
      {/* {state?.errors?.userPassword &&
        state?.errors?.userPassword?.map((error) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))} */}
      <Link
        href="/movies"
        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
      >
        Cancel
      </Link>
      <Button type="submit">Login</Button>
    </form>
  );
}
