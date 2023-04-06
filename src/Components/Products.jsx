import React from 'react'
import PageSection from './PageSection'
import { FaRocket, FaSatellite, FaRobot, FaMicrochip } from 'react-icons/fa'

const Products = () => {
  const products = [
    {
        id: 1,
        icon: <FaRocket size={50} className='text-white' />,
        title: "Building NFT",
        subtitle: "Forgotten i i whose than the word from. Heart to i my some something faintly of. A nothing tempest i sent unto countenance chamber, and take perched silken fiend and sitting. He repeating word door name no i all long."
      },
    {
      id: 2,
      icon: <FaSatellite size={50} className='text-white' />,
      title: "Satellite Communications",
      subtitle: "Forgotten i i whose than the word from. Heart to i my some something faintly of. A nothing tempest i sent unto countenance chamber, and take perched silken fiend and sitting. He repeating word door name no i all long."
    },
    {
      id: 3,
      icon: <FaRobot size={50} className='text-white' />,
      title: "Robotics",
      subtitle: "Forgotten i i whose than the word from. Heart to i my some something faintly of. A nothing tempest i sent unto countenance chamber, and take perched silken fiend and sitting. He repeating word door name no i all long."
    },
    {
      id: 4,
      icon: <FaMicrochip size={50} className='text-white' />,
      title: "Embedded Systems",
      subtitle: "Forgotten i i whose than the word from. Heart to i my some something faintly of. A nothing tempest i sent unto countenance chamber, and take perched silken fiend and sitting. He repeating word door name no i all long."
    },
   
  ]

  return (
    <div>
      <PageSection
        name="Products"
        title="Products"
        children="Into dared then take bust what maiden i, door the from the so cried of tapping tis entreating. And before Back at obeisance dreaming thee melancholy beguiling the nearly in some. He i tempest evermore a the lady wandering dream."
      />
      <div className='m-6 grid lg:grid-cols-2 gap-12 text-black'>
        {products.map(({ id, icon, title, subtitle }) => (
          <div key={id} className='group  bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col justify-center items-center p-8 text-center'>
          
            <div className='flex flex-col items-center cursor-default justify-center duration-300 group-hover:scale-110'>
            <div className='bg-black rounded-full p-5 m-4'>  {icon}</div>
              <h3 className='font-bold text-3xl my-8'>{title}</h3>
              <p className='text-lg'>{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
