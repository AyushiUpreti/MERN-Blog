import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)


const PostAuthor = ({authorID, createdAt}) => {

  const [author, setAuthor] = useState({})

  useEffect(()=>{
    const getAuthor = async()=>{
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorID}`)
        setAuthor(response?.data);
      } catch (error) {
        console.log(error) 
      }
    }

    getAuthor();
  }, [authorID])

  const validDate = new Date(createdAt);
  const isValidDate = !isNaN(validDate);

  return (
    
    <Link to={`/posts/users/${authorID}`} className='post_author'>
        <div className="posts-author-avatar">
            <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${author?.avatar}`} alt="" />
        </div>
        <div className="posts-author-details">
            <h6>By : {author?.name || 'Unknown Author'}</h6>
            <small>
          {isValidDate ? (
            <ReactTimeAgo date={validDate} locale="en-US" />
          ) : (
            'Invalid date'
          )}
        </small>
            
            
            {/* <small>
              <ReactTimeAgo date={new Date(createdAt)} locale='en-US'/>
            </small> */}
        </div>
    </Link>
  )
}

export default PostAuthor;



