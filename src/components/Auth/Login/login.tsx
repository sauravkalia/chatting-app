import { TextField } from '@material-ui/core';
import React from 'react';
import styles from './login.module.scss';

type Props = {};

type snakBar = {
    open: boolean;
    message: string | null;
}

const Login: React.FC<Props> = props => {
    return (
        <div className={styles.constainer}>
            <form className={styles.form}>
                <TextField
                   className={styles.input}
                   id="email"
                   label="Email"
                   variant="outlined"
                   type="text"
                   ></TextField>
                <TextField
                   className={styles.input}
                   id="password"
                   label="Password"
                   variant="outlined"
                   type="text"
                   ></TextField>   
            </form>
        </div>
    );
}

export default Login;