import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Section() {
  return (
// <section>
//   <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
//       <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
//         <Image
//           alt=""
//           src="/banner_img.png"
//           className="absolute inset-0 h-full w-full object-cover"
//           height={400}
//           width={500}
//         />
//       </div>
// 
//       <div className="lg:py-24">
//         <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>
// 
//         <p className="mt-4 text-gray-600">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
//           eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
//           quidem quam repellat.
//         </p>
// 
//         <a
//           href="#"
//           className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
//         >
//           Get Started Today
//         </a>
//       </div>
//     </div>
//   </div>
// </section> 
<div className="flex flex-col h-screen lg:flex-row items-center justify-center my-16 mx-auto space-y-8 lg:space-y-0 lg:space-x-8">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <Image src="/img_jadid.png" width={400} height={400} alt="About Crypto ICO" className=" w-1/2 mx-auto aspect-square overflow-hidden rounded-xl object-cover" />
      </div>
      <div className="about-content-two wow fadeInRight lg:w-1/2 p-4" data-wow-delay=".2s">
        <div className="section-title section-title-two mb-4">
          <span className="sub-title text-[#564dca] capitalize mb-5">ABOUT Crypto ICO</span>
          <h2 className="title text-[45px] font-poppins text-[#030b15] pt-3 mt-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl capitalize leading-[1.26]">
            Bigtech Theme Is The<br />
            Best For Your ICO
          </h2>
        </div>
        <p className="mb-4 text-[#727885] w-4/5 mx-auto">
          The World’s 1st ICO Platform That Offers Rewards and The<br />
          platform helps investors to make easy
        </p>
        <div className="about-list mb-4">
          <ul className="m-0 p-0 space-y-2">
            <li className="flex items-center list-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#564dca] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Mouthwatering leading how real formula also
            </li>
            <li className="flex items-center list-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#564dca] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Locked-in have can mountain thought
            </li>
          </ul>
        </div>
        <Link
            href="#"
            className="inline-flex h-14 w-52 items-center justify-center rounded-md bg-[#564dca] px-8
             text-sm font-medium text-gray-50 shadow transition-colors
             focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Download Document
          </Link>
      </div>
    </div>

 )
}

export default Section