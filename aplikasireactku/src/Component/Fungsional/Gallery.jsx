import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import './CSS/HomePage.css';
import './CSS/Classes.css';
import CardComp from './CardComp';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';


function Gallery() {
    return (
        <div div className="back" >
            <Jumbotron>
            <h1 className="display-4"></h1>
                <h1 className="judul1" >GALLERY</h1>
                <hr/>
                <Container>
               <Row>
                   <Col><CardComp id="1" judul="Edita Uli" tanggal="Orangtua" /></Col>
                   <Col><CardComp id="2" judul="Thomson Enderson" tanggal="Orangtua" /></Col>
                   <Col><CardComp id="3" judul="Julian Jacob" tanggal="Orangtua" /></Col>
                   <Col><CardComp id="4" judul="Julian Jacob" tanggal="Orangtua" /></Col>
               </Row>
           </Container>
            </Jumbotron>
           
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
export default Gallery