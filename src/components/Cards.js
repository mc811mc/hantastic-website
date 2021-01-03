import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import '../Overall.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>한타스틱과 함께 하는 여행</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/main_page_1.jpg'
              text='선유도의 아름다움을 찾아서'
              label='한국'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/main_page_3.jpg'
              text='하늘에서 본 발리'
              label='인도네시아'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/main_page_4.jpg'
              text='제주도의 노을'
              label='한국'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/main_page_5.jpg'
              text='철원의 겨울'
              label='한국'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
