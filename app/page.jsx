import Hero from "../components/hero"
import Rate from "../components/rate"
import Testimony from "../components/testimony"


export default function Home() {
  return (
    <div className=" font-leagueSpartan h-screen flex items-center mx-56">
      <div className="space-y-12">
        <div className="grid grid-cols-2 ">
          <Hero />
          <Rate />
        </div>
        <Testimony />
      </div>
    </div>
  )
}
