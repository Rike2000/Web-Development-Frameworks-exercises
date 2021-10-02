import React from 'react'
import './Header.css'

export default function header() {
    return (
        <div className="container">
            <div><h1>HELSINGIN SANOMAT</h1></div>
            <div className='list'>
            <div className='list_item'> Uutiset </div>
            <div className='list_item'> Lehdet </div>
            <div className='list_item'> Kirjaudu </div>
            <div className='list_item'> Hae </div>
            </div>
            
        </div>
        
    )
}
