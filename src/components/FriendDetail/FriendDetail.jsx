
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({})

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setFriend(data))
      .catch(error => alert('Sorry Something Went Wrong Please Try Again Later'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 

  return (
    <div>
      <h3>Hello Friend Detail App</h3>
      <h4>{friend.name}</h4>
    </div>
  );
};

export default FriendDetail;



