import React from 'react'
import Section from './Section'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <Section
      id='hero'
      className='
        pt-[12rem]
        -mt-[5.25rem]
      '
    >
      <div className='container relative'>
        <div
          className='
            relative
            z-1
            max-w-[62rem]
            mx-auto
            text-center
            mb-[4]
            md:mb-20
            lg:mb-6
          '
        >
          <h1
            className='
              mb-6
              h1
            '
          >Elevate Your Vaping Experience
            with {' '}
            <span className='inline-block relative'>
              Cloud Haven Vapes
              {/* TODO: Add a underline image */}
            </span>
          </h1>
          <p
            className='
              body-1
              max-w-3xl
              mx-auto
              mb-6
              lg:-8
            '
          >
             Explore our curated collection and find your new favorite vape today. Ready to embark on a cloud-chasing adventure? Start browsing now!"
          </p>
          <Link href={"/products"}>
            <Button>
              View Products
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}

export default Hero