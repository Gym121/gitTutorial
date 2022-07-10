import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  let postData=[
    {id: 1, post: 'Hi', LikeCount: 53},
    {id: 2, post: 'How are you?', LikeCount: 67},
    {id: 3, post: 'No,it is bad', LikeCount: 56},
    {id: 4, post: 'text', LikeCount: 34},
    {id: 5, post: 'text', LikeCount: 25}
  ]

  return (
    <div className=''>
      <div>
        <Post Like={postData[0].LikeCount}/>
      </div>
      <div>
        <Post Like={postData[1].LikeCount}/>
      </div>
      <div>
        <Post Like={postData[2].LikeCount}/>
      </div>
    </div>
  );
}

export default MyPosts;
