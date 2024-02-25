import { Box, Badge, Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
export default function CardExample() {
  const property = {
    imageUrl:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/full_stack1_329d6b5595.png",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title1: "Modern home in city center in the heart of historic Los Angeles",
    title2: "Modern home in city center in the heart of historic Los Angeles",
    title3: "Modern home in city center in the heart of historic Los Angeles",
    title4: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" border="2px solid green">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title1}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title2}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          fontSize="lg"
          noOfLines={1}
        >
          {property.title3}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>
      </Box>

      <Button background="red.900" w="100%">Button</Button>
    </Box>
  );
}
