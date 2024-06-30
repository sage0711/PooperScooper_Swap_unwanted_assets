import { Stack, Box, Typography } from "@mui/joy";

import ImageCard from "../../ImageCard";
import Animate from "../../Animations";
import NextImg from "../../../assets/imgs/Next.png";

const Footer: React.FC = () => {
  const { AnimationBox } = Animate;
  const NextImageRightStyle = {
    borderRadius: "0",
    height: "60px",
    width: "60px",
    border: "none",
    background: "transparent",
    alignSelf: "center",
    cursor: "pointer",
    rotate: "180deg",
  };

  return (
    <Stack
      bgcolor={"#160700"}
      position={"relative"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"80px 20px"}
    >
      <AnimationBox option={1}>
        <Box sx={{ display: "flex", gap: { xs: "5px", sm: "31px" } }}>
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "50px", md: "70px" },
              fontFamily: "comics",
              background:
                "linear-gradient(180deg, #FFE801 50%, #F72800 91.33%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Swivul
          </Typography>
        </Box>
      </AnimationBox>
      <Typography
        sx={{
          mt: "22px",
          fontFamily: "comics",
          lineHeight: "28px",
          fontSize: "18px",
          fontWeight: "400",
          color: "#fff",
          textAlign: "center",
        }}
      >
        Copyright © 2024 We Have and You Have All rights reserved
      </Typography>
      <Box
        sx={{
          position: "absolute",
          right: "49px",
          bottom: "39px",
          alignSelf: "center",
          mt: "87px",
        }}
        onClick={() => window.location.replace("/")}
      >
        <ImageCard
          title=""
          description=""
          imageUrl={NextImg}
          style={NextImageRightStyle}
        />
      </Box>
    </Stack>
  );
};

export default Footer;
