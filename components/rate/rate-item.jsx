import Image from 'next/image'
import Stars from './stars'

function RateItem(props) {
    return (
        <div className={`py-3 px-8 flex bg-purple-400 bg-opacity-10 rounded-xl ${props.margin}`}>
            <Stars number={5} />
            <h1 className='ml-6 font-bold text-primaryDarkMagenta text-sm2'>{props.text}</h1>
        </div>
    )
}

export default RateItem