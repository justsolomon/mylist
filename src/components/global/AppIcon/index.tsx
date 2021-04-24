import React from "react";
import { Image } from "@chakra-ui/image";
import BrandLogo from "../../../assets/icons/appicon.png";

interface IconProps {
  /** Height of app icon */
  height: string;

  /** Width of app icon */
  width: string;
}

function AppIcon({ height, width }: IconProps) {
  return <Image src={BrandLogo} h={height} w={width} />;
}

export default AppIcon;
