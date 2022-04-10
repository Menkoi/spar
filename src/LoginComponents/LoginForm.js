import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody  } from "mdbreact";
import React from "react";
import {Link} from 'react-router-dom';

function LoginForm() {
 
  return (
    <div class="container">
      <h1>Already Have a Account?</h1>
      <p>*This site is just a demo. To skip login click the button below*</p>
      <button type="button" class="btn btn-light btn-sm">
      <Link to="/AccHome" class="nav-link text-dark">Dashboard</Link>
      </button>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard className="LoginCard">
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4 text-light">Login</p>
                  <label className="text-light">Username</label>
                  <input 
                  type="text" className="form-control" />
                  <br />
                  <label className="text-light">Password</label>
                  <input 
                  type="password" className="form-control" />
                  <div className="text-center py-4 mt-3">
                    <button type="button submit"  value="Login"class="btn danger-color-dark btn-md text-light">
                        {" "}
                        Login
                    </button>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}





export default LoginForm;