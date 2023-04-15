import React, { useEffect, useState } from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/Footer";
import Description from "../../layout/Description";
import "./style.css";
import SearchBar from "../../layout/searchbar";
import Card from "../../layout/Card";
import Axios from "axios";
function PCD() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const filteredCards = cards.filter(card => card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.category.toLowerCase().includes(searchTerm.toLowerCase())
  ) 
  
  useEffect(() => {
    console.log("Fetching cards...");
    Axios.get(`http://localhost:3001/disabled/get`)
      .then((response) => {
        setCards(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const props = {
    description: "PCD",
    imageUrl:
      "https://cdn.discordapp.com/attachments/440326168491720705/1088971888388231270/image.png",
    imageAltText: "PCD",
    description2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum maximus risus id efficitur. Quisque vel malesuada nibh. Aliquam sed tellus sem. Duis tellus nisi, vehicula eget fermentum in, dignissim id massa. Etiam tincidunt nunc leo, et lobortis sem cursus non. Duis ac aliquet elit, at posuere mauris. Donec ut euismod urna. Proin pretium ultricies porttitor. Aenean libero tortor, consequat sed congue sit amet, interdum vel dolor. Suspendisse potenti.",
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
                link={cards.link}
                name={cards.name}
                image={cards.image}
              />
            ))}
        </div>
        <div className="filter">
          <span>Categoria:</span>
          <div className="filter-option">
            <input type="radio" value=""/>
            <p>Todos</p>
          </div>
          <div className="filter-option">
            <input type="radio" value=""/>
            <p>Todos</p>
          </div>
          <div className="filter-option">
            <input type="radio" value=""/>
            <p>Todos</p>
          </div>
          <div className="filter-option">
            <input type="radio" value=""/>
            <p>Todos</p>
          </div>
          <button>Filtrar</button>
        </div>
      </div>
      <Footer />
    </body>
  );
}
export default PCD;
