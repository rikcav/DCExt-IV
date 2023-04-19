import React, { useEffect, useState } from "react";
import Navbar from '../../layout/navbar';
import Footer from '../../layout/Footer';
import Description from '../../layout/Description';
import './style.css';
import SearchBar from '../../layout/searchbar';
import Card from '../../layout/Card';
function Idosos() {
  const valor = {
    "conteudo" : [
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Jogos de mesa", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
      {"tipo" : "Aplicativo", "nome" : "Lorem Ipsum Idoso", "descricao" : "Lorem Ipsum Idoso", "categoria" : "Lorem Ipsum Idoso", "link": "https://www.figma.com/file/pzavXrX9UcVsfmgC7VEGCz/Prot%C3%B3tipo-DCExt-IV?node-id=119-2&t=dx9CAnon95oZZOvG-0", "image": "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png"},
    ]
  }

  const [category, setCategory] = useState("all");

  const valor2 = valor.conteudo

    const props = {
        description: "Idosos",
        imageUrl: "https://cdn.discordapp.com/attachments/440326168491720705/1088971906880901141/image.png",
        imageAltText: "Idosos",
        description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum maximus risus id efficitur. Quisque vel malesuada nibh. Aliquam sed tellus sem. Duis tellus nisi, vehicula eget fermentum in, dignissim id massa. Etiam tincidunt nunc leo, et lobortis sem cursus non. Duis ac aliquet elit, at posuere mauris. Donec ut euismod urna. Proin pretium ultricies porttitor. Aenean libero tortor, consequat sed congue sit amet, interdum vel dolor. Suspendisse potenti.",
        circleColor: "blue"
      };
  return (
    <body id="page3">
      <Navbar />
      <Description {...props}/>
      <SearchBar/>
      <div className="card-filter">
        <div>
      { valor2?.length ? valor2.map((data, index) =>
        <Card category={data.categoria} description={data.descricao} title={data.nome} image={data.image} link={data.link}/>
      ) : <div></div>
      }
        </div>
      <div className="filter">
          <span>Categoria:</span>
          <select name="" value={category} onChange={ev => setCategory(ev.target.value)}>
            <option value="all">Todos</option>
            <option value="categoria1">Categoria 1</option>
            <option value="categoria2">Categoria 2</option>
            <option value="categoria3">Categoria 3</option>
          </select>
          <button>Filtrar</button>
      </div>
      </div>
      <Footer />
    </body>
  );
} 
export default Idosos;