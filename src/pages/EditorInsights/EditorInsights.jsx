import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../assets/1.png';
import second from '../../assets/2.png';
import third from '../../assets/3.png';

const EditorInsights = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
                <Col key={idx}>
                <Card>
                    <Card.Img variant="top" src={first}/>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
        </Row>
    );
};

export default EditorInsights;