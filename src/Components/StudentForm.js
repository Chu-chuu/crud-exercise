import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function StudentForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gen, setGen] = useState();
  
    // This block of code const handleSubmit = (e) => {e.preventDefault(); prevents the automatic reload of page after submission
    // Always remember to pass onSubmit={handleSubmit} in form or wherever for it to take effect
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newStudent = {
        name,
        email,
        password,
        gen,
      };
      props.addStudent(newStudent);
      console.log(newStudent);
  
      setEmail("");
      setGen("");
      setPassword("");
      setName("");
    };

    return (
        // Always remember to pass onSubmit={handleSubmit} in form or wherever for it to take effect
      <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
// This block of code is used to assign value to the state
// Sets the value of the state
            value={name}
// onchange takes the new value of the state 
// This whole block of code() => {} is a call back function. A call back function is a function withour a name that executes immediately.
            onChange={(e) => {setName(e.target.value);}}
          />
         </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            // value={email}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
        //   value={password} onChange={(e) => { setPassword(e.target.value);}}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gen</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter gen"
            // value={gen}
            // onChange={(e) => {
            //   setGen(e.target.value);
            // }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

export default StudentForm;