import React from 'react';
import './style.css';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <p>DCExT-iv</p>
      </div>
      <p className='body'>Lorem ipsum dolor sit amet consectetur. Mauris posuere morbi condimentum purus donec pharetra. In tincidunt metus lacinia venenatis risus egestas. Duis tincidunt sit pharetra ac egestas. Nibh lectus sit sit gravida. Netus ultrices maecenas quam morbi est fusce.
Accumsan eget consequat tempus augue. Egestas eu etiam sit at. At pharetra orci lorem volutpat quis integer adipiscing. Tincidunt cursus placerat mus in porttitor. At vitae leo viverra cras pellentesque. Mi vitae at rhoncus adipiscing laoreet feugiat. Elit lacinia blandit molestie ut posuere. Blandit ultrices pharetra ullamcorper mattis. Placerat tellus arcu ac integer donec feugiat enim. Hendrerit elit nunc tellus felis tincidunt a platea molestie aliquam. Ut gravida enim senectus urna felis. Tempor ultrices condimentum cras eget libero. Pellentesque morbi tincidunt odio donec faucibus. Ultrices hendrerit nisl eu sapien amet bibendum euismod quis tellus.
<div class="circle-row">
          <a href="/pcd" className='circle-container'>
            <div class="circle red">
              <img src='https://cdn.discordapp.com/attachments/440326168491720705/1088971888388231270/image.png' alt="Deficiência Física"/>
            </div>
            <p class="description">PCD</p>
          </a>

          <a href="/idosos" className='circle-container'>
            <div class="circle blue">
              <img src='https://cdn.discordapp.com/attachments/440326168491720705/1088978682082775193/image.png' alt="Idosos"/>
            </div>
            <p class="description">Idosos</p>
          </a>

          <a href="/autismo" className='circle-container'>
            <div class="circle blue">
              <img src='https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png' alt="Autismo"/>
            </div>
            <p class="description">Autismo</p>
          </a>

          <a href="/tdah" className='circle-container'>
            <div class="circle red last">
              <img src='https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png' alt="TDAH"/>
            </div>
            <p class="description">TDAH</p>
          </a>

        </div>
        
      </p>
      <footer className="footer">
        <img
          src="https://cdn.discordapp.com/attachments/440326168491720705/1088685664796680202/image.png"
          alt="Login App"
        />
      </footer>
    </div>
  );
}

export default Navbar;
