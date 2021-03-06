

import React from 'react';
import {  useHistory } from 'react-router-dom';

const Friend = (props) => {
  const { name, email, id } = props.friend;
  const history = useHistory();

  const handleClick = (friendId) => {
    const url = `/friend/${friendId}`;
    history.push(url)
  };

  return (
    <div className="friend-container card p-3 mt-3">
      <small className="bg-warning text-center text-white mb-2">Friend ID {id}</small>
      <h3>{name}</h3>
      <p>Email : {email}</p>
      <button onClick={() => handleClick(id)} className="btn btn-primary">Friend Detail</button>
    </div>
  );
};

export default Friend;




