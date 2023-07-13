import React from "react";
import Input from "./Form/Input";
import Select from "./Form/Select";
import Radio from "./Form/Radio";
import Checkbox from "./Form/Checkbox";

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('Vermelho');
  const [frutas, setFrutas] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <h2>termos</h2>
      <Checkbox options={['Li e aceito os termos.']} value={termos} setValue={setTermos} />
      <h2>Checkbox</h2>
      <Checkbox options={['JavaScript', 'PHP', 'Ruby']} value={linguagens} setValue={setLinguagens} />
      <h2>Frutas</h2>
      <Radio options={['Maçã', 'Uva']} value={frutas} setValue={setFrutas} />
      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <Select options={['smartphone', 'Tablet Verde']} value={produto} setValue={setProduto} />
      <Input id="nome" label='Nome' value={nome} setValue={setNome} />
      <Input id="email" label="E-mail" value={email} setValue={setEmail} required />
      <button>Enviar</button>
    </form>
  );
};


export default App
