import { Box, Stack, Typography } from "@mui/joy";
import Animate from "../../Animations";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Home: React.FC = () => {
  const { AnimationBox, AnimationText } = Animate;

  return (
    <Stack
      sx={{
        bgcolor: "#160700",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: { xs: "60px 20px", sm: "60px 91px" },
        minHeight: "80vh",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "fixed",
          zIndex: 3,
          width: "80%",
        }}
      >
        <Box
          sx={{
            lineHeight: "37px",
            cursor: "pointer",
          }}
          onClick={() => window.location.replace("/")}
        >
          <Typography
            sx={{
              fontSize: "28px",
              fontFamily: "comics",
              background:
                "linear-gradient(204.77deg, #FFE801 25.22%, #FDBB0E 93.98%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Swivul
          </Typography>
        </Box>

        <AnimationBox option={4}>
          <WalletMultiButton />
        </AnimationBox>
      </Box>
      <Stack
        sx={{
          mt: "20px",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-around",
        }}
      >
        <Stack sx={{ mt: "106px" }}>
          <AnimationText
            text="Welcome To"
            delay={0.2}
            style={{
              fontSize: { xs: "50px", md: "120px" },
              textAlign: "center",
              color: "#fff",
              fontFamily: "comics",
            }}
          />

          <AnimationText
            text="Swivul"
            delay={1}
            style={{
              fontSize: { xs: "50px", md: "120px" },
              textAlign: "center",
              fontFamily: "comics",
              background:
                "linear-gradient(180deg, #FFE801 50%, #F72800 91.33%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          />
        </Stack>
        <Typography
          sx={{
            fontFamily: "Poppin",
            lineHeight: "28px",
            fontSize: "19px",
            fontWeight: "400",
            color: "#fff",
            maxWidth: "812px",
            textAlign: "center",
          }}
        >
          Dive into the world of CRASHCOIN, a community-driven meme token on the
          Solana network, designed to defy the odds.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Home;
