import Image from 'next/image';
import starIcon from '../../public/images/icon-star.svg'

function Stars(props) {
    const stars = [];
    for (let index = 0; index < props.number; index++) {
        let star = <Image key={index} src={starIcon} alt="star" className='inline' />
        stars.push(star)
    }

    return (
        <span className='space-x-2'>
            {stars}
        </span>
    )
}

export default Stars