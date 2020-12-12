import * as React from 'react';
import * as Yup from "yup";
import {
    Formik,
    Form,
    Field,
    ErrorMessage,

} from 'formik';

interface MyFormValues {
    email: string;
}
interface Props {
    handleNext: () => void;
}

export const Form3: React.FC<(Props)> = ({ handleNext }) => {
    const initialValues: MyFormValues = { email: '' };
    return (
    
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object
                    ({
                        email: Yup.string().email()
                            .email('Invalid email').required("require")
                    })}

                onSubmit={(values) => {
                    console.log(JSON.stringify(values, null, 2));
                    handleNext();
                }}
            >
                <Form>
                    <Field name="email" placeholder="Email" />
                    <ErrorMessage name="email" />
                    <button type="button" onClick={handleNext}>Submit </button>
                </Form>
            </Formik>
        
    );
};