"use client";
import React from 'react'
import Typewriter from 'typewriter-effect';
type Props = {}

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter 
    options={{
        loop: true,
    }}
    onInit={(typewriter) => {
        typewriter.typeString('Awesome Productivity.')
        .pauseFor(1000).deleteAll()
        .typeString('AI Powered Insight')
        .start();
    }}
    />
  )
}

export default TypewriterTitle