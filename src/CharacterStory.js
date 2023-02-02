import React from 'react'
import { Navbar } from './componets/Navbar'
import { Footer } from './componets/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faThumbsUp, faStar} from '@fortawesome/free-solid-svg-icons'




export const CharacterStory = () => {
  return (
    <>
    <div className='story'>
    <Navbar/>
    <div className='story-container'>
      <span className='story-img'>
      <img src="/images/DisneyQueenHearts.jpeg" alt="image here"
      />
        </span> 
      <h5 className='main-story'>lorem loremLorem ipsum dolor sit amet consectetur. Id tellus massa dapibus eu ultrices. 
      Sagittis in posuere amet urna ante velit ac et.
       A faucibus faucibus semper urna odio etiam praesent. Vel enim enim suspendisse quis.

        Lorem ipsum dolor sit amet consectetur. Id tellus massa dapibus eu ultrices. Sagittis in posuere amet urna ante velit ac et.
        A faucibus faucibus semper urna odio etiam praesent.
        Vel enim enim suspendisse quis.

        Lorem ipsum dolor sit amet consectetur. Id tellus massa dapibus eu ultrices. 
        Sagittis in posuere amet urna ante velit ac et. A faucibus faucibus semper urna odio etiam praesent. Vel enim enim suspendisse quis.

    <div className='story-icon'>
      <FontAwesomeIcon icon ={faThumbsUp}/>
      <FontAwesomeIcon icon ={faComment}/>
      <FontAwesomeIcon icon ={faStar}/>
      </div>
      <div>
      <input
      placeholder='leave a comment...'
      type= "text"
      className='comment-bar'/>
    </div>
</h5>
    
    </div>
    <Footer/>
    </div>
    </>
  )
}
