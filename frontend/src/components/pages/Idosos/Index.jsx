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
export default Idosos;