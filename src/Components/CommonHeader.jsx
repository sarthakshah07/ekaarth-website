import { Email, Facebook, Instagram, LinkedIn, LogoDev, Menu, YouTube } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import homelogo from "../assets/images/homeLogo.png";
import loaderImage from '../assets/images/loading.png'

const CommonHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);
  const [headerMenu, setHeaderMenu] = useState([
    {
      title: "About Us",
      link: "/about",
      isCurrent: false,
    },
    {
      title: "Work",
      link: "#",
      isCurrent: false,
    },
    {
      title: "Connect",
      link: '/connect',
      // link: "#",
      isCurrent: false,
    },
  ]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, padding: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {headerMenu?.map((text, index) => (
          <ListItem key={text.title} disablePadding>
            <ListItemButton onClick={() => navigate(`${text.link}`)}>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  useEffect(() => {
    headerMenu.map((item, index) => {
      if (pathname === item.link) {
        headerMenu[index].isCurrent = true;
      }
    });
  }, [pathname]);
  return (
    <Grid2 xs={12} display="flex" p={isMobile ? 0 : 2}>
      {/* <Grid2 container> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flex: 1,
        }}
      >
        {isMobile && (
          <IconButton onClick={toggleDrawer(true)}>
            <Menu />
          </IconButton>
        )}
        <img
          src={loaderImage}
          alt="logo"
          width={50}
          height={40}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "end",
          alignItems: "center",
          gap: 3,
        }}
      >
        {headerMenu.map((item, index) => (
          <Typography
            key={index}
            onClick={() => navigate(`${item.link}`)}
            sx={{
              textTransform: "capitalize",
              cursor: "pointer",
              color: "black",
              fontWeight: item.isCurrent ? "bold" : "normal",
              textDecoration: item.isCurrent ? "underline" : "none",
            }}
          >
            {item.title}
          </Typography>
        ))}

        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          flex: 1,
          gap: 1,
        }}
      >
        <Instagram />
        <YouTube />
        <LinkedIn />
      </Box>
      {/* </Grid2> */}
    </Grid2>
  );
};

export default CommonHeader;
