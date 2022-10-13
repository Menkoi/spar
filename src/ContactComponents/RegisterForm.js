import React from 'react';

function RegisterForm() {

    return (
      <div class="container">
        <h1>Contact</h1>
        <div class="card text-center" className="Testmoinal">
          <div class="card-body elegant-color" className="TestBody">
            <form>
              <p className="h4 text-center py-4 text-light">Register</p>
              <label className="text-light">Username</label>
              <input type="name" className="form-control" />
              <br />
              <label className="text-light">Email</label>
              <input type="email" className="form-control" />
              <br />
              <label className="text-light">Confirm Email</label>
              <input type="email" className="form-control" />
              <br />
              <label className="text-light">Create Password</label>
              <input type="password" className="form-control" />

              <div className="text-center py-4 mt-3">
                <button
                  type="button"
                  class="btn danger-color-dark btn-md text-light"
                >
                  {" "}
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default RegisterForm;