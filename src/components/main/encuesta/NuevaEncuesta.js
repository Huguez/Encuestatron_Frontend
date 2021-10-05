import React from "react";
// import PropTypes from 'prop-types';

export const NuevaEncuesta = ( props ) => {


    return (
      <div className="container">
        <div className="row" >
          <div className="col" >
            <form class="row g-3">
              <div className="col-auto">
              <label for="staticEmail2" class="visually-hidden">Email</label>
              <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com" />
              </div>
              <div className="col-auto">
              <label for="inputPassword2" className="visually-hidden">Password</label>
              <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
              </div>
              <div class="col-auto">
              <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
