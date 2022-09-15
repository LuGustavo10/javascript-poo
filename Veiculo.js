class Veiculo{
    #marca
    #modelo
    #quantidaderodas
    #flex
    constructor(marca, modelo, quantidaderodas, flex){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#quantidaderodas = quantidaderodas;
        this.#flex = Boolean(flex);
    }
    get marca(){
        return this.#marca;
    }
    set marca(marca){
        this.#marca = marca;
    }
    get modelo(){
        return this.#modelo;
    }
    set modelo(modelo){
        this.#modelo = modelo;
    }
    get quantidaderodas(){
        return this.#quantidaderodas;
    }
    set quantidaderodas(quantidaderodas){
        this.#quantidaderodas = quantidaderodas;
    }
    get flex(){
        return this.#flex;
    }
    set flex(flex){
        this.#flex = Boolean(flex);
    }
}