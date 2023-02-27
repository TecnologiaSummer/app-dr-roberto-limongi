import { useState,useEffect } from 'react';
import { api } from  '../Services/api'

const UsersHelper = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        getData();
    },[])

    async function getData(){
      let result = await api.get("/user")
      result = await result.data;
      setData(result);
  }

  return data;
}

export default UsersHelper;