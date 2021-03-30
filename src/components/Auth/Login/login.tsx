import React from 'react';
import { Button } from '@material-ui/core';
import styles from './login.module.scss';

type Props = {};

const Login: React.FC<Props> = props => {
    return (
        <div className={styles.constainer}>hello
            <Button color="primary">click</Button>
        </div>
    );
}

export default Login;