import { Button, Grid2, TextField, Typography } from "@mui/material";
import WrapperComponent from "../Components/wrapperComponent";
import { AboutUsData } from "../contents/aboutUsData";

const ConnectPage = () => {
  return (
    <WrapperComponent isLanding={false}>
      <Typography variant="h4">Contact Us</Typography>
      <Grid2 container spacing={2} pb={4} py={2}>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{gap:3, }} display={'flex'} flexDirection={'column'} >
          <Typography variant="body1"><span style={{fontWeight:'bold'}}>Address- </span>04, 2nd floor, 1FA, above HDFC bank, Sector F, Scheme 94, Indore, Madhya Pradesh 452001</Typography>
          <Typography variant="body1"><span style={{fontWeight:'bold'}}>Phone- </span>0731 3165940, +91 94796 77200</Typography>
          <Typography variant="body1"><span style={{fontWeight:'bold'}}>Mail- </span>connect@ekaarthdesignstudio.com, career@ekaarthdesignstudio.com</Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3950013116805!2d75.90353527427487!3d22.713555227791353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3b5f2c97e15%3A0xd20101361cc92a1c!2sEkaarth%20Design%20Studio!5e0!3m2!1sen!2sin!4v1730234959572!5m2!1sen!2sin"
            width="100%"
            height={200}
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
           </Grid2>
        <Grid2 size={12}>
            <form style={{ display: "flex", flexDirection: "column" }}>
                <TextField id="outlined-basic" label="Your Name" variant="outlined" />
                <TextField id="outlined-basic" label="Mobile Number / Contact" variant="outlined" />
                <TextField id="outlined-basic" label="Location" variant="outlined" required />
                <TextField id="outlined-basic" label="We can help you with" required variant="outlined" />
                <Button variant="contained" type="submit">Submit</Button>
            </form>
        </Grid2>
      </Grid2>
    </WrapperComponent>
  );
};
export default ConnectPage;
