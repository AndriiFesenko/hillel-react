import React from 'react';
import {Formik, Form, Field} from 'formik';

export default function AddTodoForm({todos, addTodo}) {

    return (
        <div className="form-wrapper">
            <Formik initialValues={{
                    name: ''
                }}
                onSubmit = {(value, {resetForm}) => {
                    resetForm({})
                }}
            >
                {({values}) => (
                    <>
                    <Form>
                        <Field 
                            type="text" 
                            name="name" 
                            id="name" 
                            value={values.name}/>
                        <button 
                            type="submit"
                            onClick={addTodo.bind(null, values.name)}
                            >save</button>
                    </Form>
                    </>
                )}
            </Formik>
        </div>
    )
}
