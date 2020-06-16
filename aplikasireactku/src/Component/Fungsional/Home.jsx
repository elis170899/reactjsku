import React from 'react'
import Blog from './Blog'

const Home = () => {
    return <div>
        <Blog
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
        />


    </div>
}

export default Home;