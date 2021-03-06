import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

const api = "http://localhost:4000"

class EditComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_siswa: this.props.location.state.id_siswa,
            nama: this.props.location.state.nama,
            tempat_lahir: this.props.location.state.tempat_lahir,
            tgl_lahir: this.props.location.state.tgl_lahir,
            alamat: this.props.location.state.alamat,
            no_hp: this.props.location.state.no_hp,
            email: this.props.location.state.email,
            password: this.props.location.state.password,
            music_groups: this.props.location.state.music_groups,
            kelas: this.props.location.state.kelas,
            response: '',
            display: 'none'
        }

    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value })
    }

    ubahsiswa = (idsiswa) => {
        const data = qs.stringify({
            id_siswa: idsiswa,
            nama: this.state.nama,
            tempat_lahir: this.state.tempat_lahir,
            tgl_lahir: this.state.tgl_lahir,
            alamat: this.state.alamat,
            no_hp: this.state.no_hp,
            email: this.state.email,
            password: this.state.password,
            music_groups: this.state.music_groups,
            kelas: this.state.kelas
        });

        axios.put(api+ '/ubah', data)
        .then(json => {
            if(json === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render () {
        return (
            <Container>
                <h4>Form Edit Data</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                <Col>
                    <Label>ID Siswa</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="id_siswa" value={this.state.id_siswa} onChange={this.handleChange} placeholder="Masukan ID Siswa"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Nama Lengkap</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukan Nama Lengkap"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Tempat Lahir</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="tempat_lahir" value={this.state.tempat_lahir} onChange={this.handleChange} placeholder="Masukan Tempat Lahir"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Tanggal Lahir</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="tgl_lahir" value={this.state.tgl_lahir} onChange={this.handleChange} placeholder="Masukan Tanggal Lahir"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Alamat</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange} placeholder="Masukan Alamat"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Nomor HP</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="no_hp" value={this.state.no_hp} onChange={this.handleChange} placeholder="Masukan No.HP"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Email</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Masukan Tempat Email"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Password</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Masukan Password"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Music Groups</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="music_groups" value={this.state.music_groups} onChange={this.handleChange} placeholder="Masukan Music Groups"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Class</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="kelas" value={this.state.kelas} onChange={this.handleChange} placeholder="Masukan Class"/>
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col>
                                <Button type="button" onClick={()=>this.ubahsiswa(this.state.id_siswa)}>Update</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>

                </Form>
            </Container>
        )
    }
}

export default EditComp