import React from "react";
import { Box, Button, Input } from "@mui/material";
import { Link } from "react-router-dom";
function Form_top(props) {
  return (
      <Box>
        <Box maxWidth={'500px'} width={['100vw','50vw']} margin={"auto"}>
          <h1 test_id='logo'>TRAVELOPIA</h1>
          <Box justifyContent={'space-evenly'} marginBottom={'30px'}  display={'flex'}>
            <Link style={{textDecoration:'none' , color:'white'}} to={"/"}><Button variant='contained' test_id='home' >Book Your Event</Button></Link>
            <Link style={{textDecoration:'none' , color:'white'}} to={"/dashboard"}><Button variant='contained' test_id='dashboard'>Dashboard</Button></Link>
          </Box>
        </Box>
      </Box>
   
  );
}

export default Form_top;
