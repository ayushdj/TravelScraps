/*
    Importing the necessary react components
*/
import React from 'react'
import {Row, Col, Form, InputGroup} from 'react-bootstrap';
import "../index.css";

function Username(props) {
    return (
        <div>
            <Form.Group className="mb-3" style={{marginTop:"15px"}}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> <Form.Label>Username
                        <span style={{color:"red", fontSize:"18px"}}>*</span></Form.Label> </Col>
                </Row> 
                <InputGroup>
                    <InputGroup.Text id="inputGroupPrepend">travelscraps.com/</InputGroup.Text>
                        <Form.Control type="text" className="wd-inputs" placeholder="Username"
                                      aria-describedby="inputGroupPrepend" onChange={props.handleUserNameChange} value={props.userName}
                        name="username"/>
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </InputGroup>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        {props.userNameViolation ? <Form.Text style={{color:"red"}}>
                                {`${props.usernameCharacterCount - 30} character over the limit`}</Form.Text> :
                        <Form.Text>{`${30 - props.usernameCharacterCount}/30 characters remaining`}</Form.Text>}
                    </Col>
                </Row>
            </Form.Group>
        </div>
    )
}

export default Username;