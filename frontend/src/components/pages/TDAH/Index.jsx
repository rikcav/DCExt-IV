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
    description2: "O TDAH é um transtorno neurobiológico de causas genéticas, caracterizado por sintomas como falta de atenção, inquietação e impulsividade. Visando ajudar essas pessoas, desenvolvemos uma ferramenta versatil no qual apresenta jogos que auxiliam algumas habilidades importantes para o dia a dia. Essas aplicações consistem em jogos virtuais e fisicos, que permitem o usuario utiliza-los da maneira que se sinta confortaveis. Essa ferramenta funciona como um complementar de outras formas de tratamento, como terapia comportamental e medicação, trabalhando no aumento da concentração, no desenvolvimento das habilidades cognitivas, na redução do estresse, na melhoria da autoestima e no estímulo à interação social.",
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
                type={cards.type}
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
            <option value="Comunicação">Comunicação</option>
            <option value="Foco">Foco</option>
            <option value="Habilidade Cognitivas">Habilidade Cognitiva</option>
            <option value="Pensamento Lógico">Pensamento Lógico</option>
            <option value="Aprendizagem">Aprendizagem</option>
            <option value="Imaginação">Imaginação</option>
            <option value="Coordenação Motora">Coordenação Motora</option>
          </select>
          <Button name={"Filtrar"} onClick={handleFilter}></Button>
      </div>
      </div>
      <Footer />
    </body>
  );
} 
export default TDAH;