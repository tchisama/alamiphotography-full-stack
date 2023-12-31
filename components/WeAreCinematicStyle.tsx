import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GetText from './GetText'

type Props = {}

const WeAreCinematicStyle = (props: Props) => {
  
  return (
    <div className='flex bg-white md:flex-row flex-col gap-2 md:gap-0 min-h-[80vh] my-20 md:my-40 md:scale-[1.04]'>
        <div className='flex flex-col flex-1 md:bg-[rgba(238,227,222,0.64)] gap-4 md:py-4 items-center py-12 justify-center'>
            <Link href={'/wedding-film'} className='flex flex-col gap-4'>
              <Image alt="" width={400} height={600} className=' w-[300px] bg-[#0002]  max-w-sm aspect-[2/3]  ' src={"https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F186443556P7A0439.jpg?alt=media&token=083ac6a5-eabb-4fce-a097-684f913eb1d4"}  />
              <div  className='uppercase font-thin text-[.5rem]  tracking-[.4rem] hover:opacity-60 font-sans duration-200'>
                <GetText id="we_are_cinematic_Link"/>
              </div>
            </Link>
        </div>
        <div className='flex-[2] md:min-h-[80vh] p-4 flex flex-col bg-white justify-between'>
            <h1 className='text-2xl opacity-75 md:text-7xl tracking-wide md:translate-y-12 md:-translate-x-8'>
              <GetText id="we_are_cinematic_title"/>
            </h1>
            <p className='text-md md:text-xl my-8  md:p-20 md:pl-32'>
              <GetText id="we_are_cinematic_content"/>
            </p>
        </div>
    </div>
  )
}

export default WeAreCinematicStyle