import * as React from 'react';
import * as Yup from "yup";
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';

interface MyFormValues {
    lastname: string;
}
interface Props {
    handleNext: () => void;
}

export const Form2: React.FC<(Props)> = ({ handleNext }) => {
    const initialValues: MyFormValues = { lastname: '' };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object
                ({
                    lastname: Yup.string().min(2, 'Too Short!')
                        .max(50, 'Too Long!')
                        .required("Required")
                })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    handleNext();
                }, 400);
            }}
        >
            <Form>
            <label htmlFor="lastname">Last Name</label>

                <Field name="lastname" placeholder="Last Name" type="text" />
                <ErrorMessage name="lastname" />
                <br />
                <button type="submit" >Submit</button>
            </Form>
        </Formik>
    );
};