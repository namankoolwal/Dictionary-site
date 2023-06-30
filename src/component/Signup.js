import { Alert } from 'bootstrap'
import React, { useEffect } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'


const Signup = () => {

    useEffect(() => {

    }, []);

    function falert() {
        alert("USER REGISTERED SUCCESFULLY")


    }
    return (
        <div>
            {/* <!-- Modal --> */}
            <div className="px-4 my-5 bg-light rounded-3 py-5" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <div className="modal-body mx-3">

                                <GoogleOAuthProvider clientId="78940162672-otnijmqjlr47tj63g4sske1ef13dovqi.apps.googleusercontent.com">
                                    <GoogleLogin
                                        theme='filled_blue'
                                        shape='rectangular'
                                        width='400'
                                        onSuccess={credentialResponse => {
                                            const details = jwt_decode(credentialResponse.credential)
                                            console.log(details);
                                            console.log(credentialResponse);
                                            alert("Account Login Succesfully")
                                        }}
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}
                                       
                                    />

                                </GoogleOAuthProvider>
                            </div>
                            <form>
                                <div className="mb-3 w-80">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInput" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5" onClick={falert} >Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup