import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { browserHistory }  from 'react-router';
import Title from '../../../components/Title/title';
// import './login.scss';

class ForgotPassword extends Component {

    gotoPage = (path) => {
        browserHistory.push(path);
    }
    render() {
        return (
            <div className="login">
                <Title text="forgot password" />
                <div className="content">
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <img src="../assets/images/forgot-password-img.png" alt=""/>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <div className="user-form">
                                <span className="user-form-header">Gigder - Forgot Password</span>
                                <span className="user-form-subheader">If you don't have gigder.com account <br /> you can <a onClick={() => this.gotoPage('/user/register')}>register</a> or for <a onClick={() => this.gotoPage('/user/login')}>login</a> .</span>
                                <span className="user-form-fieldtext">Email</span>
                                <input className="user-form-field" type="text" />
                                <div className="button">Send password reset link</div>
                                <a onClick={() => this.gotoPage('/user/login')}>Login</a>
                                <a onClick={() => this.gotoPage('/user/register')}>Register</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;