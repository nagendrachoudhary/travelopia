import {
    Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Slider,
  SpeedDialAction,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { SendData } from "../Api/Api";
function Form_input(props) {
    const [form ,setform] = useState({country:"",travellers:1,budget:0});
    const [total,settotal]= useState(0)
    const [Loading,setLoading]= useState(false)
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
      };
      const handleOpen = () => {
        setOpen(true);
      };
    const handlechange = (e)=>{
        setform({...form,[e.target.name]:e.target.value})
        if(e.target.name=='budget'){
        settotal(e.target.value*form.travellers)
        }
        else if(e.target.name=='travellers'){
            settotal(e.target.value*form.budget)
        }
    }
    const handlesubmit = ()=>{
            handleOpen()
           SendData(form).then((res)=>{
             handleClose()
             alert("done")
            }).catch((err)=>{
              console.log(err);
           })
    }
  return (
      <form action="submit" onSubmit={handlesubmit}>
    <Box
      display={"flex"}
      margin={"auto"}
      gap={"30px"}
      flexDirection={"column"}
      maxWidth={"500px"}
      width={["100vw", "50vw"]}>
        {open&&<Box position={'absolute'} ><Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      </Box>}
      <TextField
        id="filled-basic"
        label="Name"
        placeholder="Enter Your Name"
        variant="standard"
        name="name"
        onChange={(e) => {handlechange(e)}}
      />
      <TextField
        id="filled-basic"
        label="Email"
        placeholder="Enter Your Email"
        variant="standard"
        name='email'
        onChange={(e) => {handlechange(e)}}
        />
      <FormControl>
        <InputLabel id="demo-simple-select-label">
          Where do you want to go
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={form.country?form.country:"Select Country"}
          label="Country"
          name='country'
          onChange={(e) => {handlechange(e)}}>
          <MenuItem value={"India"}>India</MenuItem>
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="outlined-number"
        label="No. of travellers "
        type="number"
        value={form.travellers<0?0:form.travellers}
        name="travellers"
        onChange={(e) => {handlechange(e)}}
        defaultValue={1}
        InputLabelProps={{
            shrink: true,
        }}
        />
      
      <FormControl  >
          <InputLabel htmlFor="outlined-adornment-amount">Budget</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="budget"
            name="budget"
            onChange={(e) => {handlechange(e)}}
          />
        </FormControl>
        <Box display={'flex'} justifyContent={'space-around'}>
        <Box border={'Window'} display={'flex'}><Box>Total:-</Box>{total}</Box>
        <Button type="submit" >Submit</Button>
        </Box>
    </Box>
        </form>
  );
}

export default Form_input;
