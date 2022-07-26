import React, { useState } from 'react'
import { CardContainer } from './CardContainer'
import { Header } from './Header'

export const Game = () => {
  const [score, setScore] = useState(0)  
  const [highScore, sethighScore] = useState(0)  
  const [memoryCard, setMemoryCard] = useState([])

  const handleCard = (cardName) => {
    setMemoryCard((prevMem => [...prevMem, cardName]))
  }

  const handleGame = (cardName) => {
    if(!memoryCard.includes(cardName)){
        handleCard(cardName)
        setScore(score + 1)
    }else{
        sethighScore(score)
        setMemoryCard([])
        setScore(0)
    }
  }  

  return (
    <div>
        <Header score={score} highScore={highScore}/>
        <CardContainer handleGame={handleGame} score={score} highScore={highScore} />
    </div>
  )
}
