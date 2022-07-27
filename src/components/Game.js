import React, { useState } from 'react'
import { CardContainer } from './CardContainer'
import { Header } from './Header'
import Modal from './Modal'

export const Game = () => {
  const [score, setScore] = useState(0)  
  const [highScore, sethighScore] = useState(0)  
  const [memoryCard, setMemoryCard] = useState([])
  const [isOpen, setIsOpen] = useState(true)

  const handleCard = (cardName) => {
    setMemoryCard((prevMem => [...prevMem, cardName]))
  }

  const handleGame = (cardName) => {
    if(!memoryCard.includes(cardName)){
        handleCard(cardName)
        setScore(score + 1)
    }else{
        if(score > highScore){
            sethighScore(score)
        }
        setMemoryCard([])
        setScore(0)
    }
  }  

  return (
    <div>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        <Header score={score} highScore={highScore}/>
        <CardContainer handleGame={handleGame} score={score} highScore={highScore} />
    </div>
  )
}
