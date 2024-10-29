import { Box, Grid2 } from "@mui/material";
import CommonHeader from "./CommonHeader";
import CommonSlider from "./CommonSlider";
import CommonLoader from "./CommonLoader";
import { useEffect, useState } from "react";

const WrapperComponent = ({ children, isLanding }) => {
    const [showLoading, setShowLoading] = useState(true);
console.log(isLanding)
    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false);
        }, 1500);
    }, []);

  return (
    // <Box sx={{ display: 'flex' ,justifyContent:'center',alignItems:'center'}}>
    <Grid2
      container
      sx={{ display: "flex", justifyContent: "center", height: "100vh" ,maxHeight:"100vh"}}
    >
      <Grid2 item size={{ xs: 11, md: !isLanding ? 8 : 10 }}>
       {showLoading && <CommonLoader />}
        <CommonHeader />
        {children}
      </Grid2>
    </Grid2>

    // </Box>
  );
};

export default WrapperComponent;
