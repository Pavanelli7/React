import React from "react";

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  })

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setSuccess(true);
        setForm({
          nome: '',
          email: '',
          senha: '',
          cep: '',
          rua: '',
          numero: '',
          bairro: '',
          cidade: '',
          estado: '',
        });
      })
      .catch(error => {
        setLoading(false);
        setError(error.message);
      })
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />
        {form.nome}

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {form.email}

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={form.senha}
          onChange={handleChange}
        />
        {form.senha}

        <label htmlFor="cep">CEP</label>
        <input
          type="text"
          id="cep"
          name="cep"
          value={form.cep}
          onChange={handleChange}
        />
        {form.cep}

        <label htmlFor="rua">Rua</label>
        <input
          type="text"
          id="rua"
          name="rua"
          value={form.rua}
          onChange={handleChange}
        />
        {form.rua}

        <label htmlFor="numero">Numero</label>
        <input
          type="text"
          id="numero"
          name="numero"
          value={form.numero}
          onChange={handleChange}
        />
        {form.numero}

        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          id="bairro"
          name="bairro"
          value={form.bairro}
          onChange={handleChange}
        />
        {form.bairro}

        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          value={form.cidade}
          onChange={handleChange}
        />
        {form.cidade}

        <label htmlFor="estado">Estado</label>
        <input
          type="text"
          id="estado"
          name="estado"
          value={form.estado}
          onChange={handleChange}
        />
        {form.estado}
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando' : 'Enviar'}
        </button>

        {success && <p>Formulário enviado com sucesso</p>}
        {error && <p>Erro ao enviar o formulário: {error}</p>}
      </form>
    </>
  );
};

export default App
