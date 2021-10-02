import React from 'react';
import styles from './SearchResult.module.css';
import './Rating.css'



export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div><img src={`/images/${props.image}`} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div>{ props.desc }</div>
          <div><h3>${ props.price }</h3></div>
          <div className='Stars'>{ props.rating }</div>
        </div>
    </div>
  
  )
  
  
}

