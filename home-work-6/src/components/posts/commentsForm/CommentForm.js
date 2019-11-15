import React  from 'react';
import {Formik, Form, Field} from 'formik';
import axios from 'axios';
import './commentsForm.css';


export default function CommentForm() {

    return (
        <div className="form-wrapper">
            <Formik initialValues={{
                name: '',
                email: '',
                body: ''
            }}
            validate = {(value) => {
                const errors = {}
                const emailRegular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const nameRegular = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/
                
                errors.name = nameRegular.test(value.name);
                errors.email = emailRegular.test(String(value.email).toLowerCase());
                return errors;
            }}
            onSubmit = {(value) => {
                console.log(value)
            }}
            >
                {(formik) => (
                    <>
                        <Form>
                            <Field 
                                type="text" 
                                placeholder="type your name" 
                                name="name" 
                                id="name"
                            />
                            <div className="errors-field">{!formik.errors.name ? 'your name is not correct' : ''}</div>
                            <Field 
                                type="email" 
                                placeholder="type your email" 
                                name="email" 
                                id="email" 
                            />
                            <div className="errors-field">{!formik.errors.email ? 'your email is not correct' : ''}</div>
                            <Field 
                                component="textarea" 
                                name="body"
                            />
                            <button 
                                type="submit"
                                onClick={() => (
                                    console.log(formik.values)
                                )}
                                className="MuiButtonBase-root MuiButton-root MuiButton-contained jss12819 MuiButton-containedPrimary"
                                >
                                    Send
                                    <span className="MuiButton-endIcon MuiButton-iconSizeMedium">
                                        <span 
                                            className="material-icons MuiIcon-root">
                                            send
                                        </span>
                                    </span>
                            </button>
                        </Form>
                    </>
                )}
            </Formik>
        </div>
    )
}
