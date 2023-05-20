import { useState } from "react";
import Navbar from "./Components/Navbar";
import Pepole from "./Components/Pepole";
import Plantes from "./Components/Plantes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Box, Typography } from "@mui/material";
import { Route, Routes } from "react-router";
import ParallelQueriesPage from "./Components/Parallel QueriesPage";
import { BrowserRouter } from "react-router-dom";

const queryclient = new QueryClient();

function App() {
  const [page, setPage] = useState("comments");
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryclient}>
        <Typography
          variant="h2"
          textAlign="center"
          component="h3"
          sx={{ mt: 3, p: 5, color: "white", fontFamily: "cursive" }}
        >
          React_Query
        </Typography>
        ;
        <Box>
          <Navbar setPage={setPage} />
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {page === "comments" ? <Plantes /> : <Pepole />}
          </Box>

          <Routes>
            <Route
              path="/ParallelQueriesPage"
              element={<ParallelQueriesPage />}
            />
          </Routes>
        </Box>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
