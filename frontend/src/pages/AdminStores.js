import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { getTmpStore, updateTmpStore } from "../slice/tmpStoreSlice";

function Store() {
  const dispatch =useDispatch();
  const tmpStores = useSelector((state)=>state.tmpStore )
  const updateTmp = (tmpStore) => {
    dispatch(updateTmpStore(tmpStore))

  };
  

  useEffect(()=>{
    dispatch (getTmpStore()); 
  },[])

  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>   
            <th>id</th>
            <th> Name</th>
            <th>Telefon Numarası</th>
            <th>E Mail</th>
            <th>Onay</th>

          </tr>
        </thead>
        <tbody>
          {tmpStores?.map((tmpStore,i) => (
            <tr key={i} value={tmpStore.id}>
              <td>{tmpStore.id}</td>
              <td>{tmpStore.name}</td>
              <td>{tmpStore.telefon_numarası}</td>
              <td>{tmpStore.email}</td>
              <td><Button onClick={()=>updateTmp(tmpStore.id)}>Ekle </Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Store;
