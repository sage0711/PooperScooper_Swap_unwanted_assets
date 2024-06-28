import { useEffect } from "react";
import { Stack, Box, Typography } from "@mui/joy";

import bgImg from "../../../assets/imgs/faq-bg.png";
import rocketImg from "../../../assets/imgs/rocket.png";
import ImageCard from "../../ImageCard";

interface PropsInterface {
  setPageStep: (step: number) => void;
}

const Welcome: React.FC<PropsInterface> = ({ setPageStep }) => {
  useEffect(() => {}, []);
  const BgImageStyle = {
    display: "flex",
    justifyContent: "end",
    borderRadius: "0",
    width: { xs: "300px", sm: "auto" },
    height: "100vh",
    border: "none",
    padding: "0",
    background: "transparent",
    aspectRatio: { xs: "3/5", sm: "3/5", md: "2/3" },
    maxWidth: "570px",
    maxHeight: "720px",
    position: "relative",
    alignSelf: { xs: "self-start", md: "end" },

    "&::before": {
      content: '""',
      position: "absolute",
      maxWidth: "200px",
      maxHeight: "300px",
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${rocketImg})`,
      backgroundSize: "cover",
      zIndex: 1,
      left: "30%",
      top: "33%",
      animation: "moveUp 1.2s linear forwards",
      "@keyframes moveUp": {
        from: {
          left: "30%",
          top: "33%",
          opacity: 1,
        },
        to: {
          left: "52%",
          top: "3%",
          opacity: 0,
        },
      },
    },
  };

  return (
    <Box
      id="welcome"
      sx={{
        display: "flex",
        bgcolor: "#160700",
        height: "100vh",
        position: "relative",
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
      onLoad={(event: any) => {
        setTimeout(() => {
          setPageStep(1);
        }, 200);
      }}
    >
      <ImageCard
        title=""
        description=""
        imageUrl={bgImg}
        style={BgImageStyle}
        imgStyle={{ width: "100%" }}
      />
      <Stack justifyContent={"center"}>
        <Box
          sx={{ display: "inline", textAlign: "center", mt: { xs: 20, md: 0 } }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "40px", sm: "40px", md: "50px", lg: "100px" },
              fontFamily: "comics",
              textAlign: "center",
              display: "inline",
            }}
          >
            WELCOME TO&nbsp;
          </Typography>
          <Typography
            sx={{
              color: "transparent",
              fontSize: {
                xs: "40px",
                sm: "40px",
                md: "50px",
                lg: "121px",
              },
              fontFamily: "comics",
              textAlign: "center",
              display: "inline",
              backgroundImage:
                "linear-gradient(180deg, #FFE801 50%, #F72800 91.33%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CRASH
          </Typography>
          <Typography
            sx={{
              color: "transparent",
              fontSize: { xs: "40px", sm: "40px", md: "50px", lg: "100px" },
              fontFamily: "comics",
              textAlign: "center",
              display: "block",
              backgroundImage:
                "linear-gradient(180deg, #FFE801 20%, #F72800 91.33%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            POOPER SCOOPER
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Welcome;
