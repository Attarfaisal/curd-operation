import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [userList, setUserList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [empId, setEmpId] = useState("");

  const formSubmited = (e) => {
    e.preventDefault();
    if (!isEdit) {
      setUserList([...userList, { id: uuidv4(), name: name, age: age }]);
    } else {
      const updateList = userList.map((objects) => {
        if (objects.id === empId) {
          return { id: empId, name: name, age: age };
        } else {
          return objects;
        }
      });
      setUserList(updateList);
      
      setIsEdit(false);
    }
    setName("");
    setAge("");
  };

  const removeUser = (id) => {
    const userFilter = userList.filter((value) => value.id !== id);
    setUserList(userFilter);
  };

  const editUser = (value) => {
    setIsEdit(true);
    if
  };

  return (
    <>
      <div className="form-div">
        <Form onSubmit={formSubmited}>
          <h1>Welcome! To Registration Page</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="tel"
              placeholder="age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {isEdit ? "Update" : "Register"}
          </Button>
        </Form>
      </div>
      <div className="form-div">
        <h1>List of User </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((value, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                    <td>
                      
                      <Button
                        onClick={() => {
                          editUser(value);
                        }}
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      
                      <Button
                        onClick={() => {
                          removeUser(value.id);
                        }}
                      >
                        Delete
                      </Button>{" "}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default RegistrationForm;
