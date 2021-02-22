import React from 'react'
import {Link} from 'react-router-dom'
import Science from '../images/Science.jpg'

function SportItem(props) {
  return (
    <>
    <li className='sport__item'>
      <Link className='sport__item__link' to={props.path}>
        <figure className='sport__item__pic-wrap'>
        <img src={Science} alt="Man with telescope"></img>
        </figure>
        <div className='sport__item__info'>
          </div>
        </Link>
      </li>

    </>
  )
}

export default SportItem
