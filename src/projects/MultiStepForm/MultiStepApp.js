import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField, CheckboxWithLabel } from 'formik-mui'
import styles from './MultiStepApp.module.scss'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import { MyStepper } from './components/MyStepper/MyStepper'
import { mixed, number, object, string } from 'yup'

export const MultiStepApp = () => {
    return (
        <FormikStepper
            initialValues={{
                firstName: '',
                lastName: '',
                millionaire: false,
                money: 0,
                description: '',
            }}
        >
            <FormikStep
                className={styles.step}
                validationSchema={object({
                    firstName: string().required(),
                    lastName: string().required(),
                })}
            >
                <Field component={TextField} label="First Name" name="firstName" variant="outlined" />
                <Field component={TextField} label="Last Name" name="lastName" variant="outlined" />
                <Field
                    component={CheckboxWithLabel}
                    type="checkbox"
                    name="millionaire"
                    Label={{ label: 'I am a millionaire' }}
                />
            </FormikStep>

            <FormikStep
                className={styles.step}
                validationSchema={object({
                    money: mixed().when('millionaire', {
                        is: true,
                        then: number()
                            .required('Required')
                            .min(
                                1_000_000,
                                'Because you said you are a millionaire you need to have 1 million'
                            ),
                        otherwise: number().required(),
                    }),
                })}
            >
                <Field
                    component={TextField}
                    type="number"
                    label="Amount of money"
                    name="money"
                    variant="outlined"
                />
            </FormikStep>

            <FormikStep className={styles.step}>
                <Field component={TextField} label="Description" name="description" variant="outlined" />
            </FormikStep>
        </FormikStepper>
    )
}
const FormikStep = ({ children, validationSchema = {}, ...props }) => {
    return <div {...props}>{children}</div>
}
FormikStep.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    validationSchema: PropTypes.object,
}

const FormikStepper = ({ children, ...props }) => {
    const childrenArray = React.Children.toArray(children)
    const [step, setStep] = useState(0)
    const currentChild = childrenArray[step]
    const isLastStep = (step, childrenArray) => step === childrenArray.length - 1

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                if (isLastStep(step, childrenArray)) {
                    console.log('SUBMIT = ', values, helpers)
                } else {
                    setStep((prev) => prev + 1)
                }
            }}
        >
            <Form autoComplete={'off'}>
                <div className={styles.flexWrapper}>
                    <div className={styles.centerBlock}>
                        <MyStepper step={step} />
                        {currentChild}
                        {step > 0 && (
                            <Button variant="contained" onClick={() => setStep((prev) => prev - 1)}>
                                Back
                            </Button>
                        )}
                        <Button type="submit" variant="contained">
                            {isLastStep(step, childrenArray) ? 'Submit' : 'Next'}
                        </Button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}
FormikStepper.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
}
