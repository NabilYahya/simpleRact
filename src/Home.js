import React from 'react'
import Posters from './Posters'
import s from './Images/s.jpg'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
export const Home = () => {
         
    const data = [
    {id :0,title :"this is first" , text:"Hello and welcom to the discription" , imag :s},
    {id :1,title :"this is second" , text:"Hello and welcom to the discription" ,imag :s},
    {id :0,title :"this is first" , text:"Hello and welcom to the discription" , imag :s},
    {id :1,title :"this is second" , text:"Hello and welcom to the discription" ,imag :s},
    {id :0,title :"this is first" , text:"Hello and welcom to the discription" , imag :s},
    {id :2,title :"this is third" , text:"Hello and welcom to the discription" ,imag :s}
  ]
  return (

    <div style={{ margin: "30px" }}>
      <div className='row'>
        {data.map(item => (
          <div className='col-md-4' key={item.id}>
            <Posters title={item.title} text={item.text} img={item.imag} />
          </div>
        ))}
      </div>
      <div className='d-flex justify-content-center'>
      <Link to="/form">
      <Button>The Big Form</Button>
      </Link>
      </div>
    </div>
  )
}

export default Home;