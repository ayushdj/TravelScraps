/*
    Importing the necessary react components
*/
import React from 'react'
import {Row, Col, Form} from 'react-bootstrap'
import "../index.css";

const Password = (props) => {
    return (
        <>
            <div className="password">
                <Form.Group className="mt-3">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> <Form.Label>
                            Password</Form.Label></Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <Form.Control type="password" className="wd-inputs" required={true}
                                          name="email" onChange={props.handlePasswordChange} value={props.password}/>
                        </Col>
                    </Row>
                </Form.Group>
            </div>
        </>
    )
}

export default Password;