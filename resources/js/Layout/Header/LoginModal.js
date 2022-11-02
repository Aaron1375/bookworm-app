import { useState } from "react";
import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
function LoginModal() {
    // setshow modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // login function
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = (ev) => {
        ev.preventDefault();

        if (email.length > 0 && password.length > 0) {
            axios.get("/sanctum/csrf-cookie").then(() => {
                axios
                    .post("api/login", {
                        email: email,
                        password: password,
                    })
                    .then((response) => {
                        //set response in local storage
                        // console.log(response.data.token);
                        localStorage.setItem(
                            "user",
                            JSON.stringify(response.data)
                        );
                        localStorage.setItem(
                            "token",
                            JSON.stringify(response.data.token)
                        );
                        swal("Success", "success");
                        navigate("/");
                        setShow(false);
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            });
        }
    };

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* FORM */}
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={(ev) => {
                                    setEmail(
                                        ev.target.value.toLocaleLowerCase()
                                    );
                                }}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={(ev) => {
                                    setPassword(ev.target.value);
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        type="button"
                        onClick={loginHandler}
                    >
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal;
