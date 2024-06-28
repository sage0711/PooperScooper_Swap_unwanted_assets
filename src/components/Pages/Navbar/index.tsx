import React, { useState } from "react";
import { Stack, Typography } from "@mui/joy";

interface PropsInterface {
  isExpanded: boolean;
  setPageStep: (step: number) => void;
}

const Navbar: React.FC<PropsInterface> = ({ isExpanded, setPageStep }) => {
  const handleItemClick = (item: any) => {
    setPageStep(2);
    window.location.replace(`/#${item}`);
  };

  const getItemStyle = (item: any) => ({
    fontSize: 28,
    fontFamily: "comics",
    textAlign: "center",
    visibility: isExpanded ? "visible" : "hidden",
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      backgroundImage: "linear-gradient(180deg, #FFE801 50%, #F72800 91.33%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  });

  return (
    <Stack
      sx={{
        top: 0,
        right: 0,
        width: isExpanded ? "400px" : 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "55px",
        height: "100vh",
        background: isExpanded
          ? `linear-gradient(to right, transparent 50%, #1C0A00 50%)`
          : "transparent",
        backgroundSize: "200% 100%",
        transition: "0.4s",
        backgroundPosition: isExpanded ? "100% center" : "0% center",
        animation: isExpanded ? "slideRightToLeft 0.3s linear forwards" : "",
        "@keyframes slideRightToLeft": {
          from: {
            backgroundPosition: "0% center",
          },
          to: {
            backgroundPosition: "100% center",
          },
        },
      }}
    >
      {["HOME", "ABOUT", "TOKENOMICS", "STATICTICS"].map((item) => (
        <Typography
          key={item}
          sx={getItemStyle(item)}
          onClick={() => handleItemClick(item)}
        >
          {item}
        </Typography>
      ))}
    </Stack>
  );
};

export default Navbar;
