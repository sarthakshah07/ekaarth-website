import { Box, Grid2 } from "@mui/material";
import CommonHeader from "./CommonHeader";
import CommonSlider from "./CommonSlider";
import CommonLoader from "./CommonLoader";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const WrapperComponent = ({ children, isLanding }) => {
    const [showLoading, setShowLoading] = useState(true);
    const {pathname} = useLocation()
    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false);
        }, 1500);
    }, []);

  return (
    <Box sx={{ display: 'flex' ,justifyContent:'center',alignItems:'center',flexDirection:"column",maxHeight:"100dvh"}}>
    <Grid2
      container
      sx={{ display: "flex", justifyContent: "center",height:"100dvh", maxHeight:"100dvh", width:"100%"}}
    >
       {showLoading && <CommonLoader />}
      <Grid2 item size={{ xs: 11, md: !isLanding ? 10 : 8 }} sx={{ maxHeight:"100dvh",position:"relative"}} >
        {pathname != "/" && <CommonHeader />}
        {children}
      </Grid2>
    </Grid2>

     </Box>
  );
};

export default WrapperComponent;
