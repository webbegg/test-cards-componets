import gsab from 'gsap'

import './style.scss';


export enum CardColor {
  RED = "RED",
  BLUE = "BLUE",
  GREEN = "GREEN",
  YELLOW = "YELLOW",
}

export enum CardValue {
  // numbers

  ZERO = "0",
  ONE = "1",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  SEVEN = "7",
  EIGHT = "8",
  NINE = "9",

  // special
  DRAW_TWO = "DRAW_TWO",
  REVERSE = "REVERSE",
  SKIP = "SKIP",
  WILD = "WILD",
  WILD_DRAW_FOUR = "WILD_DRAW_FOUR",
}

const getRand = (min,max) => {
  return Math.random() * (max - min) + min;
}

export class Card {
  containerDiv: HTMLElement
  cardDiv: HTMLElement
  imageBackground: string
  zIndex: number = 0


  constructor(
    private container: string,
    private color: CardColor,
    private value: CardValue
  ) {

    this.containerDiv = document.getElementById(container);
    if(!this.containerDiv) throw new Error(`'No se encontró el elemento padre '${container}'`)

    // container properties
    this.cardDiv = document.createElement('div');
    this.cardDiv.className = 'card'

    const dropzone = document.getElementById('dropzone')

    this.cardDiv.addEventListener('click', (event) => {
      this.cardDiv.style.position = 'fixed'
      const bcr = this.cardDiv.getBoundingClientRect()

      console.log(this.cardDiv.style.zIndex)

      gsab.to(this.cardDiv, .3, {
        x: 0,
        y: (bcr.top - 90) * -1,
        rotate: getRand(-75, 75)
      })
    })

    // @TODO check properties values
  }

  getCardColor():string {
    switch(this.color) {
      case CardColor.RED: 
        return 'card__red'  
        break;
      case CardColor.BLUE: 
        return 'card__blue'  
        break;
      case CardColor.GREEN: 
        return 'card__green'  
        break;
      case CardColor.YELLOW: 
        return 'card__yellow'  
        break;
    }
  }

  render() {
    this.cardDiv.classList.add(this.getCardColor());

    const baseCard = document.getElementById('runox-card').cloneNode(true)
    this.cardDiv.appendChild(baseCard)
 
    const valueContainer = document.createElement('div');
    valueContainer.className = 'card__value';
    valueContainer.append(this.value)

    this.cardDiv.appendChild(valueContainer);

    this.containerDiv.appendChild(this.cardDiv)
  }
}