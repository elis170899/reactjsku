import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import './CSS/HomePage.css';
import CardComp from './CardComp';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';


function HomePage() {
    return (
        <div div className="back" >
            <Jumbotron>
                <div className="imageatas">
                    <img src="https://bbk12e1-cdn.myschoolcdn.com/622/photo/orig_photo600484_5855918.jpg?w=1460" alt="" />
                    <h1 className="display-4"></h1>
                    <h1 className="judul" >Ciptakan Harmony Milikmu</h1>
                    <p className="lead">Tiap orang berhak memiliki edukasi musik</p>
                    <p className="belajar">
                        <Button color="primary">MULAI BELAJAR!</Button>
                    </p>
                </div>
            </Jumbotron>
            <Container>
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
export default HomePage