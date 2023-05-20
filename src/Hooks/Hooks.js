import { useQuery } from "react-query";
import { URL_ApI, Users, Comments } from "../Api/Api";

// fetch data form user

const fetchDataUser = async () => {
  const res = await fetch(`${URL_ApI}/${Users}`);
  return res.json();
};

export const useSuperDataUser = (onSuccess, onError) => {
  return useQuery("users ", fetchDataUser, {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    enabled: false,

    onSuccess,
    onError,
  });
};

//fetch data form  comment
const fetchDataComment = async () => {
  const res = await fetch(`${URL_ApI}/${Comments}`);
  return res.json();
};

export const useSuperDataComment = (onSuccess, onError) => {
  return useQuery("comment ", fetchDataComment, {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    // enabled: false,

    // --  convert data  --
    // select:(data)=>{
    //   const superheroNames = data.data.map((hero)=>hero.name)
    //   return superheroNames
    // },

    onSuccess,
    onError,
  });
};
