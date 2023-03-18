import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import {
  Navbar,
  Form,
  Button,
  Badge,
} from "react-bootstrap";

function NavbarWithNotificationAndLogout() {
  const [notificationCount, setNotificationCount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'REMOVE_TOKEN' });
    navigate('/')
  };

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home"><h1>Travel Companion</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Form inline="true">
          <Button className="mx-2" variant="outline-success" onClick={() => setNotificationCount(notificationCount + 1)}>
            Notifications <Badge variant="light">{notificationCount}</Badge>
          </Button>
          <Button variant="outline-danger" className="ml-2" onClick={handleLogout}>
            Logout
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarWithNotificationAndLogout;
