import React, { useEffect, useState } from "react";
import Navbar from '../../layout/navbar';
import Button from '../../layout/Button';
import Footer from '../../layout/Footer';
import Description from '../../layout/Description';
import './style.css';
import SearchBar from '../../layout/searchbar';
import Card from '../../layout/Card';
import Axios from "axios";
function Autismo() {

  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState("all");

  const filteredCards = cards.filter(card => card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  card.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getByCategory = async() => {
    try {
        const card = await Axios.get(`http://localhost:3001/autism/get/category/${encodeURI(category)}`, {
        });
        setCards(card.data);
    } catch (error) {
        console.log(error)
    }
  }

  const getCards = async() => {
    Axios.get(`http://localhost:3001/autism/get`)
      .then((response) => {
        setCards(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

const handleFilter = () => {
    if (category == "all") {
        getCards();
    } else {
        getByCategory();
    }
}

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

  useEffect(() => {
    getCards();
  }, []);

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
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div className="card-filter">
        <div>
            {Array.isArray(filteredCards) &&
            filteredCards.map((cards) => (
              <Card
                category={cards.category}
                description={cards.description}
                link={cards.link}
                name={cards.name}
                image={cards.image}
              />
            ))}
        </div>
      <div className="filter">
          <span>Categoria:</span>
          <select value={category} onChange={ev => setCategory(ev.target.value)}>
            <option value="all">Todos</option>
            <option value="comunicação">Comunicação</option>
            <option value="foco">Foco</option>
            <option value="habilidade cognitiva">Habilidade Cognitiva</option>
            <option value="pensamento lógico">Pensamento Lógico</option>
            <option value="aprendizagem">Aprendizagem</option>
            <option value="imaginação">Imaginação</option>
            <option value="coordenação motora">Coordenação Motora</option>
          </select>
          <Button name={"Filtrar"} onClick={handleFilter}></Button>
      </div>
      </div>
      <Footer />
    </body>
  );
} 
export default Autismo;