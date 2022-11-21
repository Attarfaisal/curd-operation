import React, { useEffect, useState } from "react";
import {Table } from "react-bootstrap";

const FetchApi = () => {

    const [list,setList]=useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((value) => 
        value.json()
      )
      .then((value) => {
        setList(value)
      });
  },[]);
  return  (
                <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>title</th>
                    
                  </tr>
                </thead>
                <tbody>
                {list.map((value,index)=>{
                    return (
                    
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{value.title}</td>
                                                   
                        </tr>)
                })}</tbody>
    </Table>)}


export default FetchApi;
