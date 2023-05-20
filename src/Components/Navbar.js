import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function Navbar({ setPage }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        sx={{ mr: 6, width: 200, color: "black" }}
        onClick={() => setPage("comments")}
      >
        Comments
      </Button>
      <Button
        variant="contained"
        sx={{ width: 200, color: "black" }}
        onClick={() => setPage("users")}
      >
        Users
      </Button>
      <Link to={"ParallelQueriesPage"}>
        <Button
          variant="contained"
          sx={{ width: 200, color: "black" ,ml:8 ,fontWeight:'600'}}
        >
        Parallel_Queries
        </Button>
      </Link>
    </Box>
  );
}

export default Navbar;
