import React from "react";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import LandingIllustration from "../../../assets/images/landing.jpg";

function HeroImage() {
  return (
    <Box h={["50vh", "100vh"]} w={["100%", , "65%"]} bg="blue.100">
      <Image
        src={LandingIllustration}
        w="100%"
        h="100%"
        objectFit="cover"
        alt="Landing page illustration"
      />
    </Box>
  );
}

export default HeroImage;
