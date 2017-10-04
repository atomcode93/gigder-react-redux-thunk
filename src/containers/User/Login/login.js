import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { browserHistory }  from 'react-router';
import Title from '../../../components/Title/title';
// import './login.scss';

class Login extends Component {

    gotoPage = (path) => {
        browserHistory.push(path);
    }
    render() {
        return (
            <div className="login">
                <Title text="login" />
                <div className="content">
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <img src="../assets/images/login-img.png" alt=""/>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <div className="user-form">
                                <span className="user-form-header">Gigder - Find musicians easily.</span>
                                <span className="user-form-subheader">If you don't have gigder.com account <br /> you can <a onClick={() => this.gotoPage('/user/register')}>register</a>.</span>
                                <span className="user-form-fieldtext">Email</span>
                                <input className="user-form-field" type="text" />
                                <span className="user-form-fieldtext">Password</span>
                                <input className="user-form-field" type="text" />
                                <div className="button" onClick={() => this.gotoPage('/home')}>Login</div>
                                <a onClick={() => this.gotoPage('/user/forgotpassword')}>Forgot your password</a>
                                <a onClick={() => this.gotoPage('/user/register')}>Register</a>
                                <div className="button facebook">Login with Facebook</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Login;