import runoxCard from '../../assets/card.svg'

import './style.scss';

const backgroundImage = 'Cjxzdmcgdmlld0JveD0iMCAwIDIwOCAzMDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNzAuNjY3IDBIMzcuMzMzQzE4LjkyNCAwIDQgMTQuOTI0IDQgMzMuMzMzdjIzMy4zMzRDNCAyODUuMDc2IDE4LjkyNCAzMDAgMzcuMzMzIDMwMGgxMzMuMzM0QzE4OS4wNzYgMzAwIDIwNCAyODUuMDc2IDIwNCAyNjYuNjY3VjMzLjMzM0MyMDQgMTQuOTI0IDE4OS4wNzYgMCAxNzAuNjY3IDB6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNMTcwLjY2NyAxNi42NjdIMzcuMzM0Yy05LjIwNSAwLTE2LjY2NyA3LjQ2Mi0xNi42NjcgMTYuNjY2djIzMy4zMzRjMCA5LjIwNCA3LjQ2MiAxNi42NjYgMTYuNjY3IDE2LjY2NmgxMzMuMzMzYzkuMjA1IDAgMTYuNjY3LTcuNDYyIDE2LjY2Ny0xNi42NjZWMzMuMzMzYzAtOS4yMDQtNy40NjItMTYuNjY2LTE2LjY2Ny0xNi42NjZ6IiBmaWxsPSJjdXJyZW50Y29sb3IiLz48cGF0aCBkPSJNMTUzLjk5OSA2Ni42NjZDODAuMzYxIDY2LjY2NiAyMC42NjYgMTI2LjM2MiAyMC42NjYgMjAwYzAgMTguNDA5IDE0LjkyNCAzMy4zMzMgMzMuMzMzIDMzLjMzMyA3My42MzggMCAxMzMuMzM0LTU5LjY5NSAxMzMuMzM0LTEzMy4zMzMgMC0xOC40MS0xNC45MjQtMzMuMzM0LTMzLjMzNC0zMy4zMzR6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTE1My45OTkgNjYuNjY2Yy01NS45NCAwLTEwMy43NTIgMzQuNDkxLTEyMy41NDEgODMuMzM0LTYuMjYxIDE1LjQ1MS05Ljc5MiAzMi4zMDMtOS43OTIgNTAgMCAxOC40MDkgMTQuOTI0IDMzLjMzMyAzMy4zMzMgMzMuMzMzIDU1Ljk0MSAwIDEwMy43NTItMzQuNDkxIDEyMy41NDItODMuMzMzIDYuMjYxLTE1LjQ1MiA5Ljc5Mi0zMi4zMDMgOS43OTItNTAgMC0xOC40MS0xNC45MjQtMzMuMzM0LTMzLjMzNC0zMy4zMzR6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCIvPjwvc3ZnPg=='

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

export class Card {
  containerDiv: HTMLElement
  cardDiv: HTMLElement
  imageBackground: string

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
    
    const background = document.createElement('img')
    // background.src = `data:image/svg+xml;base64,${backgroundImage}`
    background.src = runoxCard
    background.className = 'card__image'
    this.cardDiv.appendChild(background)

    const valueContainer = document.createElement('div');
    valueContainer.className = 'card__value';
    valueContainer.append(this.value)

    this.cardDiv.appendChild(valueContainer);

    this.containerDiv.appendChild(this.cardDiv)
  }
}