import { SimpleGrid, Box } from "@chakra-ui/react";

import React from "react";

const Boxexample = () => {
  return (
    <SimpleGrid
      columns={{
        base: 1, // 0px
        sm: 2, // ~480px. em is a relative unit and is dependant on the font size.
        md: 3, // ~768px
        lg: 4, // ~992px
        xl: 5, // ~1280px
        "2xl": 6,
      }}
      spacing={10}
    >
      <Box bg="tomato" height="180px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
  );
};

export default Boxexample;
