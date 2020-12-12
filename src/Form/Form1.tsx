import { Formik, Form, Field,ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import "./index.css"

interface Props {
    handleNext: () => void;
}

export const Form1: React.FC<(Props)> = ( {handleNext} ) => {

    return (
        
            <Formik
                initialValues={{ firstName: '' }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string().min(5, 'Too Short!')
                        .max(10, 'Too Long!')
                        .required("Required")
                })}
                onSubmit={(values) => {

                    console.log(values);
                }}
                

            >
                <Form >
                    <Field name="firstName" placeholder="First Name" />
                    <ErrorMessage name="firstName"/>
                    <button type="button"  onClick={handleNext}>Submit</button>
                </Form>
            </Formik>
        
    );
};