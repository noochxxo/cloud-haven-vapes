import Navbar from "@/components/shared/Navbar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="">
        <div className="pt-[4.75rem] lg:pt-[10rem] overflow-hidden">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout