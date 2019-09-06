import React, { Component } from 'react'
import emoji from 'react-easy-emoji'

import { Carousel } from 'antd'

import image from '../../layout/images/image1.jpg'

export default class Landing extends Component {
  render() {
    return (

      <div className='landing'>

        <Carousel autoplay>
          <div className='landing__wallpaper' style={{ backgroundImage: image }}>
            asdasd
          </div>
          <div className='landing__wallpaper'>
            <img src={image} />
          </div>
          <div className='landing__wallpaper'>
            <img src={image} />
          </div>
        </Carousel>






        {/* //       <div style={{ ustifyContent: 'center', alignItems: 'center'}}>
        
// <center>
//   <h1>
//             {
//               emoji('En construccion.... 😜😜😜')
//             }
//   </h1>

  
// </center>
//       </div> */}
      </div>

    )
  }
}