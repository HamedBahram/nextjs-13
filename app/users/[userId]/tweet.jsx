'use client'

import { useState } from 'react'

const Tweet = ({ tweet }) => {
  const [likes, setLikes] = useState(1)

  return (
    <li className='my-4 rounded bg-stone-200 p-4 text-stone-600'>
      <div className='flex justify-between'>
        <p>{tweet.body}</p>
        <button>
          <span>{likes}</span>
        </button>
      </div>
    </li>
  )
}

export default Tweet
