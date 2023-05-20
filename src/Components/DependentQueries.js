import React from "react";
import { URL_ApI, Phone } from "../Api/Api";
import { useQuery } from "react-query";


// fetch data form Phones
const fetchDataPhone = async (title) => {
  const res = await fetch(`${URL_ApI}/${Phone}/${title}`);
  return res.json();
};

const fetchDataPhone_url = async (url) => {
  const res = await fetch(`${URL_ApI}/${Phone}/${url}`);
  return res.json();
};

const DependentQueries = ({ title }) => {
  const { data: user } = useQuery(["user", title], () => fetchDataPhone(title));
  const url = user?.data.url;

  useQuery(["user_titel", url], () => fetchDataPhone_url(url));
  return <div>Dependent Queries</div>;
};

export default DependentQueries;
