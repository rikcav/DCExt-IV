import React, { useEffect, useState } from "react";
import Navbar from '../../layout/navbar';
import Footer from '../../layout/Footer';
import Description from '../../layout/Description';
import Button from '../../layout/Button';
import './style.css';
import SearchBar from '../../layout/searchbar';
import Card from '../../layout/Card';
import Axios from "axios";

function Idosos() {
  
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState("all");

  const getByCategory = async() => {
    try {
        const card = await Axios.get(`http://localhost:3001/elder/get/category/${encodeURI(category)}`, {
        });
        setCards(card.data);
    } catch (error) {
        console.log(error)
    }
  }

  const getCards = async() => {
    Axios.get(`http://localhost:3001/elder/get`)
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

  const filteredCards = cards.filter(card => card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  card.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    console.log("Fetching cards...");
    Axios.get(`http://localhost:3001/elder/get`)
      .then((response) => {
        setCards(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div className="card-filter">
        <div>
      {Array.isArray(filteredCards) &&
            filteredCards.map((cards) => (
              <Card
                category={cards.category}
                description={cards.description}
                type={cards.type}
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
          <option value="Comunicação">Comunicação</option>
          <option value="Foco">Foco</option>
          <option value="Habilidades Cognitivas">Habilidades Cognitivas</option>
          <option value="Pensamento Lógico">Pensamento Lógico</option>
          <option value="Aprendizagem">Aprendizagem</option>
          <option value="Imaginação">Imaginação</option>
          <option value="Coordenação Motora">Coordenação Motora</option>
          <option value="Atenção">Atenção</option>
          <option value="Concentração">Concentração</option>
          <option value="Cores">Cores</option>
          <option value="Criatividade">Criatividade</option>
          <option value="Dedução">Dedução</option>
          <option value="Discriminação Visual">Discriminação Visual</option>
          <option value="Emoções Lúdicas">Emoções Lúdicas</option>
          <option value="Expressões de Sentimento">Expressões de Sentimento</option>
          <option value="Habilidades de Comunicação">Habilidades de Comunicação</option>
          <option value="Habilidadaes de Lógica">Habilidadaes de Lógica</option>
          <option value="Habilidades Motoras">Habilidades Motoras</option>
          <option value="Habilidades Sociais">Habilidades Sociais</option>
          <option value="Habilidades Sociais e Emocionais">Habilidades Sociais e Emocionais</option>
          <option value="Inteligência">Inteligência</option>
          <option value="Interação Social">Interação Social</option>
          <option value="Luzes">Luzes</option>
          <option value="Músicas">Músicas</option>
          <option value="Pensamento Estatégicos">Pensamento Estatégicos</option>
          <option value="Sons">Sons</option>
          <option value="Tranquilizar">Tranquilizar</option>
          </select>
          <Button name={"Filtrar"} onClick={handleFilter}></Button>
      </div>
      </div>
      <Footer />
    </body>
  );
} 
export default Idosos;