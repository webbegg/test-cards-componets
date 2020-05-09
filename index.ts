import { Card, CardColor, CardValue } from "./components/card"

import './style.scss'

const card1 = new Card('playzone', CardColor.BLUE, CardValue.ONE);
card1.render()

const card2 = new Card('playzone', CardColor.GREEN, CardValue.TWO);
card2.render()

const card3 = new Card('playzone', CardColor.RED, CardValue.THREE);
card3.render()

const card4 = new Card('playzone', CardColor.YELLOW, CardValue.FOUR);
card4.render()
