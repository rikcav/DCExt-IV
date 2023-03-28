import React from 'react';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import Description from '../../layout/Description';
import './style.css';
import SearchBar from '../../layout/Searchbar';
import Table from '../../layout/Table';
function Autismo() {

  const valor = {
    "conteudo" : [
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo"},
      {"tipo" : "Jogos de Tabuleiro", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo"},
    ]
  }

    const props = {
        description: "Autismo",
        imageUrl: "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png",
        imageAltText: "Simbolo altismo",
        description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum maximus risus id efficitur. Quisque vel malesuada nibh. Aliquam sed tellus sem. Duis tellus nisi, vehicula eget fermentum in, dignissim id massa. Etiam tincidunt nunc leo, et lobortis sem cursus non. Duis ac aliquet elit, at posuere mauris. Donec ut euismod urna. Proin pretium ultricies porttitor. Aenean libero tortor, consequat sed congue sit amet, interdum vel dolor. Suspendisse potenti.",
        circleColor: "blue"
       
      };
  return (
    <body id="page2">
      <Navbar />
      <Description {...props}/>
      <SearchBar/>
      <Table valor={valor.conteudo}/>
      <Footer />
    </body>
  );
} 
export default Autismo;