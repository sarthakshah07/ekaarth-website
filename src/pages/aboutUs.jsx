import { Grid2, Typography } from "@mui/material";
import WrapperComponent from "../Components/wrapperComponent";
import { AboutUsData } from "../contents/aboutUsData";

const AboutUs = () => {
  return (
    <WrapperComponent isLanding={false}>
      <Typography variant="h4">{AboutUsData.heading}</Typography>
      <Grid2 container spacing={2} pb={4}>
        <Grid2 size={12}>
          <Typography variant="body1">{AboutUsData.description1}</Typography>
        </Grid2>
        <Grid2 size={12}>
          <Typography variant="h6">{AboutUsData.logoHeading}</Typography>
          <img
            src={AboutUsData.logoImage}
            alt="logo"
            height={150}
            width="100%"
            style={{ objectFit: "cover" }}
          />
          <Typography variant="body1">{AboutUsData.logoDescription}</Typography>
        </Grid2>
        <Grid2 size={12}>
          <Typography variant="h6">{AboutUsData.profileHeading}</Typography>
          <Typography variant="body1">
            {AboutUsData.profileDescription}
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Typography variant="body1">
            {AboutUsData.arcitectProfileHeading}
          </Typography>
          <Typography variant="h6">{AboutUsData.arcitectName}</Typography>
          <Typography variant="body1">
            {AboutUsData.arcitectDescription}
          </Typography>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 5 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={2}
        >
          <img
            src={AboutUsData.arcitectImage}
            alt="logo"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}  display={"flex"}
          justifyContent={"center"}
          alignItems={"center"} p={2}>
        <img
            src={AboutUsData.certificateImage}
            alt="logo"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 7 }} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Typography variant="body1">{AboutUsData.certificateDescription}</Typography>
        </Grid2>
      </Grid2>
    </WrapperComponent>
  );
};
export default AboutUs;
