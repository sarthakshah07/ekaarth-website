import { Box, Grid2, Typography } from "@mui/material"
import WrapperComponent from "../../Components/wrapperComponent"
import homelogo from '../../assets/images/homeLogo.png'
import CommonSlider from "../../Components/CommonSlider"
import { sliderData } from "../../contents/homePage/sliderData"
import CommonHeader from "../../Components/CommonHeader"

const Landing = () => {
    return (
        <WrapperComponent isLanding={true}>
            <Grid2 container flexDirection={"column"} justifyContent={"space-between"} sx={{height:"100%",pt:2}}>
            <CommonHeader />
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',my:5}}>
                    <img src={homelogo} alt='logo' width={500} height={400}/>
                    <Typography variant="h6">कर्मणः सुकृतस्य सिद्धिं सद्यः प्रसिद्ध्यति</Typography>
            </Box>
            <Grid2 size={12} pb={4}>

           <CommonSlider sliderData={sliderData}/>
            </Grid2>
           {/* <footer> */}
                {/* <Box sx={{position:"absolute",bottom:0,width:"100%"}}> */}

                {/* </Box> */}
           {/* </footer> */}
           </Grid2>
        </WrapperComponent>
    )   
}

export default Landing