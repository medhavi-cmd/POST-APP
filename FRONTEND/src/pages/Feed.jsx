import React, { useState } from 'react'

const Feed = () => {
    const [posts, setPosts] = useState([]);

  return (
    <section className='feed'>
      <h1 className="text-2xl font-bold mb-4">Feed</h1>
      <p>Welcome to the feed!</p>
    </section>
  )
}

export default Feed
