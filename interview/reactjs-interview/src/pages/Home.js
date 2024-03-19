import React from 'react'
import Comment from '../components/Comment'
import Comments from '../data/data'

export default function Home() {
  return (
    <>
     <Comment Comments={Comments}/>
    </>
  )
}
