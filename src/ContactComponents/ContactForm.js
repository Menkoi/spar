import { useState } from "react";

function RegisterForm() {

  // Email Regular Expression
  const vaildEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);

  // Check user input with RegEx,
  const valid = () => {
    if(!vaildEmail.test(email)) {
      setEmailErr(true);
    }
    else {
      setEmailErr(false);
    }
  }

    return (
      <div class="container">
        <h1>Contact</h1>
        <div class="card text-center" className="Testimoinal">
          <div class="card-body elegant-color" className="TestBody">
            <form>
              <p className="h4 text-center py-4 text-light">Contact Us!</p>
              <label className="text-light">Email</label>
              <input type="email" placeholder="Email" 
              className="form-control" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
              <br />
              <label className="text-light">Subject</label>
              <input type="name" placeholder="Subject" 
              className="form-control"/>
              <br />
              <label className="text-light">Message</label>
              <input type="text" placeholder="Your Message" className="form-control" />
              <br />
              {emailErr && <p class='text-light'>Invaild email</p>}
              <div className="text-center py-4 mt-3">
                <button
                  type="button"
                  class="btn danger-color-dark btn-md text-light"
                  onClick={valid}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default RegisterForm;