import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Css from './assets/css.png'
import Html from './assets/html.png'
import Javascript from './assets/javascript.png'

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar style={{ fontSize: "medium", backgroundColor: "black", height: "4rem", borderRadius: "10px" }}>
        <Container style={{ display: "flex", height: "100%", justifyContent: "space-around", alignItems: "center", paddingLeft: "10px", paddingRight: "10px" }}>
          <Navbar.Brand style={{ color: "white", fontSize: "20px", backgroundColor: "black" }}>Bootstrap</Navbar.Brand>
          <Nav style={{ width: "100%", display: "flex", justifyContent: "flex-end", gap: "5px", alignItems: "center" }}>
            <Nav.Link style={{ color: "white", textDecoration: "none" }}>Home</Nav.Link>
            <Nav.Link style={{ color: "white", textDecoration: "none" }}>About</Nav.Link>
            <Nav.Link style={{ color: "white", textDecoration: "none" }}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='card'>
        <Card style={{ width: "250px", margin: "20px", display: "flex", flexDirection: "column", background: "black", padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 5px 5px rgb(252, 115, 3)" }}>
          <Card.Img src={Html} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold", fontSize: "25px", color: "rgb(252, 115, 3)" }}>HTML</Card.Title>
            <Card.Text style={{ color: "white" }}>
              HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.
            </Card.Text>
            <Card.Link href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'>
              <Button className='html' style={{ fontWeight: "bold", border: "none", padding: "10px", borderRadius: "10px" }}>Learn More</Button>
            </Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "250px", margin: "20px", display: "flex", flexDirection: "column", background: "black", padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 5px 5px rgb(0, 132, 255)" }}>
          <Card.Img src={Css} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold", fontSize: "25px", color: "rgb(0, 132, 255)" }}>CSS</Card.Title>
            <Card.Text style={{ color: "white" }}>
              CSS is a language for specifying how documents are presented to users — how they are styled, laid out, etc.
            </Card.Text>
            <Card.Link href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'>
              <Button className='css' style={{ fontWeight: "bold", border: "none", padding: "10px", borderRadius: "10px" }}>Learn More</Button>
            </Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "250px", margin: "20px", display: "flex", flexDirection: "column", background: "black", padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 5px 5px yellow" }}>
          <Card.Img src={Javascript} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold", fontSize: "25px", color: "yellow" }}>JAVASCRIPT</Card.Title>
            <Card.Text style={{ color: "white" }}>
              JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation
            </Card.Text>
            <Card.Link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>
              <Button className='javascript' style={{ fontWeight: "bold", border: "none", padding: "10px", borderRadius: "10px" }}>Learn More</Button>
            </Card.Link>
          </Card.Body>
        </Card>

      </div>

    </div>
  );
}

export default App;
