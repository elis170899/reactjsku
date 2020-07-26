import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import {Link} from 'react-router-dom'

const api = 'http://localhost:4000'

class ListComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            siswa: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                siswa: res.data.values
            })
        })
    }

    DeleteSiswa = (idsiswa) => {
        const {siswa} = this.state
        const data = qs.stringify({
            id_siswa: idsiswa
        })

        axios.delete(api+'/hapus',
            {
                data: data,
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
            }
        ).then(json =>{
            if(json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    siswa: siswa.filter(siswa => siswa.id_siswa !== idsiswa),
                    display: 'block'
                })
                //this.props.history.push('/mahasiswa')
            }else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
                //this.props.history.push('/mahasiswa')
            }
        })
    }

    render() {
        return (
            <Container>
                <h2>Data Siswa</h2>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <NavLink href="/datasiswa/tambah"><Button color="success">Tambah Data</Button></NavLink>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Tanggal Lahir</th>
                            <th>Tempat Lahir</th>
                            <th>Tanggal Lahir</th>
                            <th>Alamat</th>
                            <th>No.HP</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Music Groups</th>
                            <th>Kelas</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.siswa.map(siswa =>
                            <tr key={siswa.id_siswa}>
                                <td>{siswa.nama}</td>
                                <td>{siswa.tempat_lahir}</td>
                                <td>{siswa.tgl_lahir}</td>
                                <td>{siswa.alamat}</td>
                                <td>{siswa.no_hp}</td>
                                <td>{siswa.email}</td>
                                <td>{siswa.password}</td>
                                <td>{siswa.music_groups}</td>
                                <td>{siswa.kelas}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/datasiswa/edit',
                                                state: {
                                                    id_siswa: siswa.id_siswa,
                                                    nama: siswa.nama,
                                                    nama: siswa.nama,
                                                    tempat_lahir: siswa.tempat_lahir,
                                                    tgl_lahir: siswa.tgl_lahir,
                                                    alamat: siswa.alamat,
                                                    no_hp: siswa.no_hp,
                                                    email: siswa.email,
                                                    password: siswa.password,
                                                    music_groups: siswa.music_groups,
                                                    kelas: siswa.kelas
                                                }
                                            }
                                        }>
                                        <Button>Edit</Button>


                                    </Link>
                                    <span> </span>
                                    <Button color="danger" onClick={()=> this.DeleteSiswa(siswa.id_siswa)}>Hapus</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default ListComp 