import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import PostItem from './PostItem';
import { DUMMY_POSTS } from '../data';
import axios from 'axios';


const Posts = () => {

  const[posts,setPosts] = useState(DUMMY_POSTS)
  const [isLoading, setIsLoading] = useState(false)


  useEffect(()=>{
    const fetchposts = async()=>{
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`)
        setPosts(response?.data)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }
    fetchposts();
  }, [])   //[]- happens only once

  if(isLoading){
    return <Loader/>
  }


  return (

    <section className='posts'>
     {posts.length> 0 ? <div className="container posts_container">
      {
        posts.map(({_id : id, thumbnail, category, title, desc, creator, createdAt})=> 
        <PostItem 
        key={id} 
        postID={id} 
        thumbnail={thumbnail} 
        category={category} 
        title={title} 
        desc={desc} 
        authorID={creator}
        createdAT={createdAt}/>)

        
      }
      </div> : <h2 className='center'>No posts found!</h2> }
    </section>
  
)
}

export default Posts;
