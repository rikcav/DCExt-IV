import React from 'react';
import Navbar from '../../layout/navbar';
import Footer from '../../layout/Footer';
import Description from '../../layout/Description';
import './style.css';
import SearchBar from '../../layout/searchbar';
import Card from '../../layout/Card';
function Autismo() {

  const valor = {
    "conteudo" : [
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png"},
      {"tipo" : "Jogos de Tabuleiro", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Autismo", "descricao" : "Lorem Ipsum Autismo", "categoria" : "Lorem Ipsum Autismo", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png"},
    ]
  }

  const valor2 = valor.conteudo

    const props = {
        description: "Autismo",
        imageUrl: "https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png",
        imageAltText: "Simbolo autismo",
        description2: "O TEA-Transtorno do Espectro Autista, é caracterizado por alterações nas funções de desenvolvimento no sistema nervoso, apresentando déficits de interação social e de  comunicação. Dessa forma, desenvolvemos um catálogo de jogos físicos e digitais que podem estimular o desenvolvimento de habilidades e auxiliar na rotina de pessoas autistas.",
        circleColor: "blue"
       
      };
  return (
    <body id="page2">
      <Navbar />
      <Description {...props}/>
      <SearchBar/>
      { valor2?.length ? valor2.map((data, index) =>
        <Card category={data.categoria} description={data.descricao} link={data.link} title={data.nome} image={data.image}/>
      ) : <div></div>
      }
      <Footer />
    </body>
  );
} 
export default Autismo;