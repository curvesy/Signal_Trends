import Image from 'next/image';
import React from 'react'

function Hero() {
  return (
    <div className='border h-screen'>
    <div className="absolute inset-0 bottom-2 h-screen">
      <div className="h-screen bg-cover bg-no-repeat">
        <div className="banner-bg-two"></div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10 h-screen">
      <div className="w-full h-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-14 relative z-[1] pt-[100px] pb-0 px-0">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-x-8">
              <h1 className="text-5xl text-white font-bold tracking-tighter sm:text-xl md:text-5xl">
                World’s Biggest ICO Cryptocurrency
                <br />
                Platform for you
              </h1>
            </div>
          </div>
          <Image
            src="/banner_img.png"
            width={600}
            height={1000}
            alt="Hero"
            className="mx-auto aspect-[2/1] h-[359px] object-center"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero