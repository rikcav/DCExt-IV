import React, { Component } from 'react';
import Navbar from '../../layout/navbar';
import Footer from '../../layout/Footer';
import CircleRow from '../../layout/Circlerow';
import './style.css';
function Home() {
    return (
      <>
      <body id="page1">
        
        <Navbar />
        <p className='body' style={{ textAlign: "justify" }} >
        Bem-vindo(a) à plataforma de materiais didáticos para inclusão e cuidados de pessoas idosas, pessoas com TDAH, PCD e autismo!
        </p>
        <p className='body' style={{ textAlign: "justify" }}>
        Aqui você encontrará uma variedade de jogos e documentos criados para auxiliar pessoas que desejam ajudar aqueles com esses problemas. Nossos materiais foram cuidadosamente projetados para atender às necessidades específicas desses grupos, com o objetivo de promover inclusão e bem-estar.
        </p>
        <p className='body' style={{ textAlign: "justify" }}> 
        Nosso conteúdo é criado por estudantes em diversas áreas, incluindo educação e pscicologia, garantindo que as melhores práticas e abordagens sejam utilizadas em cada material.
        </p>
        <p className='body' style={{ textAlign: "justify" }}>
        Nós acreditamos que todos merecem a oportunidade de aprender e crescer, independentemente de suas diferenças. É por isso que estamos comprometidos em fornecer os melhores recursos possíveis para aqueles que desejam ajudar os outros a alcançar seu potencial máximo.
        </p>
        <p className='body' style={{ textAlign: "justify" }}>
        Navegue por nossa plataforma e descubra os recursos disponíveis para ajudá-lo(a) em sua jornada de inclusão e cuidado.
        </p>
        
        <CircleRow />
        <Footer />
      </body>
        
        </>
    );
  }
  
  export default Home;