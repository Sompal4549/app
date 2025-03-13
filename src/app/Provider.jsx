"use client";
// import TodoProvider from "@/context/TodoContext";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
export default function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        {/* <TodoProvider> */}
        {children}
        {/* </TodoProvider> */}
      </ChakraProvider>
    </CacheProvider>
  );
}
