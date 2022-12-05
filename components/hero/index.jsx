import { hero } from "../../constants"

function Hero() {
    return (
        <div className="pr-48">
            <h1 className="text-5xl font-bold text-primaryDarkMagenta leading-11 tracking-tight mb-6">{hero.head}</h1>
            <p className="text-secondaryDarkGrayishMagenta font-medium text-sm2">{hero.body}</p>
        </div>
    )
}

export default Hero