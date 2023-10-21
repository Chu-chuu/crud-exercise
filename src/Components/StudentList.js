import React from 'react';
import { Button, Card} from 'react-bootstrap'

function StudentList(props) {
  console.log(props.students);
  return (
    <div>
        {/* The map loops through an array and the array is a state */}
        {/* The item contains the object of the element in array. */}
        {/* So when you submit, it will take it and display it oon the browser */}
        {/* The item here can be named anything */}
      {props.students.map((item) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Name: {item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Email: {item.email}
              </Card.Subtitle>
              <Card.Text>Gen: {item.gen}</Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}


export default StudentList;