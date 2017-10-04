import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { browserHistory }  from 'react-router';
import Title from '../../../components/Title/title';
// import './signup.scss';

class Signup extends Component {

    gotoPage = (path) => {
        browserHistory.push(path);
    }
    render() {
        return (
            <div className="signup">
                <Title text="register" />
                <div className="content">
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <img src="../assets/images/register-img.png" alt=""/>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <div className="user-form">
                                <span className="user-form-header">Gigder - Register</span>
                                <span className="user-form-subheader">If you have gigder.com account <br /> you can <a onClick={() => this.gotoPage('/user/login')}>login</a>.</span>
                                <span className="user-form-fieldtext">Email</span>
                                <input className="user-form-field" type="text" />
                                <span className="user-form-fieldtext">Password</span>
                                <input className="user-form-field" type="text" />
                                <span className="user-form-fieldtext">Password Confirmation</span>
                                <input className="user-form-field" type="text" />
                                <span className="user-form-fieldtext">Full Name</span>
                                <input className="user-form-field" type="text" />
                                <div className="user-form-checkbox">
                                <input type="checkbox" value="Read Terms and Data Policy" /><span>Read Terms and Data Policy</span>
                                </div>
                                <div className="button">Register</div>
                                <a onClick={() => this.gotoPage('/user/login')}>Login</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Signup;