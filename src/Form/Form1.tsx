import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import "./index.css"

interface Props {
    handleNext: () => void;
}

const Form1: React.FC<(Props)> = ({ handleNext }) => {
    return (
        <Formik
            initialValues={{ firstName: '' }}

            validationSchema={Yup.object({
                firstName: Yup.string()
                    .min(3, "Less then 3 characters")
                    .max(15, 'Must be 15 characters or less')
                    .required('Required')
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    handleNext();
                }, 400);
            }}

        >
            <Form >
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" placeholder="First Name" type="text" autoFocus />
                <ErrorMessage name="firstName" />
                <br />
                <button type="submit" >Submit</button>
            </Form>
        </Formik>

    );
};
export default Form1;