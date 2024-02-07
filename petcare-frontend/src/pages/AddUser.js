import { faBorderStyle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useRef, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";


export default function AddUser() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: ""
    });



    const userRef = useRef();

    const { firstName, lastName, username, password, email } = user;


    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();



    };

    return (
        <section className="section">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

                        <h2 className="text-center m-4">Become a Pathfinder!</h2>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3" style={{ textAlign: 'left' }}>
                                <label htmlFor="firstName" className="form-label">
                                    First Name
                                </label><input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Edmund"
                                    name="firstName"
                                    id="firstName"
                                    value={firstName}
                                    required
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3" style={{ textAlign: 'left' }}>
                                <label htmlFor="lastName" className="form-label">
                                    Last Name
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Hillary"
                                    name="lastName"
                                    id="lastName"
                                    value={lastName}
                                    required
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3" style={{ textAlign: 'left' }}>
                                <label htmlFor="username" className="form-label">
                                    Username
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="sireddyhills"
                                    name="username"
                                    id="username"
                                    value={username}
                                    required
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3" style={{ textAlign: 'left' }}>
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="icl1mb3verest"
                                    name="password"
                                    id="password"
                                    value={password}
                                    required
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3" style={{ textAlign: 'left' }}>
                                <label htmlFor="email" className="form-label">
                                    E-mail
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="you@pathfinder.com"
                                    name="email"
                                    value={email}
                                    required
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">
                                Submit
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}