import React from 'react';
import s from './Music.module.css';
import MyPosts from './MyPosts/MyPosts';

const Music = () => {
  return (
    <div className='P'>
      <div className={s.div}>
          <img className={s.k1} src='https://content1.rozetka.com.ua/goods/images/big/128378314.jpg' alt='kartinka'/>
          <img className={s.k2} src='https://shutnikov.club/wp-content/uploads/2020/02/unnamed-92.jpg' alt='kartinka'/>
          <img className={s.k3} src='https://pristor.ru/wp-content/uploads/2020/04/%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BE%D0%B1%D0%BE%D0%B8-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD-2020-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-14.jpg' alt='kartinka'/>
      </div>
      <div>
      <MyPosts/>
      </div>
    </div>
  );
}

export default Music;
