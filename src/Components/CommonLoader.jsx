import { Backdrop, CircularProgress } from "@mui/material";
import loaderImage from '../assets/images/loading.png'

const CommonLoader = () => {
    return (
        <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 ,backgroundColor:'rgba(0,0,0,.8)' })}
        open={true}
      >
        <img src={loaderImage} alt="loader" height={150} width={150}/>
         
      </Backdrop>
    );
};

export default CommonLoader;