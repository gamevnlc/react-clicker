import React, { Component } from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody, CardFooter, Button} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Immutable from 'immutable';

class Clicker extends Component {
    constructor() {
        super()
        this.state = {
            total : 0
        }
        
        this.increaseAmount = this.increaseAmount.bind(this)
        this.resetAmount = this.resetAmount.bind(this)
        this.decreaseAmount = this.decreaseAmount.bind(this)
    }
    
    getImmuateState() {
        return Immutable.Map(this.state);
    }
    
    increaseAmount() {
        let state = this.getImmuateState();
        let total = state.get('total') + 1;
        this.setState({
            total: total
        })
    }
    
    resetAmount() {
    
        let total = 0;
        this.setState({
            total: total
        })
    }
    
    decreaseAmount() {
        let state = this.getImmuateState();
        let total = state.get('total') - 1;
        this.setState({
            total: total
        })
    }
    
    render() {
        return (
            <Container>
                <Row className="justify-content-center mt-4">
                    <Col xs="6">
                        <Card>
                            <CardHeader>Clicker App</CardHeader>
                            <CardBody>
                                <Row className="justify-content-center ">
                                    <Col className="mx-auto display-1">
                                        {this.state.total}
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <Row>
                                    <Col xs="4">
                                        <Button block color="primary"  onClick={this.increaseAmount}>
                                            <FontAwesomeIcon icon="plus"/>
                                        </Button>
                                    </Col>
                                    <Col xs="4">
                                        <Button block color="warning"  onClick={this.resetAmount}>
                                            <FontAwesomeIcon icon="sync-alt" />
                                        </Button>
                                    </Col>
                                    <Col xs="4">
                                        <Button block color="secondary"  onClick={this.decreaseAmount}>
                                            <FontAwesomeIcon icon="minus" />
                                        </Button>
                                    </Col>
                                </Row>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>  
        );
    }
}


export default Clicker