import React, {Component} from 'react';
import Animate from 'react-move/Animate';
import { easeExpIn } from 'd3-ease';

const image_list=[
    {
        key:0,
        src:require('../image/activity/teacher01.jpg'),
        x:-400
    },
    {
        key:1,
        src:require('../image/activity/teacher02.jpg'),
        x:250
    },
    {
        key:2,
        src:require('../image/activity/teacher03.jpg'),
        x:900
    },
    {
        key:3,
        src:require('../image/activity/teacher04.jpg'),
        x:1550
    },
    {
        key:4,
        src:'../image/activity/teacher06.jpg',
        x:2200
    }
]

class Carousel extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:image_list,
            direction:true
        }
    }

    update = ()=>{
        this.setState(
            {
                value:this.state.value.map(value=>{
                if(this.state.direction){
                    if(value.key===0){
                        return {src:value.src, x:2200, key:4}
                    } else{
                        return {src:value.src,x: value.x - 650, key: value.key - 1}
                    }
                }
                else{
                    if(value.key===4){
                        return {src:value.src, x: -250, key:0}
                    }else{
                        return {src:value.src, x: value.x+650, key: value.key + 1}
                    }
                }
            })
        })
    }

    render(){
         const image_list = this.state.value;

         return (
             <div>
                 <div className='carousel'>
                     {image_list.map((d)=>(
                             <Animate
                                key={d.key}
                                start={{
                                    index:d.key,
                                    src:d.src,
                                    x:d.x,
                                    }}
                                update={{
                                    index:[d.key],
                                    src:[d.src],
                                    x:[d.x],
                                    timing:{duration:500, ease:easeExpIn},
                                }}
                             >
                                 {({src, x, index}) => {
                                     const name = `hot`

                                     if(index === 1) {
                                         return (
                                             <div className={name} style={{
                                                 left:x,
                                                 WebkitTransform:`translateX(${x}) scale(0.9,0.9)`,
                                                 transform: `translateX(${x}) scale(0.9,0.9)`
                                             }}>
                                                 <img src={src} />
                                             </div>
                                         )
                                     }
                                     else if(index === 0)
                                     {
                                         return (
                                             <div className={name} style={{
                                                 left:x,
                                                 WebkitTransform:`translateX(${x}) scale(0.7,0.7)`,
                                                 transform: `translateX(${x}) scale(0.7,0.7)`
                                             }}>
                                                 <img src={src} />
                                             </div>
                                         )
                                     }
                                     else if(index === 2)
                                     {
                                         return (
                                             <div className={name} style={{
                                                 left:x,
                                                 WebkitTransform:`translateX(${x}) scale(0.9,0.9)`,
                                                 transform: `translateX(${x}) scale(0.9,0.9)`
                                             }}>
                                                 <img src={src} />
                                             </div>
                                         )
                                     }
                                     else {
                                         return (
                                             <div className={name} style={{ left:x }}>
                                                 <img src={src} />
                                             </div>
                                         )
                                     }
                                 }}
                             </Animate>
                     ))}
                 </div>
             </div>
         )
    }
}
export default Carousel;