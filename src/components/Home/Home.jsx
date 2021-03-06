

import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then(res => res.json())
      .then(data => setFriends(data))
      .catch(error => alert('Sorry Something Went Wrong!!! Please Try Again Later'))

  }, [])


  return (
    <div className="row">
      {
        friends.map(friend => <div className="col-sm-6 col-md-4"><Friend friend={friend} key={friend.id} /></div>)
      }
    </div>
  );
};

export default Home;




