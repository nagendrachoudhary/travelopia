import React from "react";
import { Box, Button, Input } from "@mui/material";
import { Link } from "react-router-dom";
function Form_top(props) {
  return (
      <Box>
        <Box maxWidth={'500px'} width={['100vw','50vw']} margin={"auto"}>
          <h1>TRAVELOPIA</h1>
          <Box justifyContent={'space-evenly'} display={'flex'}>
            <Button><Link style={{textDecoration:'none' , color:'red'}} to={"/"}>Book Your Event</Link></Button>
            <Button><Link style={{textDecoration:'none' , color:'red'}} to={"/dashboard"}>Dashboard</Link></Button>
          </Box>
        </Box>
      </Box>
   
  );
}

export default Form_top;
