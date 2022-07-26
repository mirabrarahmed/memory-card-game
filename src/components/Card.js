import React from 'react'

export const Card = ({image, handleGame}) => {
  return (
    <button className="card" onClick={handleGame.bind(this, image.title)}>
        <figure>
            <img src={image.src} alt={image.title} />
            <figcaption style={{color:'black'}}>{image.title}</figcaption>
        </figure>
    </button>
  )
}
