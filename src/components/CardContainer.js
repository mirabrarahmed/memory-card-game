import React, { useState, useEffect } from 'react'
import { Card } from './Card'

import facelessVoid from '../assets/faceless_void.png'
import emberSpirit from '../assets/ember_spirit.png'
import wraithKing from '../assets/wraith_king.png'
import rubick from '../assets/rubick.png'
import bloodseeker from '../assets/bloodseeker.png'
import invoker from '../assets/invoker.png'
import nightStalker from '../assets/night_stalker.png'
import shadowFiend from '../assets/shadow_fiend.png'

export const CardContainer = ({handleGame, score, highScore}) => {
    const images = [{
        src: facelessVoid,
        title: 'Faceless Void',
        backgroundColor: 'rgb(255 223 137)',
        borderStyle: '1px solid rgb(255 223 137)',
      },
      {
        src: emberSpirit,
        title: 'Ember Spirit',
        backgroundColor: 'rgb(255 223 137)',
        borderStyle: '1px solid rgb(255 223 137)',
      } ,
      {
        src: wraithKing,
        title: 'Wraith King',
        backgroundColor: 'rgb(255 223 137)',
        borderStyle: '1px solid rgb(255 223 137)',
      },
      {
        src: rubick,
        title: 'Rubick',
        backgroundColor: 'rgb(255 223 137)',
        borderStyle: '1px solid rgb(255 223 137)',
      },
      {
        src: bloodseeker,
        title: 'Bloodseeker',
        backgroundColor: 'rgb(255 223 137)',
        borderStyle: '1px solid rgb(255 223 137)',
      },
      {
        src: invoker,
        title: 'Invoker',
        backgroundColor: 'rgb(255 223 137)',
        borderStyle: '1px solid rgb(255 223 137)',
      },
      {
        src: nightStalker,
        title: 'Night Stalker',
        backgroundColor: 'rgb(255 223 137)',
        borderStyle: '1px solid rgb(255 223 137)',
      },
      {
        src: shadowFiend,
        title: 'Shadow Fiend',
        backgroundColor: 'rgb(255 223 137)',
        borderStyle: '1px solid rgb(255 223 137)',
      },
    ]   

    const [cards, setCards] = useState(images) 
      
    const shuffle = (newCards) => {
        for(let i = newCards.length - 1; i > 0; i--){
            let randomIdx = Math.floor(Math.random() * i)
            let temp = newCards[randomIdx]
            newCards[randomIdx] = newCards[i]
            newCards[i] = temp
        }
    }

    useEffect(() => {
        const newCards = [...cards];
        shuffle(newCards);
        setCards(newCards);
    }, [score, highScore]);
      

  return (
    <div className='card-wrapper'>
        {
            cards.map(image => (
                < Card image={image} key={image.title} handleGame={handleGame} />
            ))
        }
    </div>
  )
}
