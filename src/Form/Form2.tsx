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
                    console.log(values);
                    handleNext();
                }}
            >
                <Form>
                    <Field name="lastname" placeholder="Last Name" />
                    <ErrorMessage name="lastname" />
                    <button type="button" onClick={handleNext}>Submit</button>
                </Form>
            </Formik>
    );
};