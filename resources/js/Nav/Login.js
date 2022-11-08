import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
function Login() {
    
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = (ev) => {
        ev.preventDefault();

        if (email.length > 0 && password.length > 0) {
            // GET COOKIE
            axios.get("/sanctum/csrf-cookie").then(() => {
                axios.post("api/login", {
                        email: email,
                        password: password,
                    })
                    .then((response) => {
                        // SET RESPONSE IN LOCAL STORAGE
                        localStorage.setItem("user",JSON.stringify(response.data));
                        localStorage.setItem('token', JSON.stringify(response.data.token));
                        swal("Success","success");
                        navigate('/');
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            });
        }
    };

    return (
        
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(ev) => {
                                setEmail(ev.target.value.toLocaleLowerCase());
                            }}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(ev) => {
                                setPassword(ev.target.value);
                            }}
                        />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={loginHandler}>
                        Submit
                    </Button>
                </Form>

    );
}

export default Login;
