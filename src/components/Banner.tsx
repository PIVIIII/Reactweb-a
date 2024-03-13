import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>Your Travel Partner</h1>
                <h3 className='text-2xl font-serif'>Explore Your World with us</h3>
            </div>
        </div>
    )
} 