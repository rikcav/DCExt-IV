import React from 'react';
import Navbar from '../../layout/navbar.jsx';
import Footer from '../../layout/Footer';
import Description from '../../layout/Description';
import './style.css';
import SearchBar from '../../layout/searchbar';
import Card from '../../layout/Card';
function TDAH() {

  const valor = {
    "conteudo" : [
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum TDAH", "descricao" : "Lorem Ipsum TDAH", "categoria" : "Lorem Ipsum TDAH", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1089582424016572567/image_1.png"},
    ]
  }

  const valor2 = valor.conteudo

    const props = {
        description: "TDAH",
        imageUrl: "https://cdn.discordapp.com/attachments/440326168491720705/1095551652418826260/Infito.png",
        imageAltText: "TDAH",
        description2: "O TDAH é um transtorno neurobiológico de causas genéticas, caracterizado por sintomas como falta de atenção, inquietação e impulsividade. Visando ajudar essas pessoas desenvolvemos uma ferramenta versatil onde apresenta jogos que auxiliam algumas habilidades importantes para o dia a dia. Esses jogos consistem em jogos virtuais e fisicos,que permite o usuario utilizar  da maneira que se sinta confortavel. Essa ferramenta, funciona como um complementar a outras formas de tratamento, como terapia comportamental e medicação, trabalhando no aumento da concentração,no desenvolvimento das habilidades cognitivas, redução do estresse,melhoria na autoestima,estímulo à interação social.",
        circleColor: "red"
      };
  return (
    <body id="page5">
      <Navbar />
      <Description {...props}/>
      <SearchBar/>
      { valor2?.length ? valor2.map((data, index) =>
        <Card category={data.categoria} description={data.descricao} title={data.nome} image={data.image} link={data.link}/>
      ) : <div></div>
      }
      <Footer />
    </body>
  );
} 
export default TDAH;