import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
      <div className=''>
        <div>
          <img className={s.k1}src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCmqSFQgo-ixAhVspjiJX2XDwrcjvuqB8Hg&usqp=CAU' alt='kartinka'/>
        </div>
        <div className={s.t}>
          Post
        </div>
        <div>
          <button>Like</button>
          <div className={s.pr}>
            {props.Like}
          </div>
        </div>
      </div>
  );
}

export default Post;
