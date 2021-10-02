import React from 'react';
import styles from './SearchResult.module.css';
import './Rating.css'



export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div><img src={props.image} alt="product picture" width="400" height="300"/></div>
          <div className={ styles.name }>{ props.name }</div>
          <div>{ props.desc }</div>
          <div><h3>${ props.price }</h3></div>
          <div className='Stars'>{ props.rating }</div>
        </div>
    </div>
  
  )
  
  
}

