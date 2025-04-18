"use client";
import type { AppStore } from "@/lib/store";
import { makeStore } from "@/lib/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";

interface Props {
    readonly children: ReactNode;
}
export const StoreProvider =({children}:Props)=>{
    const storeRef = useRef<AppStore | null>(null);
    if(!storeRef.current){
        storeRef.current = makeStore();
    }
    useEffect(()=>{
        if(storeRef.current != null){
            // configure listeners using the provided defaults
            // optional, but required for 'refetchOnFocus'/
            const unsubscribe = setupListeners
        }
    },[])
    return <Provider store={storeRef.current}>
        {children}
    </Provider>
}
