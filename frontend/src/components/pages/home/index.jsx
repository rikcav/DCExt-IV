import React, { Component } from 'react';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import CircleRow from '../../layout/CircleRow';
import './style.css';
function Home() {
    return (
      <body id="page1">
        <Navbar />
        <p className='body' >Lorem ipsum dolor sit amet consectetur. Mauris posuere morbi condimentum purus donec pharetra. In tincidunt metus lacinia venenatis risus egestas. Duis tincidunt sit pharetra ac egestas. Nibh lectus sit sit gravida. Netus ultrices maecenas quam morbi est fusce.N porttitor. At vitae leo viverra cras pellentesque. Mi vitae at rhoncus adipiscing laoreet feugiat. Elit lacinia blandit molestie ut posuere. Blandit ultrices pharetra ullamcorper mattis. Placerat tellus arcu ac integer donec feugiat enim. Hendrerit elit nunc tellus felis tincidunt a platea molestie aliquam. Ut gravida enim senectus urna felis. Tempor ultrices condimentum cras eget libero. Pellentesque morbi tincidunt odio donec faucibus. Ultrices hendrerit nisl eu sapien amet bibendum euismod quis tellus.</p>
        <CircleRow />
        <Footer />
        </body>
    );
  }
  
  export default Home;