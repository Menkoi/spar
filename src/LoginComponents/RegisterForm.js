import {useState} from 'react';
import { useHistory } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody  } from "mdbreact";

function RegisterForm() {
  const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name,
              email,
              password,
          })
      })
      const data = await response.json()
      if (data.status === 'ok') {
        alert('Registration Sucessful. Please Log in above.')
        history.push('/AccHome')
      } else {
        alert('something went wrong,')
      }
    console.log(data)
    }

    return (
      <div class="container">
        <h1> Dont Have a Account?</h1>

        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <MDBCard className="LoginCard">
                <MDBCardBody>
                  <form onSubmit={registerUser}>
                    <p className="h4 text-center py-4 text-light">Register</p>
                    <label className="text-light">Username</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="name"
                      className="form-control"
                    />
                    <br />
                    <label className="text-light">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                    />
                    <br />
                    <label className="text-light">Confirm Email</label>
                    <input type="email" className="form-control" />
                    <br />
                    <label className="text-light">Create Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                    />

                    <div className="text-center py-4 mt-3">
                      <button
                        type="button submit"
                        value="Register"
                        class="btn danger-color-dark btn-md text-light"
                      >
                        {" "}
                        Register Test
                      </button>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <br />
      </div>
    );
}

export default RegisterForm;