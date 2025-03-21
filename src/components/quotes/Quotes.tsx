'use client';
import { useGetQuotesQuery } from "@/lib/features/quotes/quotesApiSlice";
import { useState } from "react";
import styles from "./Quotes.module.css";
import { Box, Heading, Select } from "@chakra-ui/react";
const options = [5,10, 20, 30];
export const Quotes = ()=> {
    const [numberOfQuotes, setNumberOfQuotes] = useState(10);
    const {data, isError, isLoading, isSuccess}= useGetQuotesQuery(numberOfQuotes);


    if(isError){
        return(
            <Box>
                <Heading>There was an error!!!</Heading>
            </Box>
        )
    }
    if(isLoading){
        return (
            <Box>
                <Heading>
                    Loading...
                </Heading>
            </Box>
        )
    }
    if(isSuccess){
        return(
            <Box className={styles.container}>
                <Heading>
                    Select the Quantity of Quotes to Fetch:
                </Heading>
                <Select className={styles.select} value={numberOfQuotes} onChange={(e)=> {
                    setNumberOfQuotes(Number(e.target.value));
                }}>
                    {options.map((option)=>(
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Select>
                {data.quotes.map(({ author, quote, id }) => (
          <blockquote key={id}>
            &ldquo;{quote}&rdquo;
            <footer>
              <cite>{author}</cite>
            </footer>
          </blockquote>
        ))}
            </Box>
        )
    }
    return null
}