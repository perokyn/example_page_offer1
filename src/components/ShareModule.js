import React from 'react'
import {
    
    FacebookShareButton,
    FacebookIcon,
    RedditShareButton,
    RedditIcon,
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon,
    
  } from 'react-share';



export const ShareModule=(props)=>{


return<>
<div className='flex justify-around '>
    <FacebookShareButton
            url={'https://www.facebook.com/'}
            quote={`Hi there! Check out this property: ${props.link}`}
            className="bg-green-600 m-1"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>


          <TwitterShareButton
            url={'https://twitter.com/'}
            quote={'titleThe thing you will share'}
            className="bg-green-600 m-1"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          < RedditShareButton
            url={'https://twitter.com/'}
            quote={'titleThe thing you will share'}
            className="bg-green-600 m-1"
          >
            <RedditIcon size={32} round />
          </RedditShareButton>

          < EmailShareButton
            url={'https://twitter.com/'}
            quote={'titleThe thing you will share'}
            className="bg-green-600 m-1"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>


    </div>
    
</>


}