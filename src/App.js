import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaCategorias from "./components/ListaCategorias/ListaCategorias";
import "./assets/App.css";
import "./assets/index.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
    };
  }

  deletarNota(indice) {
    let novoArray = this.state.notas;
    novoArray.splice(indice, 1);
    return this.setState({
      notas: novoArray,
    });
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className='conteudo-principal'>
          
          
          <ListaDeNotas
            deletarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
