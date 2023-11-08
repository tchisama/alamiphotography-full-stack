import Link from 'next/link'
import React from 'react'

type Props = {}

const MyWork = (props: Props) => {
  return (
    <div className='my-40 fontcharm'>
        <h1 className='text-center text-3xl md:text-5xl uppercase my-20 '>Check out my work</h1>
        <div className='flex md:flex-row flex-col gap-8  fontcharm'>

            <Link href={'/weddings'} className='flex-1   group flex flex-col items-center gap-4 text-2xl '>
                <div className='relative  overflow-hidden'>
                    <img className=' group-hover:blur-0 filter group-hover:scale-105 duration-200' src='https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Confetti-1st-Edits-1-597x894.jpeg?x15971'></img>
                    <div className='absolute w-full h-full border-[1px] top-0 left-0 border-white scale-95 rounded-lg group-hover:scale-90 duration-200'></div>
                </div>
                <h2 className='text-4xl uppercase'>Weddings</h2>
            </Link>

            <Link href={'/weddings'} className='flex-1  group flex flex-col items-center gap-4 text-2xl '>
                <div className='relative overflow-hidden'>
                    <img className='  group-hover:blur-0 filter group-hover:scale-105 duration-200' src='https://www.niallscullyphotography.com/wp-content/uploads/2023/03/Film-Shots-2-600x894.jpg?x15971'></img>
                    <div className='absolute w-full h-full border-[1px] top-0 left-0 border-white scale-95 rounded-lg group-hover:scale-90 duration-200'></div>
                </div>
                <h2 className='text-4xl uppercase'>Films</h2>
            </Link>

            <Link href={'/weddings'} className='flex-1 group flex flex-col items-center gap-4 text-2xl '>
                <div className='relative  overflow-hidden'>
                    <img className='  group-hover:blur-0 filter group-hover:scale-105 duration-200' src='https://www.niallscullyphotography.com/wp-content/uploads/2022/12/Dave-Anna-3-597x894.jpg?x15971'></img>
                    <div className='absolute w-full h-full border-[1px] top-0 left-0 border-white scale-95 rounded-lg group-hover:scale-90 duration-200'></div>
                </div>
                <h2 className='text-4xl uppercase'>ENGAGEMENTS</h2>
            </Link>

        </div>
    </div>
  )
}

export default MyWork