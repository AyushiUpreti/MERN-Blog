import React, {useState, useEffect} from 'react';
// import { DUMMY_POSTS } from '../data';
import PostItem from '../Components/PostItem';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Components/Loader';

const AuthorPosts = () => {
  
  const[posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const {id} = useParams();

  useEffect(()=>{
    const fetchposts = async()=>{
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`)
        setPosts(response?.data)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }
    fetchposts();
  }, [id])   //[]- happens only once

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
        createdAt={createdAt}/>) 
      }
      </div> : <h2 className='center'>No posts found!</h2> }
    </section>
  
)
}

export default AuthorPosts
