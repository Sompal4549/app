// "use client"
// import { Box, Flex, Heading, List, ListItem } from "@chakra-ui/react";
// import Link from "next/link";
// import { Provider } from "react-redux";
// import store from "../store/reduxStore";
// import Signup from "@/components/Form/signup";
import { Viewport } from "next";
import { Lusitana } from "next/font/google";
// import { wines } from "@/app/data/wine";
// import WineTable from "@/components/Table/WineTable";
// import TodoList from "@/components/Ui/TodoApp";
// import TodoForm from "@/components/Ui/TodoForm";
// import { sql } from "@vercel/postgres";
// import { unstable_noStore } from "next/cache";

export const viewport: Viewport = {
  themeColor: "black",
};

const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// import { auth, signIn, signOut } from "@/auth";
import Counter from "@/components/couter/Counter";

import { Quotes } from "@/components/quotes/Quotes";
import Todo from "@/components/todo/Todo";
import { useAppSelector } from "@/lib/hooks";


// function SignIn() {
//   return (
//     <form
//       action={async () => {
//         "use server";
//         await signIn("github");
//       }}
//     >
//       <p>You are not logged in</p>
//       <button type="submit">Sign in with GitHub</button>
//     </form>
//   );
// }

// function SignOut({ children }: { children: React.ReactNode }) {
//   return (
//     <form
//       action={async () => {
//         "use server";
//         await signOut();
//       }}
//     >
//       <p>{children}</p>
//       <button type="submit">Sign out</button>
//     </form>
//   );
// }
export default  function Home() {
  // let session = await auth();
  // let user = session?.user?.name;
  // console.log(user, session, "user");

  return (
    <div>
      <h1>Home</h1>
      <Counter/>
      <Quotes/>
      <Todo />
     
      {/* <div>{user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}</div> */}
      {/* <WineTable data={wines} /> */}
      {/* <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100vh"
        textAlign="center"
        flexDir="column"
      >
        <Heading className={`${lusitana.className}`} as="h1" mb="50px">
          Developer, A FrontEnd Developer
        </Heading>
        <Heading as="h2" mb="30px">
          This is my Portfolio of React and Next
          {/* {pets[0].name} */}
        {/* </Heading>
        <Heading as="h3" mb="20px"></Heading>
        <List display="flex" listStyleType="none" gridGap="30px">
          <ListItem>
            <Link href="/movies">Movies Page</Link>
          </ListItem>
        </List> */}
        {/* <form action={create}>
          <input type="text" name="name" />
          <button type="submit">Submit</button>
        </form> */}
        {/* <Signup user={user} session={session} /> */}
      {/* </Flex> */} 
      {/* <TodoList />
      <p>Todo form</p>
      <TodoForm /> */}
    </div>
  );
}
