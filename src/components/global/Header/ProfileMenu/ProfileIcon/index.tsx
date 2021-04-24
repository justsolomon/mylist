import React from "react";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";

interface ImageProps {
  /** Source of the image */
  imgSrc: string;

  /** Boolean to know whether profile icon is rendered in menu */
  inMenu?: boolean;
}

function ProfileIcon({ imgSrc, inMenu }: ImageProps) {
  return (
    <Box boxSize="35px" rounded="full" bg="#ffffff50">
      <Image
        src={`${imgSrc}&size=35&rounded=true&format=svg&background=${
          inMenu ? "00000070" : "ffffff50"
        }&color=fff&bold=true`}
        cursor="pointer"
      />
    </Box>
  );
}

function arePropsEqual(prevProps: ImageProps, nextProps: ImageProps) {
  return prevProps.imgSrc === nextProps.imgSrc;
}

export default React.memo(ProfileIcon, arePropsEqual);
