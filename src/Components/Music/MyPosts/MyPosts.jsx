import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div className=''>
      <div>
        <Post Like='56'/>
      </div>
      <div>
        <Post Like='56'/>
      </div>
      <div>
        <Post Like='56'/>
      </div>
    </div>
  );
}

export default MyPosts;
