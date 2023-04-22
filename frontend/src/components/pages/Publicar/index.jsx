import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/Footer";
import "./style.css";

const animatedComponents = makeAnimated();

const options = [
  { value: "Comunicação", label: "Comunicação" },
  { value: "Foco", label: "Foco" },
  { value: "Habilidades Cognitivas", label: "Habilidades Cognitivas" },
  { value: "Pensamento Lógico", label: "Pensamento Lógico" },
  { value: "Aprendizagem", label: "Aprendizagem" },
  { value: "Imaginação", label: "Imaginação" },
  { value: "Coordenação Motora", label: "Coordenação Motora" },
];

function Publicar() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    category: [],
    link: "",
    selected: "",
  });

  
  const handleChange = (selectedOption) => {
    const selectedValues = selectedOption
      ? selectedOption.map((option) => option.value)
      : [];
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: selectedValues,
    }));
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
          <div   className="category-container">
            <label htmlFor="category">Categoria:</label>
            <Select

              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={options}
              onChange={handleChange}
              value={options.filter((option) =>
                formData.category.includes(option.value)
              )}
              required
              defaultValue={[options[0], options[2]]}
              className="category"
              isClearable={true}
              isSearchable={true}
              isDisabled={false}
              isLoading={false}
              isRtl={false}
            />
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
