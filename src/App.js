import React, {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import StudentForm from "./Components/StudentForm";
import StudentList from "./Components/StudentList";


function App() {
  // The first value is the value of the state and the second changes the value
  const [students, setStudents] = useState([]);
  const addNewStudent = (student) => {
    // ... is a spread operator that takes the content of an state/array and updates it where needed.
    setStudents([...students, student]);
  };
  return (
    // The fluid written like an attribute here performs the same function as in bootstrap.
    <Container fluid>
      <Row>
        <Col>
          <h1>Forms</h1>
          <StudentForm addStudent={addNewStudent} />
        </Col>
        <Col>
          <h1>Cards</h1>
          <StudentList students={students} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
