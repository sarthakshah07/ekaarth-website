import { Box, Grid2, Typography } from "@mui/material"
import WrapperComponent from "../../Components/wrapperComponent"
import homelogo from '../../assets/images/homeLogo.png'
import CommonSlider from "../../Components/CommonSlider"
import { sliderData } from "../../contents/homePage/sliderData"

const Landing = () => {
    return (
        <WrapperComponent>
           <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',my:5}}>
                <img src={homelogo} alt='logo' width={300} height={250}/>
                <Typography variant="h6">कर्मणः सुकृतस्य सिद्धिं सद्यः प्रसिद्ध्याति |</Typography>
           </Box>
           <CommonSlider sliderData={sliderData}/>
        </WrapperComponent>
    )   
}

export default Landing