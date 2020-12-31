import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <p>프레임 속에 꿈을</p>
      <p>색감 속에 희망을</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          들어가기
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;


/* 
<Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          영상 보기 <i className='far fa-play-circle' />
        </Button>
*/