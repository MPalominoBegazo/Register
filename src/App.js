import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap';

const Form = () =>
{
  return(
    <form className="form-horizontal" method="post" action="#">
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon><i className="fa fa-user-o" aria-hidden="true"></i></InputGroup.Addon>
          <FormControl type="text" placeholder="Username"/>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon>@</InputGroup.Addon>
          <FormControl type="text" placeholder="Email"/>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon><i className="fa fa-lock" aria-hidden="true"></i></InputGroup.Addon>
          <FormControl type="text" placeholder="Password"/>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon><i className="fa fa-lock" aria-hidden="true"></i></InputGroup.Addon>
          <FormControl type="text" placeholder="Repeat password"/>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Button type="submit" bsStyle="success" block>Create Account</Button>
      </FormGroup>
    </form>
  );
};

class App extends Component {
  render() {
    return (
      <body>
        <div className="container">
          <div className="row main">
            <div className="panel-heading">
              <div className="panel-title text-center">
                <h1 className="title">Company Name</h1>
                <hr />
              </div>
            </div>
            <div className="main-login main-center">
              <Form />
            </div>
          </div>
        </div>

        <script type="text/javascript" src="assets/js/bootstrap.js" />
      </body>
    );
  }
}

export default App;
