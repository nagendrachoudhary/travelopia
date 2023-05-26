import React, { useEffect, useState } from "react";
import { GetData } from "../Api/Api";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function Dashboard(props) {
  const [data, setdata] = useState([]);
  const [total, settotal] = useState(0);
  const [page, setpage] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [sort,setsort]= useState("")
  useEffect(() => {
    setOpen(true);
    GetData(page,sort)
      .then((res) => {
        console.log(res.data);
        setpage(res.data.page);
        setdata(res.data.body);
        settotal(res.data.totalPage);
        setOpen(false);
      })
      .catch((err) => {
        setOpen(false);
        console.log(err);
      });
  }, [page,sort]);
  const handlepageChange = (change) => {
    setpage(change);
  };
  const handleChange=(e)=>{
    setsort(e.target.value)
  }
  return (
    <div>
      {open && (
        <Box position={"absolute"}>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      )}
      <Box display={"flex"} justifyContent={"space-between"}>
        <Button
          disabled={page <= 1}
          onClick={() => {
            handlepageChange(+page - 1);
          }}
          variant="contained">
          Prv
        </Button>
        <FormControl style={{width:'200px'}}>
          <InputLabel id="demo-simple-select-label">Sort </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            
            label="All data Sorting"
            defaultValue="all"
            onChange={handleChange}>
            <MenuItem value={'all'}>All</MenuItem>
            <MenuItem value={'name'}>sort by name</MenuItem>
            <MenuItem value={'date'}>sort by date</MenuItem>
            <MenuItem value={'budget'}>sort by budget</MenuItem>
            <MenuItem value={'country'}>Country</MenuItem>
          </Select>
        </FormControl>
        <Button
          disabled={page == +total}
          onClick={() => {
            handlepageChange(+page + 1);
          }}
          variant="contained">
          Next
        </Button>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Travellers</TableCell>
              <TableCell align="right">budget</TableCell>
              <TableCell align="right">Total budget</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => {
              var d = row.createdAt.split("T");
              return (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{d[0]}</TableCell>
                  <TableCell align="right">{row.country}</TableCell>
                  <TableCell align="right">{row.travellers}</TableCell>
                  <TableCell align="right">{row.budget}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Dashboard;
