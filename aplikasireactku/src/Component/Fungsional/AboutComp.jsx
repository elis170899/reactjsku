import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import './CSS/AboutComp.css';

function AboutComp() {
    return (
        <div>
            <Jumbotron>
                <div className="imageatas1">
                    <img src="https://bbk12e1-cdn.myschoolcdn.com/356/photo/orig_photo685715_6143831.jpg?w=1460" alt="" />
                    <h1 className="display-4"></h1>
                    <h1 className="judul" >About Us</h1>
                    <p className="lead">Pendekatan profesional dan pengembangan berkelanjutan kami telah mengarahkan kami untuk menjadi penyedia terkemuka pendidikan musik profesional.
Kami menggabungkan cara-cara inovatif, menyenangkan dan kreatif untuk mengajarkan musik dan terlibat dengan siswa untuk mencapai potensi penuh mereka. Pelajaran dan kelas musik yang inovatif dari pemula hingga mahir untuk anak-anak, remaja, dan orang dewasa. Kami adalah sekolah musik terbaik untuk Anda. Kami memiliki program yang sesuai dengan kebutuhan semua orang. Kami adalah satu-satunya kursus musik profesional yang menawarkan pelajaran untuk anak-anak, orang dewasa dan manula.</p>
                </div>
                <div className="imagetengah1">
                <img src="https://bbk12e1-cdn.myschoolcdn.com/847/photo/orig_photo1003642_6787372.jpg?w=1460" alt="" />
                <h1 className="judul" ><hr/>HARMONY MUSIC COURSE</h1>
                    <p className="lead">Kami memiliki instruktur yang berbakat dan sangat berpengalaman yang mengajar piano, biola, gitar, cello, dan instrumen lainnya</p>
                    <h2 className="bio">231 Siswa - 14 Guru - 32 Program - 20 Penghargaan</h2>
                </div>
            </Jumbotron>
            <hr/>
                <div className="footer1">
                    <p>Open hours<t/> 
                        <hr/>
                        09:00 - 20:00 WIB
                    </p>
                </div>
        </div>
    )
}


export default AboutComp