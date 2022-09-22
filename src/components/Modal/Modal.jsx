import React, { useState } from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="first-button"
          >
          ⓧ
          </button>
        </div>
        <div className="title">
          <h1>Login</h1>
        </div>
        <div className="body">
          <form>
          <label>
          User:
          <br />
          <input type={"text"} id='message' name="message" placeholder="Email" />
          <br />
          </label>
          <label>
          Password:
          <br />
          <input type={"password"} id='password' name='password' placeholder="Password" />
          </label>
          </form>
        </div>
        <div className="forgot-password">
        <a href="#">Forgot password?</a>
        </div>
        <div className="footer">
          <button>Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;