import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
const loginuser = () => {

    return (
        <div className="container" style = {{marginTop:"50px"}}>
            <div className="row justify-content-center">
                    <div className="col-md-6">
                    <Col sm="8" md={{ size: 'auto', offset: 3 }}><h2>LOGIN SISWA </h2></Col>
                        <form>
                            <div className="form-group">
                                <label >Email </label>
                                 <input type="email" className="form-control"  placeholder="Masukan email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control"  placeholder="Masukan Password" />
                            </div>
                                <Link to="/" button type="submit" class="btn btn-info btn-block">M A S U K</Link> 
                                <p>Belum Punya Akun? Silahkan Daftar Di Bawah Ini</p>  

                                <Link to="/daftar" button type="submit" class="btn btn-info btn-block">D A F T A R</Link> 

                        </form>
                    </div>
            </div>
            </div>
     );
}


export default loginuser; 