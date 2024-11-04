import {
  Button,
  Card,
  CircularProgress,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import WrapperComponent from "../Components/wrapperComponent";
import { AboutUsData } from "../contents/aboutUsData";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { CheckCircle, DoneAllRounded } from "@mui/icons-material";
const SERVICE_ID = "service_4l8l50n";
const TEMPLATE_ID = "template_8iw5fr1";
const PUBLIC_KEY = "9VucweErAbfIsKX78";
const ConnectPage = () => {
  const [isEmailSuccess, setIsEmailSuccess] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        name: "",
        number: "",
        location: "",
        message: "",
      },
      validate: (values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Name is Required";
        }

        if (!values.number) {
          errors.number = "number is Required";
        } else if (
          !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(values.number)
        ) {
          errors.number = "Invalid phone number";
        }

        if (!values.location) {
          errors.location = "Location is Required";
        }

        if (!values.message) {
          errors.message = "Message is Required";
        }

        return errors;
      },
      onSubmit: (values) => {
        setIsButtonLoading(true);

        console.log(values);
        var templateParams = {
          from_name: values.name,
          contact_number: values.number,
          location: values.location,
          message: values.message,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
          function (response) {
            setIsEmailSuccess(true);
            setTimeout(() => {
              setIsEmailSuccess(false);
              setIsButtonLoading(false);
              resetForm();
            }, 10000);
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      },
    });

  return (
    <WrapperComponent isLanding={false}>
      <Typography
        variant="h6"
        fontSize={24}
        fontWeight={"bold"}
        width={"100%"}
        sx={{ display: "flex", justifyContent: "center", letterSpacing: 4 }}
        pt={6}
        pb={2}
        textTransform={"uppercase"}
        className="contentHeading"
      >
        Connect With Us...
      </Typography>
      <Grid2 container spacing={6} pb={4} py={2}>
        <Grid2
          size={{ xs: 12 }}
          sx={{ gap: 3 }}
          display={"flex"}
          flexDirection={"column"}
        >
          <Typography variant="body1">
            <span style={{ fontWeight: "bold" }}>Address- </span>
            104, 2<sup>nd</sup> floor, Central Business park, 1FA, Sector F,
            Scheme No. 94,Indore, M.P., 452001.
          </Typography>
          <Typography variant="body1">
            <span style={{ fontWeight: "bold" }}>Phone- </span>0731 3165940, +91
            94796 77200
          </Typography>
          <Typography variant="body1" textAlign={"left !important"}>
            <span style={{ fontWeight: "bold" }}>Mail-</span>{" "}
            <span>connect@ekaarthdesignstudio.com, </span>
            <span> career@ekaarthdesignstudio.com</span>
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12 }} display={"flex"} justifyContent={"center"}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3950013116805!2d75.90353527427487!3d22.713555227791353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3b5f2c97e15%3A0xd20101361cc92a1c!2sEkaarth%20Design%20Studio!5e0!3m2!1sen!2sin!4v1730234959572!5m2!1sen!2sin"
            width="100%"
            height={200}
            style={{ border: 0, maxWidth: 400 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid2>
        <Grid2 size={12} display={"flex"} justifyContent={"center"}>
          {isEmailSuccess ? (
            <Card
              sx={{
                minWidth: 375,
                minHeight: 250,
                p: 2,
                background: "#e6ffe6",
                borderRadius: 6,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="animateCard"
            >
              <CheckCircle sx={{ fontSize: 100, color: "red !important" }} />
              <Typography variant="h6" fontWeight={"bold"}>
                Thank You For Contacting Us
              </Typography>
            </Card>
          ) : (
            <Card sx={{ minWidth: 375, p: 2 }}>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                }}
                onSubmit={handleSubmit}
              >
                <TextField
                  fullWidth
                  size="small"
                  id="outlined-basic"
                  label="Your Name"
                  variant="standard"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <TextField
                  fullWidth
                  size="small"
                  id="outlined-basic"
                  label="Mobile Number / Contact"
                  variant="standard"
                  name="number"
                  value={values.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.number && Boolean(errors.number)}
                  helperText={touched.number && errors.number}
                />
                <TextField
                  fullWidth
                  size="small"
                  id="outlined-basic"
                  label="Location"
                  variant="standard"
                  name="location"
                  value={values.location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.location && Boolean(errors.location)}
                  helperText={touched.location && errors.location}
                />
                <TextField
                  fullWidth
                  size="small"
                  id="outlined-basic"
                  label="We can help you with"
                  variant="standard"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                />
                <Button
                  variant="contained"
                  type="submit"
                  size="small"
                  sx={{
                    padding: "5px 20px",
                    minWidth: 150,
                    backgroundColor: "#4C3926",
                    color: "white !important",
                  }}
                  disabled={isButtonLoading}
                >
                  {isButtonLoading ? <CircularProgress size={20} /> : "Submit"}
                </Button>
              </form>
            </Card>
          )}
        </Grid2>
      </Grid2>
    </WrapperComponent>
  );
};
export default ConnectPage;
