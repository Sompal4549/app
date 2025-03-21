"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import CardContainer from "../Layout/CardContainer";
const MovieUi = ({ content, page }) => {
  return (
    <Box>
      <Text color="#fff">
        <CardContainer
          products={content.results}
          content={content}
          page={page}
          url={"upcoming"}
        />
      </Text>
    </Box>
  );
};

export default MovieUi;
