import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSvg } from "../../assets/images/clear-black.svg";
class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.deletarNota(indice);
  }
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
        <DeleteSvg onClick={this.apagar.bind(this)}></DeleteSvg>
      </section>
    );
  }
}

export default CardNota;
