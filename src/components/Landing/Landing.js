import React, { Component } from 'react'
// import emoji from 'react-easy-emoji'

import { Carousel } from 'antd'

import image from '../../layout/images/image1.jpg'

export default class Landing extends Component {
  render() {
    return (

      <div className='landing'>

        <Carousel autoplay>
          <div className='landing__wallpaper' >
            <div className='landing__image'  style={{ backgroundImage: image }}>
              <div className='landing__image_description'>
                La ciudad
              </div>
            </div>
          </div>
          <div className='landing__wallpaper'>
            <div className='landing__image' style={{backgroundColor: 'blue'}}>
              <div className='landing__image_description'>
                La ciudad
              </div>
            </div>
          </div>
          <div className='landing__wallpaper'>
            <div className='landing__image'  style={{backgroundColor: 'yellow'}}>
              <div className='landing__image_description'>
                La ciudad
              </div>
            </div>
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