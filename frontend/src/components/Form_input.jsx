import {
  Alert,
  AlertTitle,
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
import React, { useEffect } from "react";
import { useState } from "react";
import { SendData } from "../Api/Api";
function Form_input(props) {
  const [form, setform] = useState({name:'',email:'', country: "", travellers: 1, budget: 0 });
  const [total, settotal] = useState(0);
  const [Loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [submit,setsubmit]=useState(true)
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
    if (e.target.name == "budget") {
      settotal(e.target.value * form.travellers);
    } else if (e.target.name == "travellers") {
      settotal(e.target.value * form.budget);
    }
  };
  useEffect(() => {
    if(form.name&&form.email&&form.country&&form.travellers&&form.budget){
      setsubmit(false)
    }
    else{
      setsubmit(true)
    }
  }, [handlechange])
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handlesubmit = (event) => {
    event.preventDefault()
    form.total = total;
    handleOpen();
    SendData(form)
      .then((res) => {
        setTimeout(() => {
          handleClose()
        }, 500);
        alert("EVENT ADDED")
       
        })
      .catch((err) => {
        setTimeout(() => {
          handleClose()
        }, 500);
        alert("Error")
        console.log(err);
      });
      
  };
  return (
    <form action="submit" test_id='Form'  onSubmit={handlesubmit}>
      <Box
        sx={{ boxShadow: 10 }}
        display={"flex"}
        padding={'30px'}
        margin={'auto'}
        gap={"30px"}
        flexDirection={"column"}
        maxWidth={"500px"}
        width={["100vw", "50vw"]}>
        {open && (
          <Box  position={"absolute"}>
            <Backdrop
            test_id='loading'
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}>
              <CircularProgress color="inherit" />
            </Backdrop>
          </Box>
        )}
        <TextField
          test_inputid='name'
          test_id='input'
          id="filled-basic"
          label="Name"
          placeholder="Enter Your Name"
          variant="standard"
          name="name"
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <TextField
          test_id='input'
          test_inputid='email'
          id="filled-basic"
          label="Email"
          placeholder="Enter Your Email"
          variant="standard"
          name="email"
          onChange={(e) => {
            handlechange(e);
          }}
        />
        <FormControl test_id='input'>
          <InputLabel id="demo-simple-select-label">
            Where do you want to go
          </InputLabel>
          <Select
            test_inputid='country'
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={form.country}
            label="Country"
            name="country"
            placeholder="Country"
            onChange={(e) => {
              handlechange(e);
            }}>
            <MenuItem test_inputid='india' value={"India"}>India</MenuItem>
            <MenuItem test_inputid='countrys' value={"Africa"}>Africa</MenuItem>
            <MenuItem test_inputid='countrys' value={"Europe"}>Europe</MenuItem>
          </Select>
        </FormControl>

        <TextField
        test_id='input'
        test_inputid='travellers'
          id="outlined-number"
          label="No. of travellers"
          type="number"
          placeholder="No. of travellers"
          value={form.travellers < 0 ? 0 : form.travellers}
          name="travellers"
          onChange={(e) => {
            handlechange(e);
          }}
          defaultValue={1}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <FormControl test_id='input'>
          <InputLabel htmlFor="outlined-adornment-amount">Budget</InputLabel>
          <OutlinedInput
          test_inputid='budget'
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="budget"
            name="budget"
            type="number"
            onChange={(e) => {
              handlechange(e);
            }}
          />
        </FormControl>
        <Box display={"flex"}   justifyContent={"space-around"}>
          <Box test_id='total' display={"flex"}>
            <Box>Total:-</Box>
            {total}
          </Box>
          <Button disabled={submit}  sx={{
        ":hover": {
          bgcolor: "black",
          color: "white"
        }
      }} test_id='submit' variant='outlined' type="submit">Submit</Button>
        </Box>
      </Box>
    </form>
  );
}

export default Form_input;
