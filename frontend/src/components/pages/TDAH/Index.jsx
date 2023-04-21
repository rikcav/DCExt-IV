import React, { useEffect, useState } from "react";
import Navbar from '../../layout/navbar.jsx';
import Footer from '../../layout/Footer';
import Button from '../../layout/Button';
import Description from '../../layout/Description';
import './style.css';
import SearchBar from '../../layout/searchbar';
import Axios from "axios";
import Card from '../../layout/Card';
function TDAH() {

  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState("all");

  const getByCategory = async() => {
    try {
        const card = await Axios.get(`http://localhost:3001/adhd/get/category/${encodeURI(category)}`, {
        });
        setCards(card.data);
    } catch (error) {
        console.log(error)
    }
  }

  const getCards = async() => {
    Axios.get(`http://localhost:3001/adhd/get`)
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
    getCards();
  }, []);


  const props = {
    description: "TDAH",
    imageUrl: "https://cdn.discordapp.com/attachments/440326168491720705/1095551652418826260/Infito.png",
    imageAltText: "TDAH",
    description2: "O TDAH é um transtorno neurobiológico de causas genéticas, caracterizado por sintomas como falta de atenção, inquietação e impulsividade. Visando ajudar essas pessoas desenvolvemos uma ferramenta versatil onde apresenta jogos que auxiliam algumas habilidades importantes para o dia a dia. Esses jogos consistem em jogos virtuais e fisicos, que permite o usuario utilizar  da maneira que se sinta confortavel. Essa ferramenta, funciona como um complementar a outras formas de tratamento, como terapia comportamental e medicação, trabalhando no aumento da concentração, no desenvolvimento das habilidades cognitivas, redução do estresse, melhoria na autoestima, estímulo à interação social.",
    circleColor: "red"
  };
  
  return (
    <body id="page5">
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
          <select name="" value={category} onChange={ev => setCategory(ev.target.value)}>
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
export default TDAH;