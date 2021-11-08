import React from 'react';
import emoji from '../assets/partyfaceemoji.png';
import { Container, Col, Row, Image } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Container>
        <Row style={{ padding: '50px' }}>
          <Col>
            <h1 style={{ padding: '50px' }}>Welcome to Party Planner</h1>
            <Image src={emoji} alt="party face emoji" fluid></Image>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Home;
