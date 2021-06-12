import { Box } from "@chakra-ui/layout";
import React from "react";
import Header from "../Header";

interface LayoutProps {
  /** Background if its the board page */
  bg?: string;

  children: React.ReactNode;
}

function MainLayout({ children, bg }: LayoutProps) {
  return (
    <Box bg={bg && bg} bgSize="cover" h={bg && (window ? window.innerHeight : "100vh")}>
      <Header hasBackground={bg ? true : false} />
      {children}
    </Box>
  );
}

export default MainLayout;
