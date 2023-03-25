import React from 'react';
import './Style.css';

function CircleRow() {
  return (
    <div className="circle-row">
      <a href="/pcd" className='circle-container'>
        <div className="circle red">
          <img src='https://cdn.discordapp.com/attachments/440326168491720705/1088971888388231270/image.png' alt="Deficiência Física"/>
        </div>
        <p className="description">PCD</p>
      </a>

      <a href="/idosos" className='circle-container'>
        <div className="circle blue">
          <img src='https://cdn.discordapp.com/attachments/440326168491720705/1088978682082775193/image.png' alt="Idosos"/>
        </div>
        <p className="description">Idosos</p>
      </a>

      <a href="/autismo" className='circle-container'>
        <div className="circle blue">
          <img src='https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png' alt="Autismo"/>
        </div>
        <p className="description">Autismo</p>
      </a>

      <a href="/tdah" className='circle-container'>
        <div className="circle red last">
          <img src='https://cdn.discordapp.com/attachments/440326168491720705/1088974668494540830/image-removebg-preview_4.png' alt="TDAH"/>
        </div>
        <p className="description">TDAH</p>
      </a>
    </div>
  );
}

export default CircleRow;