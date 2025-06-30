import React from 'react'
import appwriteServices from '../appwrite/db'
import { Link} from 'react-router-dom'

export const PostCard = ({$id , title, featuredImage}) => {
  return (
    <Link to={`/post/${$id}`} >
        <div className='bg-white shadow-md rounded-lg overflow-hidden'>
            <img 
                src={appwriteServices.getFilePreview(featuredImage)} 
                alt={title} 
                className='w-full h-48 object-cover'
            />
            <div className='p-4'>
                <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
            </div>
        </div>
    </Link>

   
  )
}
