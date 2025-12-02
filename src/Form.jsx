import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    telefone: "",
    instagram: "",
    github: "",
    pensamento: "",
    probleminha: "",
    serie: "",
    jogo: "",
    musica: "",
    genero: "",
    habilidade: "",
    poder: "",
    time: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "telefone") {
      let num = value.replace(/\D/g, "");
      if (num.length > 11) num = num.slice(0, 11);
      value = num
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Dados prontos para enviar à API! (POST)");
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome</label>
        <input name="nome" placeholder="Seu nome completo" onChange={handleChange} />
      </div>

      <div>
        <label>Idade</label>
        <input name="idade" placeholder="Sua idade" type="number" onChange={handleChange} />
      </div>

      <div>
        <label>Telefone</label>
        <input name="telefone" placeholder="(00) 00000-0000" onChange={handleChange} />
      </div>

      <div>
        <label>Instagram</label>
        <input name="instagram" placeholder="@seuuser" onChange={handleChange} />
      </div>

      <div>
        <label>GitHub</label>
        <input name="github" placeholder="github.com/seuuser" onChange={handleChange} />
      </div>

      <div className="full">
        <label>Pensamento</label>
        <textarea name="pensamento" placeholder="Escreva algo..." onChange={handleChange} />
      </div>

      <div>
        <label>‘Probleminha’</label>
        <input name="probleminha" placeholder="Seu probleminha " onChange={handleChange} />
      </div>

      <div>
        <label>Última série assistida</label>
        <input name="serie" placeholder="Nome da série" onChange={handleChange} />
      </div>

      <div>
        <label>Último jogo jogado</label>
        <input name="jogo" placeholder="Nome do jogo" onChange={handleChange} />
      </div>

      <div>
        <label>Música favorita</label>
        <input name="musica" placeholder="Nome da música" onChange={handleChange} />
      </div>

      <div>
        <label>Gênero</label>
        <select name="genero" onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Feminino">Feminino</option>
          <option value="Masculino">Masculino</option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div>
        <label>Habilidade especial</label>
        <input name="habilidade" placeholder="Sua habilidade secreta" onChange={handleChange} />
      </div>

      <div>
        <label>Poder especial</label>
        <input name="poder" placeholder="Seu poder especial" onChange={handleChange} />
      </div>

      <div>
        <label>Time que torce</label>
        <input name="time" placeholder="Seu time" onChange={handleChange} />
      </div>

      <button type="submit">Enviar Informações </button>
    </form>
  );
}
