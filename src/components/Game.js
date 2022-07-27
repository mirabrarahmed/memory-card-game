import React, { useState } from 'react'
import { CardContainer } from './CardContainer'
import { Header } from './Header'
import Modal from './Modal'

export const Game = () => {
  const [score, setScore] = useState(0)  
  const [highScore, sethighScore] = useState(0)  
  const [memoryCard, setMemoryCard] = useState([])
  const [isOpen, setIsOpen] = useState(true)
  const [isOver, setIsOver] = useState(false)
  const [overScore, setoverScore] = useState(0)

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
        setoverScore(score)
        setMemoryCard([])
        setIsOver(true)
        setScore(0)
    }
  }  

  return (
    <div className='main'>
        {isOpen && <Modal 
                      setIsOpen={setIsOpen}
                      title="Memory Card Game"
                      description="Pick a different picture everytime to win and test your memory. Be careful, choosing the same picture twice will lose you the game."
                      modbtn="Close"  />}
        {isOver && <Modal 
                      setIsOpen={setIsOver}
                      title="Game Over"
                      description="You picked the same picture twice"
                      modbtn="Close" 
                      score={overScore}
                      highScore={highScore} />}
        <Header score={score} highScore={highScore}/>
        <CardContainer handleGame={handleGame} score={score} highScore={highScore} />
    </div>
  )
}
