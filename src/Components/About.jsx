import React, { useEffect, useState } from 'react'
import axios from '../Helpers/axios';

const About = () => {

  const [posts,setPosts] =  useState("");

  const getPosts = async() => {
    try {
        const {data} = await axios.get("/posts");
        setPosts(data);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    console.log('mounted')
    if(!posts) getPosts();
    return () => {
      // alert('do you want to leave this page')
      console.log('unmounted');
    }
  },[posts]);

  // console.log('loaded')

  return (
    <div>
      <hr className='mt-10' />
            <input onClick={getPosts} type="submit" value="Submit" className='mt-10 bg-red-500 ml-3 text-zinc-200 rounded-full p-2 w-24' />
        <hr className='mt-5' />

        <ul className='p-10 list-items'>
            {posts ? posts.map((p) => (
                    <li key={p.id} className='list-disc'>{p.title}</li>
            )) : <h1 className='text-red-400'>loading...</h1> }
        </ul>

    </div>
  )
}

export default About