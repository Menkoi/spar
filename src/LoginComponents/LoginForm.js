import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody  } from "mdbreact";
import React, { useState } from "react";

function LoginForm() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name,
          password,
      })
  })
  const data = await response.json()
  if(data.user) {
    localStorage.setItem('token', data.user)
    alert('Login Sucessful')
    window.location.href = '/AccHome'
  } else {
    alert('Check username and password')
  }
console.log(data)
}
  return (
    <div class="container">
      <h1>Already Have a Account?</h1>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard className="LoginCard">
              <MDBCardBody>
                <form onSubmit={loginUser}>
                  <p className="h4 text-center py-4 text-light">Login</p>
                  <label className="text-light">Username</label>
                  <input 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text" className="form-control" />
                  <br />
                  <label className="text-light">Password</label>
                  <input 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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