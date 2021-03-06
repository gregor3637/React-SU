import React, { Component } from 'react';

import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Input from '../../components/input';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            rePassword: ""
        }
    }

    static contextType = UserContext;

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;

        this.setState(newState);
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {
            username,
            password
        } = this.state;

        await authenticate('url/Register', {
            username,
            password
        },
            (user) => {
                console.log('Register successful');
                this.context.logIn(user);
                this.props.history.push('/')
            },
            (e) => {
                console.log(`Register Error: ${e} `);
            });
    }

    render() {
        const {
            username,
            password,
            rePassword
        } = this.state;

        return (
            <PageLayout>
                <form onSubmit={this.handleSubmit} className={styles.container}>
                    <Title title="Register" />
                    <Input
                        value={username}
                        onChange={(e) => this.onChange(e, 'username')}
                        label="username"
                        id="username"
                    />
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => this.onChange(e, 'password')}
                        label="Password"
                        id="password"
                    />
                    <Input
                        type="password"
                        value={rePassword}
                        onChange={(e) => this.onChange(e, 'rePassword')}
                        label="Re-Password"
                        id="re-password"
                    />
                    <SubmitButton title="Register" />
                </form>
            </PageLayout>
        );
    };
};

export default RegisterPage;