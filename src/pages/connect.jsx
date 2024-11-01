import { Button, Card, Grid2, TextField, Typography } from "@mui/material";
import WrapperComponent from "../Components/wrapperComponent";
import { AboutUsData } from "../contents/aboutUsData";
import { useFormik } from "formik";

const ConnectPage = () => {

  return (
    <WrapperComponent isLanding={false}>
       <Typography
        variant="h6"
        fontSize={24}
        fontWeight={"bold"}
        width={"100%"}
        sx={{ display: "flex", justifyContent: "center" }}
        pt={6}
        pb={2}
        textTransform={"uppercase"}
      >Connect With Us...</Typography>
      <Grid2 container spacing={6} pb={4} py={2}>
        <Grid2
          size={{ xs: 12}}
          sx={{ gap: 3 }}
          display={"flex"}
          flexDirection={"column"}
        >
          <Typography variant="body1"  >
            <span style={{ fontWeight: "bold" }}>Address- </span> 
            104, 2<sup>nd</sup> floor, Central Business park, 1FA, Sector F, Scheme No. 94,Indore, M.P., 452001.
          </Typography>
          <Typography variant="body1">
            <span style={{ fontWeight: "bold" }}>Phone- </span>0731 3165940, +91
            94796 77200
          </Typography>
          <Typography variant="body1" textAlign={"left !important"} border={"1px solid red"}>
            <span style={{ fontWeight: "bold" }}>Mail-</span> <span style={{border:"1px solid red"}}>connect@ekaarthdesignstudio.com,  career@ekaarthdesignstudio.com</span>
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12 }} display={"flex"} justifyContent={"center"}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3950013116805!2d75.90353527427487!3d22.713555227791353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3b5f2c97e15%3A0xd20101361cc92a1c!2sEkaarth%20Design%20Studio!5e0!3m2!1sen!2sin!4v1730234959572!5m2!1sen!2sin"
            width="100%"
            height={200}
            style={{ border: 0,maxWidth: 400, }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid2>
        <Grid2 size={12} display={"flex"} justifyContent={"center"}>
          <Card sx={{ minWidth: 375, p: 2 }}>
          <form
            style={{ display: "flex", flexDirection: "column",alignItems: "center", gap:10 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <TextField
            fullWidth
            size="small"
              id="outlined-basic"
              label="Your Name"
              variant="standard"
            />
            <TextField
            fullWidth
            size="small"
              id="outlined-basic"
              label="Mobile Number / Contact"
              variant="standard"
            />
            <TextField
            fullWidth
            size="small"
              id="outlined-basic"
              label="Location"
              variant="standard"
              required
            />
            <TextField
            fullWidth
            size="small"
              id="outlined-basic"
              label="We can help you with"
              required
              variant="standard"
            />
            <Button variant="contained" type="submit" size="small"
            sx={{ padding: "5px 20px",backgroundColor:"#4C3926", color:"white !important" }}
            >
              Submit
            </Button>
          </form>
          </Card>
        </Grid2>
      </Grid2>
    </WrapperComponent>
  );
};
export default ConnectPage;
