import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';

const LastName = (props) => {
    return(
        <div >
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> <Form.Label for="lastName">Last Name</Form.Label></Col>
            </Row>

            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} ><Form.Control type="text" className="wd-inputs"
                       placeholder="Doe" onChange={props.handleLastName} value={props.lastName} name="lastName"/>
                </Col>
            </Row>
        </div>
    )
}

export default LastName;