import Image from "next/image"

function Card(props) {
    return (
        <div className={`bg-primaryDarkMagenta rounded-xl px-8 py-9 relative ${props.position}`}>
            <div className="flex mb-6">
                {/* <Image src={`/images/${props.image}`} alt="avatar" width={80} height={80} className="rounded-full" /> */}
                <img src={`/images/${props.image}`} alt="avatar" className="rounded-full w-10 h-10" />
                <div className="ml-5">
                    <h1 className="text-white font-bold -mb-1">{props.name}</h1>
                    <h6 className="text-primarySoftPink font-normal ">{props.status}</h6>
                </div>
            </div>
            <p className="text-white text-sm2">" {props.statement} "</p>
        </div>
    )
}

export default Card