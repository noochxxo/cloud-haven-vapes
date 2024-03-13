import Image from "next/image"

const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[0.3]">
        <Image 
          src="/assets/mobile-smoke-bg.jpg"
          alt=""
          width={4000}
          height={5000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default HamburgerMenu