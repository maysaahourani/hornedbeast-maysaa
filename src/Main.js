import React, { Component } from 'react'
import Hornedbeasts from './Hornedbeasts'

export class Main extends Component {
    render() { 
        let data =[{
            image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
            title: "UniWhal",
            description: "A unicorn and a narwhal nuzzling their horns",
            keyword: "narwhal",
            horns: 1
          },
        
          {
            image_url: "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
            title: "Rhino Family",
            description: "Mother (or father) rhino with two babies",
            keyword: "rhino",
            horns: 2
          },
          
          {
            image_url: "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
            title: "Unicorn Head",
            description: "Someone wearing a creepy unicorn head mask",
            keyword: "unicorn", 
            horns: 1
        }]

        return (
            <div>
                <Hornedbeasts title={data[0].title} imgUrl={data[0].image_url} description={data[0].description}/>
                <Hornedbeasts title={data[1].title} imgUrl={data[1].image_url} description={data[1].description}/>
                <Hornedbeasts title={data[2].title} imgUrl={data[2].image_url} description={data[2].description}/>
            </div>
        )
    }
}

export default Main
