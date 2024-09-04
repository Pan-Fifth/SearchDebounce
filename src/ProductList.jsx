import React from 'react'

export default function ProductList({data}) {
    console.log('Hello',data)
    // const newArr = data.splice(0,10)
    // console.log('cut',newArr)
  return (
    
        <ul className='px-12'>
            {data.map((el)=>(
                // {console.log(el.title)}
                <li className='list-disc'>{el.title} || {el.category} || {el.price}</li>
            ))}
        </ul>
    
  )
}
