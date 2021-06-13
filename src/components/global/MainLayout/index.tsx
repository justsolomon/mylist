import { Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Header from "../Header";

interface LayoutProps {
  /** Background if its the board page */
  bg?: string;

  children: React.ReactNode;
}

function MainLayout({ children, bg }: LayoutProps) {
  const [windowHeight, setWindowHeight] = useState<number>();

  useEffect(() => {
    const updateWindowHeight = () => setWindowHeight(window.innerHeight);
    if (window) {
      window.addEventListener("resize", updateWindowHeight);
    }
    return () => window.removeEventListener("resize", updateWindowHeight);
  }, []);

  return (
    <Box
      bg={bg && bg}
      bgSize="cover"
      overflowX="hidden"
      h={bg && (windowHeight ? windowHeight : "100vh")}
    >
      <Header hasBackground={bg ? true : false} />
      {children}
    </Box>
  );
}

export default MainLayout;
