import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink, Alert } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

class Register extends Component {

    _handleFormSubmit(values) {
        console.log(values);
      }

    state = {
        modal: false,
        name: '',
        email: '',
        username: '',
        password: ''
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Create New Account
                </NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="RegisterModal">
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (
                            <Alert color='danger'>{this.state.msg}</Alert>
                        ) : null}
                        <Formik 
                            initialValues={{ name: '', email: '', password: '' }}
                            onSubmit={this._handleFormSubmit.bind(this)}
                            validationSchema={Yup.object().shape({
                            name: Yup.string().required(),
                            email: Yup.string()
                                .email()
                                .required(),
                            password: Yup.string()
                                .min(6)
                                .required()
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
                                <Label for="name">Name</Label>
                                <Input
                                    invalid={errors.name && touched.name}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    onChange={this.onChange}
                                    autoComplete="off"
                                    className="mb-3"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name && (
                                    <FormFeedback>{errors.name}</FormFeedback>
                                )}
                                <Label for="email">Email</Label>
                                <Input
                                    invalid={errors.email && touched.email}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={this.onChange}
                                    autoComplete="off"
                                    className="mb-3"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email && (
                                    <FormFeedback>{errors.email}</FormFeedback>
                                )}
                                <Label for="password">Password</Label>
                                <Input
                                    invalid={errors.password && touched.password}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={this.onChange}
                                    autoComplete="new-password"
                                    className="mb-3"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password && (
                                    <FormFeedback>{errors.password}</FormFeedback>
                                )}
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
                            
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export { Register };
