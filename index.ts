import { Card, CardColor, CardValue } from "./components/card"

import './style.scss'

const container = document.getElementById('playzone')

const card = new Card('playzone', CardColor.BLUE, CardValue.EIGHT);
card.render()