import { Box, Stack, Typography } from "@mui/joy";

import Animate from "../../Animations";
import aboutImg from "../../../assets/imgs/AboutBg.png";

const About: React.FC = () => {
  const { AnimationBox } = Animate;

  return (
    <Stack
      id="ABOUT"
      sx={{
        bgcolor: "#160700",
        position: "relative",
        padding: { xs: "60px 25px", md: "60px 91px" },
        justifyContent: "space-between",
        height: "100%",
        minHeight: "80vh",
      }}
    >
      <AnimationBox
        option={3}
        styles={{
          display: "flex",
          backgroundImage: `url(${aboutImg})`,
          justifyContent: "space-around",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          padding: { xs: "75px 22px", md: "80px 100px" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "50px", md: "70px", lg: "102px" },
              fontFamily: "comics",
              background:
                "linear-gradient(180deg, #FFE801 50%, #F72800 91.33%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textAlign: "center",
            }}
          >
            POOPER SCOOPER
          </Typography>
          <Box
            sx={{
              maxWidth: "560px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppin",
                lineHeight: { xs: "20px", md: "35px" },
                fontSize: { xs: "12px", lg: "19px" },
                fontWeight: "400",
                color: "#fff",
              }}
            >
              Airdrops and adverts clutter your wallet. This tool allows you to
              quickly "Scoop" all your unwanted assets into $USDC via{" "}
              <a href="https://jup.ag/">
                <u>Jupiter swaps.</u>
              </a>
              <br />
              swaps. Token accounts for scooped assets are closed, returning the
              rent to you as Solana. (Typically 0.0024 Solana per account
              closed). A1% fee is currently taken from all swaps, no fee is
              taken from account closures.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppin",
                lineHeight: { xs: "20px", md: "35px" },
                fontSize: { xs: "12px", lg: "19px" },
                fontWeight: "400",
                color: "#fff",
              }}
            >
              Our future plans include introducing decentralized applications
              (dApps) that offer tangible utility and rewards for our community.
            </Typography>
          </Box>
        </Box>
        <Stack sx={{ justifyContent: "space-around" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                width: "40px",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#ff371a",
                color: "#fbe246",
                fontFamily: "comics",
                fontSize: "20px",
                borderRadius: "50px",
              }}
            >
              1
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "15px", md: "20px", lg: "30px" },
                  fontFamily: "comics",
                  background:
                    "linear-gradient(180deg, #FFE801 50%, #F72800 91.33%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textWrap: "nowrap",
                }}
              >
                WAIT FOR ASSETS TO LOAD
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppin",
                  lineHeight: { xs: "20px", md: "35px" },
                  fontSize: { xs: "12px", lg: "19px" },
                  fontWeight: "400",
                  color: "#fff",
                }}
              >
                Scooper will check your wallet for assets that can be swapped
                and accounts that can be closed and present them in a list below
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                width: "40px",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#ff371a",
                color: "#fbe246",
                fontFamily: "comics",
                fontSize: "20px",
                borderRadius: "50px",
              }}
            >
              2
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "15px", md: "20px", lg: "30px" },
                  fontFamily: "comics",
                  background:
                    "linear-gradient(180deg, #FFE801 50%, #F72800 91.33%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textWrap: "nowrap",
                }}
              >
                WAIT FOR ASSETS TO LOAD
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppin",
                  lineHeight: { xs: "20px", md: "35px" },
                  fontSize: { xs: "12px", lg: "19px" },
                  fontWeight: "400",
                  color: "#fff",
                }}
              >
                Scooper will check your wallet for assets that can be swapped
                and accounts that can be closed and present them in a list below
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                width: "40px",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#ff371a",
                color: "#fbe246",
                fontFamily: "comics",
                fontSize: "20px",
                borderRadius: "50px",
              }}
            >
              3
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "15px", md: "20px", lg: "30px" },
                  fontFamily: "comics",
                  background:
                    "linear-gradient(180deg, #FFE801 50%, #F72800 91.33%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textWrap: "nowrap",
                }}
              >
                WAIT FOR ASSETS TO LOAD
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppin",
                  lineHeight: { xs: "20px", md: "35px" },
                  fontSize: { xs: "12px", lg: "19px" },
                  fontWeight: "400",
                  color: "#fff",
                }}
              >
                Scooper will check your wallet for assets that can be swapped
                and accounts that can be closed and present them in a list below
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                width: "40px",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#ff371a",
                color: "#fbe246",
                fontFamily: "comics",
                fontSize: "20px",
                borderRadius: "50px",
              }}
            >
              4
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "15px", md: "20px", lg: "30px" },
                  fontFamily: "comics",
                  background:
                    "linear-gradient(180deg, #FFE801 50%, #F72800 91.33%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textWrap: "nowrap",
                }}
              >
                WAIT FOR ASSETS TO LOAD
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppin",
                  lineHeight: { xs: "20px", md: "35px" },
                  fontSize: { xs: "12px", lg: "19px" },
                  fontWeight: "400",
                  color: "#fff",
                }}
              >
                Scooper will check your wallet for assets that can be swapped
                and accounts that can be closed and present them in a list below
              </Typography>
            </Box>
          </Box>
        </Stack>
      </AnimationBox>
    </Stack>
  );
};

export default About;
