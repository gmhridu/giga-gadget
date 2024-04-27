import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { baseURL } from "../utilitis/Url";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import axios from "axios";

const MyCartPage = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);
  console.log(user);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/myproducts/${user?.email}`)
        const itemsData = res.data
        console.log(itemsData)
        setItem(itemsData);
      }
      catch (error) {
        console.log(error)
      }
    }
    if (user) {
      fetchData()
    }
  },[user])

  return (
    <div className="gadgetContainer pt-10">
      {
        item?.map(p => (
          <div>
            <h1>Name: {p.name}</h1>
          </div>
        ))
      }
    </div>
  );
};

export default MyCartPage;
