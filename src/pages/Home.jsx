
import { Box, styled } from "@mui/material";
import Sunset from '../assests/images/bg.jpg';
import Form from "../components/Form";
import Weather from "../components/Weather";
import { useState } from "react";


const Component = styled(Box)({
   height: '100vh',
   display: 'flex',
   alignItems: 'center',
   margin: '0 auto',
   width: '65%'

})

const Image = styled(Box)({
   background: `url(${Sunset})`,
   height: '80%',
   width: '27%',
   backgroundSize: 'cover',
   borderRadius: '20px 0 0 20px'



})



const Home = () => {

   const [result, setResult] = useState({})

   return (

      <>

       
         <Component>
            <Image></Image>
            <Box style={{ width: "73%", height: "80%" }} >

               <Form setResult={setResult} />
               <Weather result={result} />

            </Box>

         </Component>


      </>



   )
}

export default Home;