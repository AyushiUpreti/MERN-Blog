// import React from 'react';
// import { Link } from 'react-router-dom';
// import PostAuthor from './PostAuthor';


// const PostItem = ({ postID, category, thumbnail, title, authorID, desc, createdAt}) => {

//   const shortDescription = desc.length > 145 ? desc.substr(0,145) + '...' : desc;
//   const shortTitle = title.length > 30 ? title.substr(0,30) + '...' : title;

  
//   return (
//     <article className='post'>
//       <div className="post-thumbnail">
//         <img src={thumbnail} alt="" />
//       </div>
//       <div className="post-content">
//         <Link to={`/posts/${postID}`}> 
//           <h4>{shortTitle}</h4>
//         </Link>
//         <p>{shortDescription}</p>
//         <div className="post-footer">
//           <PostAuthor  authorID={authorID} createdAt={createdAt}/>
//           <Link to={`/posts/categories/${category}`}className='btn category'>{category}</Link>
//         </div>
//       </div>
//     </article>
//   )
// }

// export default PostItem;


import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

const PostItem = ({ postID, category, thumbnail, title, authorID, desc, createdAt }) => {
  // Add debugging statements
  console.log('PostItem Props:', { postID, category, thumbnail, title, authorID, desc, createdAt });

  // Add safety checks for desc and title
  const shortDescription = desc ? (desc.length > 145 ? desc.substr(0, 145) + '...' : desc) : '';
  const shortTitle = title ? (title.length > 30 ? title.substr(0, 30) + '...' : title) : 'No Title';

  return (
    <article className='post'>
      <div className="post-thumbnail">
        {thumbnail ? <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt="Post thumbnail" /> : <div className="no-thumbnail">No Image</div>}
      </div>
      <div className="post-content">
        <Link to={`/posts/${postID}`}> 
          <h4>{shortTitle}</h4>
        </Link>
        <p dangerouslySetInnerHTML={{__html : shortDescription}}/>
        <div className="post-footer">
          <PostAuthor authorID={authorID} createdAt={createdAt} />
          <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
        </div>
      </div>
    </article>
  );
}

export default PostItem;
