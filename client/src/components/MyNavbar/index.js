import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

function MyNavbar() {
     const { currentUser, logout } = useAuth();
     return (
          <Navbar
               className="justify-content-center"
               style={{ backgroundColor: "#ee6a59" }}
          >
               <Container className="container text-light">
                    <h1>Party Perfect</h1>
                    {currentUser && <Button onClick={logout}>Logout</Button>}
               </Container>
          </Navbar>
     );
}

export default MyNavbar;
