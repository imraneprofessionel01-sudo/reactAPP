import React, { useState } from 'react';
import {user} from "../model/User";

function Mycards({ name = user.name }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  function addComment(event) {
    event.preventDefault();
    const cleanComment = comment.trim();

    if (cleanComment) {
      setComments((currentComments) => [...currentComments, cleanComment]);
      setComment("");
    }
  }

  return (
    <div className="card card-item">
      <img 
        src={user.imageUrl} 
        className="card-img-top" 
        alt={`Présentation de ${name}`} 
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="reaction-row">
          <button
            type="button"
            className="reaction-button like-button"
            onClick={() => setLikes((currentLikes) => currentLikes + 1)}
            aria-label={`Like ${name}`}
          >
            <span aria-hidden="true">👍</span> <span>{likes}</span>
          </button>
          <button
            type="button"
            className="reaction-button dislike-button"
            onClick={() => setDislikes((currentDislikes) => currentDislikes + 1)}
            aria-label={`Dislike ${name}`}
          >
            <span aria-hidden="true">👎</span> <span>{dislikes}</span>
          </button>
        </div>

        <form className="comment-form" onSubmit={addComment}>
          <input
            type="text"
            className="form-control comment-input"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Write a comment..."
            aria-label={`Comment on ${name}`}
          />
          <button type="submit" className="btn btn-primary comment-button">
            Send
          </button>
        </form>

        {comments.length > 0 && (
          <div className="comments-list">
            {comments.map((item, index) => (
              <p className="comment-item" key={`${item}-${index}`}>{item}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Mycards;