import React from 'react';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import Description from '../../layout/Description';
import './Style.css';
import SearchBar from '../../layout/Searchbar';
import Table from '../../layout/Table';
function TDAH() {

  const valor = {
    "conteudo" : [
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH"},
    ]
  }

    const props = {
        description: "TDAH",
        imageUrl: "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png",
        imageAltText: "TDAH",
        description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum maximus risus id efficitur. Quisque vel malesuada nibh. Aliquam sed tellus sem. Duis tellus nisi, vehicula eget fermentum in, dignissim id massa. Etiam tincidunt nunc leo, et lobortis sem cursus non. Duis ac aliquet elit, at posuere mauris. Donec ut euismod urna. Proin pretium ultricies porttitor. Aenean libero tortor, consequat sed congue sit amet, interdum vel dolor. Suspendisse potenti.",
        circleColor: "red"
      };
  return (
    <body id="page5">
      <Navbar />
      <Description {...props}/>
      <SearchBar/>
      <Table valor={valor.conteudo}/>
      <Footer />
    </body>
  );
} 
export default TDAH;