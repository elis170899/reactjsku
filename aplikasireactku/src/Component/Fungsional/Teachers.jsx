import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import './CSS/HomePage.css';
import './CSS/Classes.css';
import CardComp from './CardComp';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';


function Teachers() {
    return (
        <div div className="back" >
            <Jumbotron>
                <div>
                    <img src="https://bbk12e1-cdn.myschoolcdn.com/457/photo/2014/07/orig_photo311606_4477501.jpg?w=1460" alt="" />
                    <hr />
                </div>
            </Jumbotron>
            <Container>
                <h1 className="display-4"></h1>
                <h1 className="judul1" >TEACHERS</h1>
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
export default Teachers