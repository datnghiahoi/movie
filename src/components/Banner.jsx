import React from 'react'
import saonua from "../assets/rating-half.png"
import saonguyen from "../assets/rating.png"
import anhnho from "../assets/temp-1.jpeg"
import icon from "../assets/play-button.png"
export default function Banner() {
  return (
    <div className='w-full h-[700px] bg-banner bg-center bg-no-repeat bg-cover relative'>
        <div className='absolute w-full h-full top-0 left-0 bg-black opacity-40'></div>
        <div className='w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20'>
            <div className='flex flex-col space-y-5 items-baseline w-[50%]'>
               <p className='text-white bg-gradient-to-r from-red-600 to-red-300 text-md py-1 px-3'>TV Show</p>
               <div className='flex flex-col space-y-4'>
                <h2 className='text-white text-3x1'> Phim Hay</h2>
                <div className='flex items-center space-x-3'>
                <img src={saonguyen} alt="saonguyen" className='ư-8 h-8' />
                    <img src={saonguyen} alt="saonguyen" className='ư-8 h-8' />
                    <img src={saonguyen} alt="saonguyen" className='ư-8 h-8' />
                    <img src={saonguyen} alt="saonguyen" className='ư-8 h-8' />
                    <img src={saonua} alt="saonguyen" className='ư-8 h-8' />
                </div>
                <p className='text-white'>Phim này dơ vaihfbadjbfvjabdlvbadsjbvdbsv dakjbfkjadbvbdaskbvdjskbvkjadx
                </p>
                <div className='flex items-center space-x-4'>
                    <button className='p-3 text-white bg-black font-bold text-sm'>Chi Tiết</button>
                    <button className='p-3 text-white bg-red-600 font-bold text-sm'>Xem Phim</button>
                </div> 
               </div>
            </div>
            <div className='w-[50%] flex items-center justify-center'>
                <div className=' w-[300px] h-[400px] relative group'>
                    <img src={anhnho} alt="" className='w-full h-full object-cover' />
                    <div className=' w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                    <img src={icon} alt="" className='w-16 h-16 relative z-20' />
                </div>
            </div>
               
            </div>

        </div>
    </div>
  )
}
