import { Card, CardColor, CardValue } from "./components/card"

import './style.scss'

for(let i = 0; i>=12; i++) {
  const card1 = new Card('playzone', CardColor.BLUE, CardValue.ONE);
  card1.render()
}