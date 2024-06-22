import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [page,setPage] = useState(1);
  const [images,setImages] = useState([]);

  console.log(page);

  const getImages = async () => {
    try {
      const {data} =  await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      setImages(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getImages();
  },[page]);

  return  images.length > 0 ? (
    <div>
      <div className='flex flex-wrap gap-2 mt-10 justify-center'>
          {images.map((image)=>(
            <div key={image.id} className='w-[25%] h-[15%]'>
              <img className='w-full h-full' src={image.download_url} alt="" />
              <h1>{image.author}</h1>
            </div>
          ))}
      </div>
      <div className='flex justify-center align-center gap-3 mt-5 mb-5'>
        <span onClick={()=> page > 1 && setPage(page-1)} className='cursor-pointer hover:text-blue-500'>Prev</span>
        <span>{page}</span>
        <span onClick={()=>setPage(page+1)} className='cursor-pointer hover:text-blue-500'>Next</span>
      </div>
    </div>

  ): (<div className='mt-10 text-center text-3xl text-red-500 font-bold'>Loading...</div>)
}

export default Home