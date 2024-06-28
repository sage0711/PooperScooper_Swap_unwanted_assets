import { Suspense, lazy } from "react";
import { Box } from "@mui/joy";

const Home = lazy(() => import("../../components/Pages/Home"));
const About = lazy(() => import("../../components/Pages/About"));
const AssetList = lazy(() => import("../../components/Pages/AssetList"));
const Footer = lazy(() => import("../../components/Pages/Footer"));

const Dashboard = () => {
  const LoadingScreen = () => {
    return (
      <Box
        sx={{
          bgcolor: "#160700",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    );
  };

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            transition: "opacity 2s",
          }}
        >
          <Home />
          <About />
          <AssetList />
          <Footer />
        </Box>
      </Box>
    </Suspense>
  );
};

export default Dashboard;
