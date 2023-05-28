import { Box } from "@mui/material";
import React from "react";
function Footer(props) {
  return (
    <Box display={'flex'} justifyContent={'space-evenly'}>
      <div>
        <p>&copy; Travelopia. All rights reserved.</p>
      </div>
      <div>
        <p>Made by Nagendra Choudhary</p>
      </div>
    </Box>
  );
}

export default Footer;
