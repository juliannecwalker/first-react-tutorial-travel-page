import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these awesome destinations!</h1>
      <div className='cards__container'>
          <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem 
                src='images/image1.jpg'
                text='Nantucket'
                label='Adventure'
                path='/services'
                />
                <CardItem 
                src='images/uva.jpg'
                text='University of Virginia'
                label='Academics'
                path='/services'
                />
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Cards;
