import { Box, Container, Grid2, Typography, useMediaQuery } from "@mui/material";
import WrapperComponent from "../../Components/wrapperComponent";
import homelogo from "../../assets/images/homeLogo.png";
import CommonSlider from "../../Components/CommonSlider";
import { sliderData } from "../../contents/homePage/sliderData";
import CommonHeader from "../../Components/CommonHeader";

const Landing = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    // <WrapperComponent>
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
       
      }}
    >
      <CommonHeader isLanding/>
      <Box sx={{ width: "100%" }}>
      <img
        src={homelogo}
        alt="logo"
        width="100%"
        height={isMobile ? 150 : 250}
        style={{ objectFit: "contain" }}
        //  className="home-logo"
      />

      <Typography
        variant={isMobile ? "body1" : "h6"}
        width={"100%"}
        sx={{ display: "flex", justifyContent: "center", flex: 1 ,transform:"translateY(20px)" }}
      >
        कर्मणः सुकृतस्य सिद्धिं सद्यः प्रसिद्ध्यति
      </Typography>
      </Box>
     

      <Box sx={{ width: "100%", mb: 4 }}>
        <CommonSlider sliderData={sliderData} />
      </Box>
    </Container>
  );
};

export default Landing;
