import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import './CSS/HomePage.css';
import './CSS/Classes.css';
import './CSS/Contact.css';
import CardComp from './CardComp';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';


function Contact() {
    return (
        <div div className="back" >
            <Jumbotron>
                <h1 className="display-4"></h1>
                <h1 className="judulc" >CONTAC US</h1><hr/>
                <img src="https://i1.wp.com/www.thesocialmediahat.com/wp-content/uploads/2019/09/Default-Social-Media-Background-2.png?w=1500&ssl=1" alt="" />
                <hr />
                <p className="isicontact">
                    Phone : (021)-675-653
                    <hr/>       
                    Email : harmonymusic@gmail.com
                    <hr/>
                    Address : Jl. Langelist, No. 376, Jakarta
                </p>
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
export default Contact