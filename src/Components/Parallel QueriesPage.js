import React from "react";
import { useQuery } from "react-query";
import { URL_ApI, Posts, Todos } from "../Api/Api";

// ParallelQuerie.....


// fetch data form post
const fetchDataPost = async () => {
  const res = await fetch(`${URL_ApI}/${Posts}`);
  return res.json();
};

// fetch data form Todos
const fetchDataTodos = async () => {
  const res = await fetch(`${URL_ApI}/${Todos} `);
  return res.json();
};

const ParallelQueriesPage = () => {
  const { data: Post } = useQuery("Post", fetchDataPost);
  const { data: Todos } = useQuery("Todos", fetchDataTodos);
  console.log(Post)
  console.log(Todos)

  return <div></div>;
};

export default ParallelQueriesPage;
