import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <div >
      <div className=" text-center">
        <h1 className="title">Register</h1>
        <p>Create your account</p>
      </div>
    </div>
  );
};
const Form = () => {
  return (
    <form className="form-horizontal" method="post" action="#">

      <FormGroup>
        <InputGroup>
          <InputGroup.Addon><i className="fa fa-user-o" aria-hidden="true"></i></InputGroup.Addon>
          <FormControl type="text" placeholder="Username" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon>@</InputGroup.Addon>
          <FormControl type="text" placeholder="Email" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon><i className="fa fa-lock" aria-hidden="true"></i></InputGroup.Addon>
          <FormControl type="text" placeholder="Password" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon><i className="fa fa-lock" aria-hidden="true"></i></InputGroup.Addon>
          <FormControl type="text" placeholder="Repeat password" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Button type="submit" bsStyle="success" block>Create Account</Button>
      </FormGroup>
    </form>
  );
};
const ButtonSocial = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 text-center">
          <Button className="socialBtn" bsStyle="primary" block><i class="fa fa-facebook-official" aria-hidden="true"></i>  Facebook</Button>
        </div>
        <div className="col-md-6">
          <Button className="socialBtn" bsStyle="danger" block><i class="fa fa-google-plus-square" aria-hidden="true"></i>  Google</Button>
        </div>
      </div>
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row main">
          <div className="main-login main-center">
            <Header />
            <Form />
            <ButtonSocial />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
