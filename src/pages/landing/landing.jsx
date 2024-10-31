import { Box, Container, Grid2, Paper, Typography } from "@mui/material"
import WrapperComponent from "../../Components/wrapperComponent"
import homelogo from '../../assets/images/homeLogo.png'
import CommonSlider from "../../Components/CommonSlider"
import { sliderData } from "../../contents/homePage/sliderData"
import CommonHeader from "../../Components/CommonHeader"

const Landing = () => {
    return (
        // <WrapperComponent>
        <Container maxWidth="lg" sx={{ height:"100vh",display:"flex",flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
            <CommonHeader />
                    <img src={homelogo} alt='logo'
                     width="100%" height={300}
                     style={{objectFit:"contain"}}
                    //  className="home-logo"
                     />
                     
            

                    <Typography variant="h6" width={"100%"} sx={{ display: "flex", justifyContent: "center" ,flex:1}}>कर्मणः सुकृतस्य सिद्धिं सद्यः प्रसिद्ध्यति</Typography>
                   
                   <Box sx={{width:"100%",pb:4}}>

           <CommonSlider sliderData={sliderData}/>
                   </Box>
          </Container>
        //    </Grid2>
        // </WrapperComponent>
    )   
}

export default Landing