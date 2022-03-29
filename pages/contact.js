import React from 'react';
import Navbar from '/components/Navbar'
import Button from '/components/Button'
import Image from 'next/image';

export default function contact() {
  return (
    <>
      <Navbar />
      <h1 sx={{ textAlign: 'center' }}> This is contact page. </h1>
      <Button />
    </>
  )
}
