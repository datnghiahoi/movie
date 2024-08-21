import React from 'react'
import Modal from 'react-modal';
import YouTube from 'react-youtube';


//react-yotube
const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

export default function MovieSearch({title,data}) {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [trailerKey,setTrailerKey] =useState("")
    const handTrailer =async (id)=>{
        // console.log(e.target);
        setTrailerKey("")
        try{
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
               Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
            }
            };
            const movieKet = await fetch(url,options);
            const data = await movieKet.json();
            setTrailerKey(data.results[0].key)
            console.log(data);
            setModalIsOpen(true);
            

        }catch (error){
            setModalIsOpen(false);
            console.log(error);
            

        }
    }
  return (
    <div className='text-white pb-10 mb-10'>
        <h2 className='uppercase text-x1 mb-4'>{title}</h2>
        <div className=' grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-4 lg'>
        {data && data.map((items)=>(
            <div key={items.id} className='w-[200px] h-[300px] relative group' onClick={()=> handTrailer(items.id)} >
            <div className='group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer'>
            <div className='absolute top-0 left-0 w-full h-full bg-black/40'></div>
            <img src={`${import.meta.env.VITE_IMG_URL}${items.poster_path}`} alt={items.tittle} className='w-full h-full object-cover '/>
            <div className='absolute bottom-4 left-2 '>
                <p className='uppercase text-md'>
                    {items.title || items.original_title}
                </p>
            </div>
            </div>
            
        </div>

        ))}
        </div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={()=>setModalIsOpen(false)}
        style={{
            overlay:{
                position:"fixed",
                zIndex:9999,
            },
            
                content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                },
              

        }}
        contentLabel="Example Modal"
         >
             <YouTube videoId={trailerKey} opts={opts} />

        </Modal>
        
    </div>
  )
}
