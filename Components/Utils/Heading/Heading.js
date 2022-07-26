import React from 'react'
import { HeadingStyle } from './HeadingStyle'

function Heading(props) {
  return (
    <HeadingStyle>
        <div>
            <p>
                {props.smallTtitle}
            </p>
            <h1>{props.title}</h1>
        </div>
        <div>
        <h5>Exploare all </h5>
            
        </div>
    </HeadingStyle>
  )
}

export default Heading