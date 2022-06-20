import React from 'react'
import "./login.scss"

export const Login = (props) => {

  return (
    <div>
        {props.login && (
            <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                    <div className="center">
                        <h1>Login</h1>
                        <form action="">
                            <div className="txt_field">
                                <input type="text" required />
                                <span></span>
                                <label>UserName</label>
                            </div>
                            <div className="txt_field">
                                <input type="password" required />
                                <span></span>
                                <label>Password</label>
                            </div>
                            <div className="pass">Forgot Password</div>
                            <input className='submit' type="submit" value="Login" />
                            <div className="signup-link">
                                Not a member?
                                <p>
                                    Signup
                                </p>
                            </div>

                        </form>
                    </div>

                    <button className='close-modal' onClick={ props.toggleLogin }>
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
        )}
        
    </div>
  )
}
