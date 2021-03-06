import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const daftaruser = () => {

        return (
            <div className="container" style = {{marginTop:"50px"}}>
                <div className="row justify-content-center">
                        <div className="col-md-6">
                        <Col sm="8" md={{ size: 'auto', offset: 3 }}><h2>REGISTRASI SISWA </h2></Col>
                            <form>
                                <div className="form-group">
                                    <label >Nama Lengkap </label>
                                     <input type="nama" className="form-control"  placeholder="Masukan Nama" />
                                </div>
                                <div className="form-group">
                                    <label >Tempat Lahir</label>
                                    <input type="tempatlahir" className="form-control"  placeholder="Masukan Tempat Lahir" />
                                </div>
                                <div className="form-group">
                                    <label >Tanggal Lahir</label>
                                    <input type="tanggal" className="form-control"  placeholder="Masukan Tanggal Lahir" />
                                </div>
                                <div className="form-group">
                                    <label >Alamat</label>
                                    <input type="alamat" className="form-control"  placeholder="Masukan Alamat" />
                                </div>
                                <div className="form-group">
                                    <label >Nomer Handphone</label>
                                    <input type="nomor" className="form-control"  placeholder="Masukan Nomer Handphone" />
                                </div>
                                <div className="form-group">
                                    <label >Email</label>
                                    <input type="email" className="form-control"  placeholder="Masukan Email" />
                                </div>
                                <div className="form-group">
                                    <label >Music Groups</label>
                                    <input type="music" className="form-control"  placeholder="Masukan Pilihan Music Groups" />
                                </div>
                                <div className="form-group">
                                    <label >Class</label>
                                    <input type="kelas" className="form-control"  placeholder="Masukan Pilihan Kelas" />
                                </div>


                                <Link to="/loginuser" button type="submit" class="btn btn-primary btn-block">D A F T A R</Link> 

                                    <Link to="/loginuser" button type="submit" class="btn btn-primary btn-block">B A T A L</Link> 

                            </form>
                        </div>
                </div>
                </div>
         );
    }

export default daftaruser; 