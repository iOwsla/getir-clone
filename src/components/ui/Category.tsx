import React from 'react'

function Category({ category: { title, id, image } }: any) {
    return (
        <a href='#' className='flex flex-col gap-y-2 items-center text-center p-4 '>
            <img src={image} alt={title} className='w-12 h-12 border border-gray-200 rounded-sm'></img>
            <span className='text-[15px]'>{title}</span>
        </a>
    )
}

export default Category