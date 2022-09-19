import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";


export default function Search() {
  const products = useSelector((state) => state.products);
  // console.log(products);
  const [search, setSearch] = useState();
  // console.log(products.filter(product=>product.name.toLowerCase().includes("ip")));
  const Search =(products)=>{
    return products.filter(product=>product.name.toLowerCase().includes(search))
  }
  return (
    <div>
    <Autocomplete
      sx={{ width: 300 }}
      options={products.map((option) => option.name)}
      renderInput={(params) => (
        <TextField {...params} label="Search" margin="normal" onChange={(e)=>setSearch(e.target.value)}/>
      )}
   
    />
    </div>
    
  );
}
