import React from "react";
// import PropTypes from 'prop-types';

export const NuevaEncuesta = () => {
    
    return (
        <div className="row" >
          <div className="col" >
            <form className="row g-3">
              <div className="col-auto">
              <label className="visually-hidden">Email</label>
              <input type="text" className="form-control" id="staticEmail2" onChange={()=>{}} placeholder="email@example.com" />
              </div>
              <div className="col-auto">
              <label className="visually-hidden">Password</label>
              <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
              </div>
              <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
              </div>
            </form>
          </div>
        </div>

    )
}
