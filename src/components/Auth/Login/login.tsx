import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './login.module.scss';

type Props = {};

type snakBar = {
    open: boolean;
    message: string | null;
}

const Login: React.FC<Props> = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [checked, setChecked] = useState(false);

    const loginSubmit = (checked: boolean, email: string, password: string) => {
        console.log(checked, email, password, '00000');

    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(6, 'Must be 6 characters at least')
                .required('Required')
                .max(20, 'Can not exceed 20 characters')
        }),
        onSubmit: values => loginSubmit(checked, values.email, values.password)
    });


    return (
        <div className={styles.constainer}>
            <form className={styles.form}>
                <TextField
                    className={styles.input}
                    id="email"
                    label="Email"
                    variant="outlined"
                    type="text"
                    helperText={formik.touched.email && formik.errors.email}
                    error={formik.touched.email && !!formik.errors.email}
                    {...formik.getFieldProps('email')}
                ></TextField>
                <TextField
                    className={styles.input}
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="text"
                    helperText={formik.touched.password && formik.errors.password}
                    error={formik.touched.password && !!formik.errors.password}
                    {...formik.getFieldProps('password')}
                ></TextField>
                <FormControlLabel
                    className={styles.check}
                    control={
                        <Checkbox checked={checked} onChange={() => setChecked(prev => !prev)} name="checked" color="primary" />
                    }
                    label="Remember me"
                />
            </form>
        </div>
    );
}

export default Login;