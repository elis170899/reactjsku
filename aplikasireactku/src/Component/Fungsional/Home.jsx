import React from 'react'
// import Blog from './Blog'
import Produk from '../Class/Produk';

const Home = () => {
    return <div>
        {
            <div>
            <Produk nama="Macbook Pro 2019" stock="10" harga="53.000.000"/>
            <Produk nama="Macbook Pro 2020" stock="15" harga="63.000.000"/>
            <Produk nama="Macbook Pro 2021" stock="50" harga="33.000.000"/>
            <Produk nama="Macbook Pro 2022" stock="100" harga="73.000.000"/>
            <Produk nama="Macbook Pro 2023" stock="108" harga="43.000.000"/>
            <Produk nama="Macbook Pro 2024" stock="200" harga="83.000.000"/>
            </div>
        /* <Blog
            tanggal="02 Juni 2020"
            judul="Teknologi Blockchain"
            summary="Generate Lorem Ipsum placeholder text for use in your graphic."
        />
        <Blog
            tanggal="03 Juni 2020"
            judul="Teknologi Internet of Things"
            summary="Generate Lorem Ipsum placeholder text for use in your graphic."
        />
        <Blog
            tanggal="04 Juni 2020"
            judul="Design Pattern Laravel"
            summary="Generate Lorem Ipsum placeholder text for use in your graphic."
        /> */}


    </div>
}

export default Home;