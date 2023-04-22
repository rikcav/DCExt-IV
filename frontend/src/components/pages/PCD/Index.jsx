import React, { useEffect, useState } from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/Footer";
import Button from '../../layout/Button';
import Description from "../../layout/Description";
import "./style.css";
import SearchBar from "../../layout/searchbar";
import Card from "../../layout/Card";
import Axios from "axios";
function PCD() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState("all");

  const getByCategory = async() => {
    try {
        const card = await Axios.get(`http://localhost:3001/disabled/get/category/${encodeURI(category)}`, {
        });
        setCards(card.data);
    } catch (error) {
        console.log(error)
    }
  }

  const getCards = async() => {
    Axios.get(`http://localhost:3001/disabled/get`)
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
    description: "PCD",
    imageUrl:
      "https://cdn.discordapp.com/attachments/440326168491720705/1088971888388231270/image.png",
    imageAltText: "PCD",
    description2:
      "Este é um projeto voltado ao público com  eficiência física, que visa promover a inclusão e a acessibilidade social. Nossa ideia central é mapear e avaliar locais que se propõem a oferecer acessibilidade para pessoas com deficiência física e de locomoção. Dessa forma, os indivíduos com deficiência poderão avaliar previamente a qualidade de um local e evitar situações de desconforto ou necessidade imediata.",
    circleColor: "red",
  };
  return (
    <body id="page4">
      <Navbar />
      <Description {...props} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div className="card-filter">
        <div className="conter">
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
export default PCD;
