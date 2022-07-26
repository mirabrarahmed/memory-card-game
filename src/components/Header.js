import React from 'react'

export const Header = ({highScore, score}) => {
  return (
    <div>
        <h2>Score: {score}</h2>
        <h2>HighScore: {highScore}</h2>
    </div>
  )
}
