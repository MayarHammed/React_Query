// import axios from "axios";
import React from "react";
import { useSuperDataComment } from "../Hooks/Hooks";
import { Box, Typography } from "@mui/material";

// style_CSS
import '../style.css'

const Plantes = () => {
  // Success and Error Callbacks
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching ", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after encountering error ", error);
  };
  const { data, loading, error, sussecc } = useSuperDataComment(
    onSuccess,
    onError
  );

  // handeling error
  if (loading) {
    return <h1>loading Data.....</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (sussecc) {
    return <h1>sussecc</h1>;
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 6,
          p: 7,
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontFamily: "cursive", ml: 2, color: "black" }}
          component="h3"
        >
          Comments
        </Typography>
      </Box>

      <Box sx={{ color: "black", opacity: 0.8, fontSize: 30 }}>
        {data &&
          data.map((el) => {
            return (
              <div key={el.id}>
                <ul>
                  <li>Name : {el.name}</li>
                  <li> Email : {el.email}</li>
                  <li>Body : {el.body}</li>
                </ul>
              </div>
            );
          })}
      </Box>
    </Box>
  );
};

export default Plantes;
