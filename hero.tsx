import React from 'react'
import Image from 'next/image'
export default function Hero() {
  return (
    <div>

      <div className='hero'>
        <div className='img1'>
      <Image src="/images/Hello! I Am Ibrahim Memon.png"  width="200" 
        height="20" alt="Huma fahd" />
        </div>
        <div className='img2'>
        <Image src="/images/image 1.png"  width="100" 
        height="100" alt="manimage" />
        </div>
        <div className='img3'>
        <Image src="/images/Judges a book by its cover....png"  width="200" 
        height="100" alt="heading" />
        </div>
        <div className='text'>
            <h1>I am a WEB DEVELOPER</h1><br /><br />
            <p>currently I am  Learning from home <br />
            A self taught web developer.I am learning from Youtube,and want to work from home too.</p>
        </div>
</div>
      </div>
    
  )
}
