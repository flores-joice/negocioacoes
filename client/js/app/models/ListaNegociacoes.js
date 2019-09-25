class ListaNegociacoes {

  constructor(){

    //(boas práticas) underline indica que nao pode ser modificado
    this._negociacoes = []
  }

  //o metodo adiciona é o unico que devera modificar o objeto _negocioacoes
  adiciona(negociacao) {

    //push adiciona um novo elemento ao array _negociacoes
    this._negociacoes.push(negociacao);
  }

  //metodo lista a negociocoes existentes
  get negociacoes() {

    return [].concat(this._negociacoes);
  }
}