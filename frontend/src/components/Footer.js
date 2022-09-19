import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/style.css'

function Footer() {
    const navigate=useNavigate();
    function Store (){
        navigate ('/StoreApplication')
      }
  return (
    <div>
      <footer className='text'>
      <div>Mağaza Başvurusu</div>
       <div className='btn btn-success' id="f-button"  onClick={() => Store()} >  StoreAplication </div>
    </footer>
    </div>
  )
}

export default Footer;
