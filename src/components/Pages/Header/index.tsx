import { useState } from "react";
import { Box } from "@mui/joy";

import Navbar from "../Navbar";
import reImg from "../../../assets/imgs/RE.png";
import reRImg from "../../../assets/imgs/RE_R.png";

import ImageCard from "../../ImageCard";

interface PropsInterface {
  setPageStep: (step: number) => void;
}

const Header: React.FC<PropsInterface> = ({ setPageStep }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const BgImageStyle = {
    display: "flex",
    justifyContent: "center",
    borderRadius: "0",
    border: "none",
    padding: "0",
    background: "transparent",
    transition: "all 0.5s ease",
  };

  const BgImageRightStyle = {
    display: "flex",
    justifyContent: "center",
    borderRadius: "0",
    border: "none",
    padding: "0",
    right: 0,
    background: "transparent",
    transition: "all 0.5s ease",
  };

  const BgImageTagStyle = {
    height: "100%",
  };

  const handlePageOption = () => {
    setIsExpanded(true);
  };

  return (
    <Box id="HEADER">
      <Box
        sx={{
          transition: "0.5s",
          display: "flex",
          bgcolor: "#160700",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{ display: "flex", position: "relative" }}
          onMouseOver={handlePageOption}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <Box sx={{ position: "relative", display: "flex" }}>
            <ImageCard
              title=""
              description=""
              imageUrl={reImg}
              style={BgImageStyle}
              imgStyle={BgImageTagStyle}
              cardStyle={{
                height: { xs: "40vh", sm: "60vh", md: "80vh", lg: "100vh" },
              }}
            />
          </Box>
          <Navbar isExpanded={isExpanded} setPageStep={setPageStep} />
          <ImageCard
            title=""
            description=""
            imageUrl={reRImg}
            style={BgImageRightStyle}
            imgStyle={BgImageTagStyle}
            cardStyle={{
              height: { xs: "40vh", sm: "60vh", md: "80vh", lg: "100vh" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
