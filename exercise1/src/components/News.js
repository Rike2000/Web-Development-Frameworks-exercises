import React from 'react'
import './News.css'

export default function News() {
    return (
        <div>
            <div className='news_image'>
            <img src="https://hs.mediadelivery.fi/img/468/737e1ed29594e3bc69c11f9fa5ecc3f8.jpg"></img>
            <div>AIHE: Donec consequat sollicitudin mi, nec scelerisque diam lobortis sed. Donec ac vulputate dolor. Curabitur at tellus ornare, commodo ligula non, congue sapien. Nullam fermentum enim nunc. Sed facilisis aliquet quam eget gravida.</div>
            </div>
            <div className='news_image'>
            <img src="https://hs.mediadelivery.fi/img/468/2d6b820465ea51c8e052a3ad0e5f9a78.jpg"></img>
            <div>AIHE: Aliquam auctor rutrum nisi. Nulla egestas, tortor et pellentesque imperdiet, urna lectus dignissim nisi, ut volutpat sapien est vel erat. Praesent justo quam, pretium quis odio sed, fringilla pretium est. Sed posuere elit vitae dolor porta hendrerit.</div>
            </div>
            <div className='news_image'>
            <img src="https://hs.mediadelivery.fi/img/468/5c2e40d54c106efe55f680e2e73acec8.jpg"></img>
            <div>Vivamus faucibus, mi quis condimentum fermentum, justo lorem ullamcorper ante, eget pretium purus dui vitae arcu. Praesent arcu magna, dignissim et nisi sed, venenatis sodales nunc.</div>
            </div>
        </div>
    )
}
