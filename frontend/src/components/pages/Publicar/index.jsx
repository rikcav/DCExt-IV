import React, { useState } from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/Footer";
import "./style.css";

function Publicar() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    category: [],
    link: "",
    selected: "",
  });

  const categories = ["Comunicação", "Foco", "Habilidades cognitivas", "Pensamento lógico", "Aprendizagem", "Imaginação", "Coordenação motora"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      const options = e.target.options;
      const selectedCategories = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedCategories.push(options[i].value);
        }
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        category: selectedCategories,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Aqui você pode enviar os dados do formulário para a API ou fazer algo com eles
    setFormData({
      name: "",
      type: "",
      description: "",
      category: [],
      link: "",
      selected: "",
    });
  };

  const handleCategoryChange = (e) => {
    const options = e.target.options;
    const values = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: values,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="formulario">
      <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="type">Tipo:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Categoria:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Selecione uma opção</option>
          <option value="comunicacao">Comunicação</option>
          <option value="foco">Foco</option>
          <option value="habilidades_cognitivas">Habilidades cognitivas</option>
          <option value="pensamento_logico">Pensamento lógico</option>
          <option value="aprendizagem">Aprendizagem</option>
          <option value="imaginacao">Imaginação</option>
          <option value="coordenacao_motora">Coordenação motora</option>
        </select>
      </div>
      <div>
        <label htmlFor="link">Link:</label>
        <input
          type="url"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="selected">Selecionar:</label>
        <select
          id="selected"
          name="selected"
          value={formData.selected}
          onChange={handleChange}
          required
        >
          <option value="">Selecione uma opção</option>
          <option value="autismo">Autismo</option>
          <option value="idosos">Idosos</option>
          <option value="TDAH">TDAH</option>
          <option value="PCD">PCD</option>
        </select>
      </div>
      <div>
        <button type="submit">Publicar</button>
      </div>
    </form>
      </div>
      <Footer />
    </div>
  );
}

export default Publicar;
