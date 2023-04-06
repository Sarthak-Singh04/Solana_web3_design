import React, { useRef, useState } from 'react';
import heroVideo from '../assets/heroVideo.mp4';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import Buttongradient from './Buttongradient';

const Hero = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div className='flex items-end justify-center w-full h-screen text-center'>
      <video ref={videoRef} src={heroVideo} autoPlay loop muted className='object-cover w-full h-full absolute -z-20' />
      <div className={`p-8 flex flex-col items-center justify-center w-full duration-500 ${isVideoPlaying ? '' : 'bg-black/80'} ${isMenuShown ? 'opacity-20' : 'opacity-100'}`}>
        <h1 className='text-5xl lg:text-7xl'>Web 3.0</h1>
        <h1 className='text-5xl lg:text-7xl mb-12'>
          {' '}
          <span className='text-thBlue font-bold'>future </span> is here
        </h1>
        <div className='flex flex-row justify-center items-center'>
          <Buttongradient title='get Savvy' />
          <Buttongradient title='Join Community' className='mx-6' />
          {isVideoPlaying ? (
            <FaPauseCircle size={30} onClick={handleVideoPause} className='cursor-pointer hover:scale-110 duration-200 text-thBlue'/>
          ) : (
            <FaPlayCircle size={30} onClick={handleVideoPlay} className='cursor-pointer hover:scale-110 duration-200 text-thBlue' />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
