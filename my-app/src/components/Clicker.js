import React, { Component } from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import PropTypes from 'prop-types'

class Clicker extends Component {
    constructor() {
        super()
        this.state = {
            total : 0
        }
    }
    
    render() {
        return (
            <Container>
                <Row className="justify-content-center mt-4">
                    <Col xs="6">
                        <Card>
                            <CardHeader>Clicker App</CardHeader>
                            <CardBody>
                            </CardBody>
                            <CardFooter>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>  
        );
    }
}

export default Clicker