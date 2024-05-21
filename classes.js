class Personagem{

    _vida = 1;
    vidaMaxima = 0;
    ataque = 0;
    defesa = 0;

    constructor (nome){
        this.nome = nome;
    }

    get vida(){
        return this._vida
    }
    set vida(novaVida){
        this._vida = novaVida <0?0: novaVida
    }
}

class Guerreiro extends Personagem{

    constructor(nome){
        super(nome);
        this.vida = 80;
        this.vidaMaxima = this.vida;
        this.ataque = 10;
        this.defesa = 8;
    }
    
}
class Mago extends Personagem{

    constructor(nome){
        super(nome);
        this.vida = 50;
        this.vidaMaxima = this.vida;
        this.ataque = 15;
        this.defesa = 4;
    }
}
class MonstroPequeno extends Personagem{

    constructor(){
        super('Monstrinho');
        this.vida = 40;
        this.vidaMaxima = this.vida;
        this.ataque = 7;
        this.defesa = 5;
    }
}
class MonstroGrande extends Personagem{

    constructor(){
        super('Monstrão');
        this.vida = 150;
        this.vidaMaxima = this.vida;
        this.ataque = 12;
        this.defesa = 6;
    }
}

class Campo{

    constructor(lutador1, lutador2, lutador1EL, lutador2EL, logObject){
        this.lutador1=lutador1;
        this.lutador2=lutador2;
        this.lutador1EL=lutador1EL;
        this.lutador2EL=lutador2EL;
        this.log = logObject;
    }


start(){
    this.update();

    this.lutador1EL.querySelector('.attackButton').addEventListener('click', () => this.atacar(this.lutador1, this.lutador2));
    this.lutador2EL.querySelector('.attackButton').addEventListener('click', () => this.atacar(this.lutador2, this.lutador1));
}

update(){
    this.lutador1EL.querySelector('.name').innerHTML = `${this.lutador1.nome} - ${this.lutador1.vida}HP `;

    let lut1Pct = (this.lutador1.vida / this.lutador1.vidaMaxima)*100;
    this.lutador1EL.querySelector('.bar').style.width = `${lut1Pct}%`

    this.lutador2EL.querySelector('.name').innerHTML = `${this.lutador2.nome} - ${this.lutador2.vida}HP`;
    let lut2Pct = (this.lutador2.vida / this.lutador2.vidaMaxima)*100;
    this.lutador2EL.querySelector('.bar').style.width = `${lut2Pct}%`
}

atacar(atacante, atacado){

    if(atacante.vida <=0 || atacado.vida <=0){
        this.log.addMessage ('ja esta morto');
        return;
    }

    let fatorAtaque = (Math.random()*2).toFixed(2);
    
    let fatorDefesa = (Math.random()*2).toFixed(2);
    
    let realAtaque = atacante.ataque * fatorAtaque;
    let realDefesa = atacado.defesa * fatorDefesa;
    
    if(realAtaque > realDefesa){
        atacado.vida -= realAtaque;
        this.log.addMessage (`${atacante.nome} causou ${realAtaque} de dano em ${atacado.nome}`)
    }
    else{
        this.log.addMessage (`!!${atacado.nome} defendeu o ataque!!` )
    }

    this.update();
}

}

class Log {
    list = [];

    constructor(listEl){
        this.listEl = listEl;
    }

    addMessage(msg){
        this.list.push(msg);
        this.render();
    }

    render() {
        this.listEl.innerHTML = '';

        for (let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}