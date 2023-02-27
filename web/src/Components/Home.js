import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Home() {
  return (
    <>
    <div className='flex'>
        <Sidebar />
        {/* <Header /> */}
    </div>
    </>
  );
}
