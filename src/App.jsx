import { useState, useEffect } from 'react'
import ProductList from './ProductList'

export default function App() {
const [data,setData] = useState([])
const [search,setSearch] = useState('')
const [total,setTotal] = useState(10)
const [page,setPage] = useState(1)

useEffect(()=>{
  const fetchInfo = async () =>{
    const resp = await fetch(`https://dummyjson.com/products/search?skip=${page*10-10}&limit=10&q=${search}`)
    const result = await resp.json()
    setData(result.products)
    setTotal(result.total)
    console.log(typeof(result))
  }
  fetchInfo()
},[search,page])

function hdlChange(e){
  const timer = setTimeout(()=>{
    setSearch(e.target.value)},1500)

  return ()=> clearTimeout(timer);
}

function hdlClick(num){
  if(page+num<1){
    return
  }else if(page+num<total/10+1){
    setPage(page+num)
    console.log(page)
  }
}

  return (
    <div>
      <h1 className='px-6'>Product Search</h1>
      <input type="text" className='border border-black ' onChange={(e)=>hdlChange(e)}/>
      <p>total =  {total} items</p>
      <div className='flex gap-4 p-2' >
        <button onClick={()=>hdlClick(-1)} className='border border-black p-2' >prev</button>
        <p className='border border-black p-2'>{page}</p>
        <button onClick={()=>hdlClick(1)} className='border border-black p-2' >Next</button>
      </div>
      <ProductList data = {data}/>
    </div>
  )
}

