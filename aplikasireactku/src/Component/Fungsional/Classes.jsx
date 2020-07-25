import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import './CSS/HomePage.css';
import './CSS/Classes.css';
import CardComp from './CardComp';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';


function Classes() {
    return (
        <div div className="back" >
            <Jumbotron>
                <div>
                    <img src="https://bbk12e1-cdn.myschoolcdn.com/572/photo/orig_photo795541_6110134.png?w=1460" alt="" />
                    <hr />
                    <p className="belajar1">
                        <h1 className="display-4"></h1>
                        <h1 className="judul2" >CLASSES</h1>
                        <Button color="primary">Kids</Button>{' '}
                        <Button color="warning">Teens</Button>{' '}
                        <Button color="success">Adults</Button>{' '}
                        <Button color="danger">Private Lessons</Button>{' '}
                    </p>
                </div>
            </Jumbotron>
            <Container>
                <h1 className="display-4"></h1>
                <h1 className="judul1" >MUSICAL INSTRUMENS</h1>
                <Row>
                    <Col><CardComp id="1" judul="Edita Uli" tanggal="Orangtua" /></Col>
                    <Col><CardComp id="2" judul="Thomson Enderson" tanggal="Orangtua" /></Col>
                    <Col><CardComp id="3" judul="Julian Jacob" tanggal="Orangtua" /></Col>
                </Row>
            </Container>
            <hr />
            <div className="footer1">
                <p>Open hours<t />
                    <hr />
                        09:00 - 20:00 WIB
                    </p>
            </div>
        </div>




    )
}
export default Classes