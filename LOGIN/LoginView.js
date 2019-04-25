import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormFeedback, FormGroup, Label, Input, NavLink, Alert } from 'reactstrap';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { Formik } from 'formik';
class Login extends Component {

    state = {
        modal: false,
        email: '',
        password: ''
    }

    componentDidMount() {
        $('Button').on('click', function () {
            this.state.modal = false; // hides modal with id Login
            Register.state.modal = true;// display modal with id Register
        });
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    _handleFormSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Login
                </NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="LoginModal">
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (
                            <Alert color='danger'>{this.state.msg}</Alert>
                        ) : null}

                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={this._handleFormSubmit.bind(this)}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().email().required(),
                                password: Yup.string().min(6).required()
                            })}
                            render={({
                                handleChange,
                                handleSubmit,
                                isValid,
                                isSubmitting,
                                handleBlur,
                                errors,
                                touched
                            }) => (
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            invalid={errors.email && touched.email}
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            autoComplete="off"
                                            className="mb-3"
                                            onBlur={handleBlur}
                                        />
                                        {errors.email && touched.email ? <FormFeedback>{errors.email}</FormFeedback> : null}
                                        <Label for="password">Password</Label>
                                        <Input
                                            invalid={errors.password && touched.password}
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            onChange={handleChange}
                                            autoComplete="new-password"
                                            className="mb-3"
                                            onBlur={handleBlur}
                                        />
                                        {errors.password && touched.password ? <FormFeedback>{errors.password}</FormFeedback> : null}
                                        <Button
                                            color="dark"
                                            style={{ marginTop: '2rem' }}
                                            block
                                            onClick={handleSubmit}
                                            disabled={!isValid || isSubmitting}
                                        >Register</Button>
                                    </FormGroup>
                                )}
                        />
                        <Link onClick={Register.toggle}>Do not have an account? Sign Up Now</Link>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export { Login };
