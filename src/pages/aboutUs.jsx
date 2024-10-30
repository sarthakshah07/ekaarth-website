import { Grid2, Typography, useMediaQuery } from "@mui/material";
import WrapperComponent from "../Components/wrapperComponent";
import { AboutUsData } from "../contents/aboutUsData";

const highlighedText = {
  fontWeight: "bold",
};
const AboutUs = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <WrapperComponent isLanding={false}>
      <Typography
        variant="h6"
        fontSize={28}
        fontWeight={"bold"}
        width={"100%"}
        sx={{ display: "flex", justifyContent: "center" }}
        pt={6}
        pb={2}
        textTransform={"uppercase"}
      >
        {AboutUsData.heading}
      </Typography>
      <Grid2 container spacing={6} pb={4}>
        <Grid2 size={12}>
          <Typography variant="body1">
            <span style={highlighedText}>Ekaarth Design Studio</span> aka{" "}
            <span style={highlighedText}>EDS</span> is an Architectural firm
            established in Indore with a vision to provide better living
            conditions and surrounding to the people through Architecture,
            Interior and Landscape designing. EDS is a platform which gives the
            opportunity to the people to join hands and create a healthy
            lifestyle with less harm to the nature and more comfort to the
            people. <span style={highlighedText}>“Ekaarth"</span> is a
            combination of two absolute and self-potent words of Sanskrit i.e.
            <span style={highlighedText}>"Eka"</span> means oneness and unity
            and <span style={highlighedText}>"Artha"</span> means vision which
            perfectly defines the functioning of the firm. At EDS everyone
            including Architects, clients, design team, execution team and
            everyone involved in the project aims to achieve the best of the
            condition for all living beings by precisely analyzing for perfect
            action.
          </Typography>
        </Grid2>
        <Grid2 size={12}>
          <Typography
            variant="h6"
            fontSize={28}
            fontWeight={"bold"}
            width={"100%"}
            sx={{ display: "flex", justifyContent: "center" }}
            pb={2}
            textTransform={"uppercase"}
          >
            {AboutUsData.logoHeading}
          </Typography>
          {/* <img
            src={AboutUsData.logoImage}
            alt="logo"
            height={150}
            width="100%"
            style={{ objectFit: "cover" }}
          /> */}
          <Typography variant="body1">
            Our logo is more than a visual identity—it’s a reflection of our
            philosophy. The three equilateral triangles, housing the initials
            “EDS,” represent the <span style={highlighedText}>Equilibrium</span>{" "}
            in we strive for between the{" "}
            <span style={highlighedText}>Past, Present, and Future.</span> We
            draw inspiration from India’s rich traditions and cultural heritage
            (Past), combine them with modern design principles and practical
            solutions (Present), and look toward creating environments that will
            stand the test of time (Future). This balance of old and new guides
            everything we do at Ekaarth Design Studio.
          </Typography>
        </Grid2>
        <Grid2 size={12}>
          <Typography
            variant="h6"
            fontSize={28}
            fontWeight={"bold"}
            width={"100%"}
            sx={{ display: "flex", justifyContent: "center" }}
            pb={2}
            textTransform={"uppercase"}
          >
            {AboutUsData.profileHeading}
          </Typography>
          <Typography variant="body1">
            {AboutUsData.profileDescription}
          </Typography>
        </Grid2>
        <Grid2 size={12}>
          <Typography
            variant="h6"
            fontSize={28}
            fontWeight={"bold"}
            width={"100%"}
            pt={2}
            sx={{ display: "flex", justifyContent: "center" }}
            // pb={2}
            textTransform={"uppercase"}
          >
            {AboutUsData.arcitectName}
          </Typography>
          <Typography
            variant="h6"
            width={"100%"}
            sx={{ display: "flex", justifyContent: "center" }}
            fontWeight={"bold"}
          >
            {AboutUsData.arcitectProfileHeading}
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 7 }} height={"100%"}  display={"flex"} flexDirection={"column"} >
          {/*  sx={{transform:"translateY(-20px)"}} */}

          <Typography variant="body1">
            {AboutUsData.arcitectDescription}
          </Typography>
          {/* <Typography variant="body1">
            {AboutUsData.certificateDescription}
          </Typography> */}
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 5 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          minHeight={isMobile ? "60dvh" : "40dvh"}
          sx={{backgroundImage:`url(${AboutUsData.arcitectImage})`,backgroundSize: isMobile ? "cover" :"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}
          // p={2}
        >
          {/* <img
            src={AboutUsData.arcitectImage}
            alt="logo"
            height={430}
            // height={"100%"}
            width="100%"
            style={{
              objectFit: "contain",
              // transform:isMobile ? "translateX(0px)" :"translateX(-20px)"
            }}
          /> */}
        </Grid2>
        {/* <Grid2
          size={{ xs: 12}}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={2}
          
        >
       
          <Typography variant="body1">
            {AboutUsData.certificateDescription}
          </Typography>
        </Grid2> */}
        <Grid2
          size={{ xs: 12 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img
            src={AboutUsData.certificateImage}
            alt="logo"
            width="100%"
            // height={700}
            style={{ objectFit: "cover" }}
          />
        </Grid2>
      </Grid2>
    </WrapperComponent>
  );
};
export default AboutUs;
