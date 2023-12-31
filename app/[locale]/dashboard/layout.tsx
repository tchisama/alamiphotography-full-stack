import DashboardNavbar from '@/components/DashboardNavbar'
import React from 'react'
import Provider from './Provider'

type Props = {
    children: React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <Provider>
    <div className='flex bg-primary h-screen font-sans-important'>
        <DashboardNavbar/>
        <div className='flex-1  py-2 bg-white font-sans-important overflow-y-auto'>
            {children}
        </div>
    </div>
    </Provider>
  )
}

export default layout