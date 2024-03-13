import Navbar from "@/components/shared/Navbar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <Navbar />
      <div className="">
        <div className="">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout