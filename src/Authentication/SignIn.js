import React, { useState } from "react";
import { Col, Container, Form, Row, Button, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./index.css"

const SignIn = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    buttonLoader: false,
  });

  const handleSendOTP = () => {
    setState({
      buttonLoader: true,
    });
  };

  const handleLogin = () => {
    history.push("/seeker/account");
  };
  return (
    <Container >
      <Row >
        <Col xs={12} md={6}>
          <div className="signin-sidebar-content "
        >
            <h4 className="mb-4">
              Create, <span> Build, Share </span>& Find Better Candidates
            </h4>
            <div className="d-flex">
              <span>&#9830;</span>{" "}
              <p>
                It's not only FREE but also a great way to connect with job
                seekers
              </p>
            </div>
            <div className="d-flex">
              <span>&#9830;</span>{" "}
              <p>Build followers network to amplify your Reach </p>
            </div>
            <div className="d-flex">
              <span>&#9830;</span>{" "}
              <p>Share job postings with your Followers </p>
            </div>
            <div className="d-flex">
              <span>&#9830;</span>{" "}
              <p>Build your very own Personal Brand as a recruiter</p>
            </div>
            <div className="d-flex">
              <span>&#9830;</span>{" "}
              <p>
                Create a Ready to Hire talent pipeline for your sourcing needs
              </p>
            </div>
          </div>
        </Col>
        <Col xs={6} md={6}>
          <div className="signin-sidebar-form bg-white shadow p-4">
            <div className="form_title">
              <h2>Sign In</h2>
            </div>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  className="br-0"
                  placeholder="Enter Registered Phone Number"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div className="d-flex">
                  <Form.Control
                    type="password"
                    className="br-0"
                    placeholder="Enter Generated OTP"
                  />
                  <Button
                    variant="danger br-0 form-btn"
                    onClick={handleSendOTP}
                  >
                    {state.buttonLoader ? (
                      <div className="d-flex">
                        <span>GenerateOTP </span>
                        <Spinner
                          as="span"
                          className="m-1"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      <>GenerateOTP</>
                    )}
                  </Button>
                </div>
                <Form.Text className="text-muted form-inner-text-danger">
                  We'll never share your OTP with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  className="text-muted form-inner-text-danger"
                  label="Remember me"
                />
              </Form.Group>
              <div className="d-flex">
                <Button variant="danger br-0 form-btn" type="submit">
                  Sign In
                </Button>
                <Form.Text className="m-3 text-muted form-inner-text-danger">
                  Don't have an account ? <Link to="signin">Sign Up</Link>
                </Form.Text>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
