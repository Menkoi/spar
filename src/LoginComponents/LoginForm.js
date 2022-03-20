import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody  } from "mdbreact";
import {Link} from 'react-router-dom';
import React from "react";

function LoginForm() {
  return (
    <div class="container">
      <h1>Already Have a Account?</h1>
      <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard className="LoginCard">
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4 text-light">Login</p>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="text-light"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="text-light"
                >
                  Password
                </label>
                <input
                  type="email"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                />
                <div className="text-center py-4 mt-3">
                <button type="button" class="btn danger-color-dark btn-md">
                      <Link to="/AccHome" class="nav-link text-light">
                        {" "}
                        Login Test
                      </Link>
                    </button>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <h1> Dont Have a Account?</h1>

    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard className="LoginCard">
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4 text-light">Register</p>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="text-light"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="text-light"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                />
                <br/>
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="text-light"
                >
                  Confirm Email
                </label>
                <input
                  type="email"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                />
                <br/>
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="text-light"
                >
                  Create Password
                </label>
                <input
                  type="email"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                />
                
                <div className="text-center py-4 mt-3">
                <button type="button" class="btn danger-color-dark btn-md">
                      <Link to="/AccHome" class="nav-link text-light">
                        {" "}
                        Register Test
                      </Link>
                    </button>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <br/>
    </div>
  );
}





export default LoginForm;