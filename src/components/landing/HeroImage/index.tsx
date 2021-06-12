import React from "react";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";

function HeroImage() {
  return (
    <Box h={["50vh", "100vh"]} w={["100%", , "65%"]} bg="blue.100">
      <Image
        src="https://res.cloudinary.com/dazqhyrh7/image/upload/f_auto,q_auto:low/v1619983877/mylist_landing_hero.jpg"
        w="100%"
        h="100%"
        objectFit="cover"
        alt="Landing page illustration"
      />
    </Box>
  );
}

export default HeroImage;
