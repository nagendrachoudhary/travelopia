import React, { useEffect, useState } from "react";
import { GetData } from "../Api/Api";
import jsPDF from 'jspdf'
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
import Pagenation from "../components/Pagenation";

function Dashboard(props) {
  const [data, setdata] = useState([]);
  const [total, settotal] = useState(0);
  const [page, setpage] = useState(1);
  const [open, setOpen] = React.useState(true);
  const [sort, setsort] = useState("all");
  
  useEffect(() => {
    setOpen(true);
    GetData(page,sort)
      .then((res) => {
        setOpen(false);
        setdata(res.data.body);
        setpage(res.data.page);
        settotal(res.data.totalPage);
      })
      .catch((err) => {
        setOpen(false);
      });
  }, [page, sort]);
  const handlepageChange = (change) => {
    setpage(change);
  };
  const handleChange = (e) => {
    setpage(1);
    setsort(e.target.value);
  };
  return (
    <Box   test_id='dashboard_page'>
      {open && (
        <Box position={"absolute"}>
          <Backdrop
          test_id='loading'
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      )}
      <Box display={"flex"} justifyContent={"space-between"}>
        <FormControl style={{ width: "200px" }}>
          <InputLabel id="demo-simple-select-label">Sort </InputLabel>
          <Select
             test_id='sort'
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="All data Sorting"
            defaultValue="all"
            onChange={handleChange}>
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"name"}>sort by name</MenuItem>
            <MenuItem value={"date"}>sort by date</MenuItem>
            <MenuItem value={"budget"}>sort by budget</MenuItem>
            <MenuItem value={"country"}>Country</MenuItem>
          </Select>
        </FormControl>
        <Button
        variant="contained"
        onClick={() => {
          var doc = new jsPDF();
          data.forEach(function (data, i) {
              doc.text(
                  10,
                  10 + i * 10,
                "Name: " +
                data.name +
                "Country: " +
                data.country +
                "Travellers: " +
                data.travellers +
                "Budget: " +
                data.budget 
            );
          });
          doc.save(".pdf");
        }}>
        Download
      </Button>
      </Box>
      <TableContainer id="dvTable">
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
                  test_id='list'
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
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>

      <Button
          test_id='prv'
          disabled={page <= 1}
          onClick={() => {
            handlepageChange(+page - 1);
          }}
          variant="contained">
          Prv
        </Button>
      <Pagenation curr={page} total={total} handlepageChange={handlepageChange}/>
      <Button
         test_id='next'
         disabled={page == +total}
         onClick={() => {
           handlepageChange(+page + 1);
          }}
          variant="contained">
          Next
        </Button>
            </Box>
    </Box>
  );
}

export default Dashboard;
