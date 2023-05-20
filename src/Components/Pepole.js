// import axios from "axios";
import React from "react";
import { useSuperDataUser } from "../Hooks/Hooks";
import { Box, Button, Typography } from "@mui/material";


// style_CSS
import '../style.css'

const Pepole = () => {
  // Success and Error Callbacks
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching ", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after encountering error ", error);
  };
  const { data, isloading, error, sussecc, refetch } = useSuperDataUser(
    onSuccess,
    onError
  );

  // handeling error
  if (isloading) {
    return <h1>loading Data.....</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (sussecc) {
    return <h1>sussecc fetch data </h1>;
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 6,
          p: 3,
        }}
      >
        <Typography variant="h3" sx={{ fontFamily: "Roboto"  ,textAlign:'center'}} component="h4">
          Users
        </Typography>
      </Box>

      <Button
        variant="contained"
        onClick={refetch}
        sx={{ ml: 29, bgcolor: "green" , width:200}}
      >
        Fetch Data Users
      </Button>

      <Box sx={{ mt: 2, ml: 3 ,border:0 ,p:5 ,opacity:0.7}}>
        {data &&
          data.map((hero) => {
            return (
              <div key={hero.id}>
                <ul>
                  <li> Name : {hero.name}</li>
                  <li> UserName : {hero.username}</li>
                  <li> Email : {hero.email}</li>
                </ul>
              </div>
            );
          })}
      </Box>
    </Box>
  );
};

export default Pepole;
