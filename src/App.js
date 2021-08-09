import logo from './logo.svg';
import './App.css';
import { Button,Container,Form } from 'react-bootstrap';

function App() {
  return (
    <div className="Login">
    <h1 class="hello">Login</h1>
    <Form>
      <Form.Group size="lg" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          autoFocus
          type="email"
        />
      </Form.Group>
      <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
        />
      </Form.Group>
      <div className="log">
      <Button  block size="lg" type="submit" >
        Login
      </Button>
      </div>
    </Form>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

  </div>
  );
}

export default App;
