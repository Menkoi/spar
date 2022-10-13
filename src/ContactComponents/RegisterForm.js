import React from 'react';

function RegisterForm() {

    return (
      <div class="container">
        <h1>Contact</h1>
        <div class="card text-center" className="Testmoinal">
          <div class="card-body elegant-color" className="TestBody">
            <form>
              <p className="h4 text-center py-4 text-light">Contact Us!</p>
              <label className="text-light">Name</label>
              <input type="name" className="form-control" />
              <br />
              <label className="text-light">Email</label>
              <input type="email" className="form-control" />
              <br />
              <label className="text-light">Confirm Email</label>
              <input type="email" className="form-control" />
              <br />
              <div className="text-center py-4 mt-3">
                <button
                  type="button"
                  class="btn danger-color-dark btn-md text-light"
                >
                  {" "}
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