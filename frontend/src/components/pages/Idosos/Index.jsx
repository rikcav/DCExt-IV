import React from 'react';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import Description from '../../layout/Description';
import './Style.css';
import SearchBar from '../../layout/Searchbar';
function Idosos() {
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
      <Footer />
    </body>
  );
} 
export default Idosos;