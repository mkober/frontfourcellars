import Head from 'next/head'
import Image from 'next/image';
import { Gilda_Display } from 'next/font/google'

import Layout from '@/components/Layout';
import EmblaCarousel from '@/components/EmblaCarouselNH';
import { EmblaOptionsType } from 'embla-carousel-react';

import styles from '@/styles/pages/NewHampshire.module.css';

const gilda = Gilda_Display({ weight: '400', subsets: ['latin'] });

const emblaOptions: EmblaOptionsType = {
    //slidesToScroll: 'auto',
    align: 'start',
    containScroll: 'trimSnaps',
}

const slides = [
    {
        image: '/About/New-Hampshire/750cb5ed552ad69e43ee569db5c364b9.jpg',
        title: '',
        description: '',
        url: '',
    },
    {
        image: '/About/New-Hampshire/4916-Wolfeboro-Wolfeboro-Station.jpg',
        title: '',
        description: '',
        url: '',
    },
    {
        image: '/About/New-Hampshire/Concert+In+Cate+Park.jpg',
        title: '',
        description: '',
        url: '',
    },
    {
        image: '/About/New-Hampshire/DSC00595.jpg',
        title: '',
        description: '',
        url: '',
    },
    {
        image: '/About/New-Hampshire/Molly-the-Mount-med.jpg',
        title: '',
        description: '',
        url: '',
    },
    {
        image: '/About/New-Hampshire/shutterstock-202987003.webp',
        title: '',
        description: '',
        url: '',
    },
]

export default function NewHampshire() {
    return (
        <>
        <Head>
            <title>Front Four Cellars</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={gilda.className}>
            <Layout>
                <section className={styles.container}>
                    <div style={{ width: '100%', aspectRatio: '4/1', position: 'relative' }}>
                        <Image src='/About/Wolfeboro scene.jpg' alt="image" fill />
                    </div>
                    <div style={{ width: '30%', aspectRatio: '2/1.5', position: 'relative', margin: '0 auto 20px auto', transform: 'translateY(-50%)', minWidth: '200px' }}>
                        <Image src='/About/tasting room sign 1 (2).png' alt="image" fill />
                    </div>
                    {/*<div style={{ maxHeight: '600px', overflow: 'hidden', position: 'relative' }}>
                        <div style={{ width: '100%', aspectRatio: '2/1', position: 'relative' }}>
                            <Image src='/About/Wolfeboro tasting room.png' alt="image" fill />
                        </div>
                    </div>*/}
                    <h1 style={{ 
                        textAlign: 'center', 
                        fontSize: '60px', 
                        margin: '0',
                        overflowWrap: 'break-word',
                        marginTop: '-2em',
                        lineHeight: '1.2',
                        fontWeight: '300'
                    }}>Welcome to New Hampshire</h1>
                    <p style={{ 
                        maxWidth: '1000px',
                        margin: '1.5em auto',
                        lineHeight: '1.5', 
                        letterSpacing: '0.02em', 
                        overflowWrap: 'break-word',
                        fontSize: '22px',
                        textAlign: 'center',
                    }}>
                        Why New Hampshire? Because we love New England!  Michael grew up in NH and Julia vacationed in New England every summer from the time she was born. 
                        They even honeymooned in New England to view the breathtaking Fall foliage, taking an extended stop in Wolfeboro where, like Michael, Julia fell in 
                        love with the town and the people.
                    </p>
                    <EmblaCarousel slides={slides} options={emblaOptions} />
                    <section className={styles.aboutContainer}>
                        <div style={{ aspectRatio: '1', position: 'relative', width: '100%' }}>
                            <Image src='/About/New-Hampshire/Lake-Map-Wolfeboro.jpg' alt='map' fill />
                        </div>
                        <p style={{ 
                            maxWidth: '1000px',
                            margin: '2em auto',
                            lineHeight: '1.5', 
                            letterSpacing: '0.02em', 
                            overflowWrap: 'break-word',
                            fontSize: '22px',
                        }}>
                            <strong>About Wolfeboro</strong>
                            <br/>
                            Wolfeboro, a quintessential and cozy New England community surrounded by forests and mountains, is nestled on the eastern shore of Lake Winnipesaukee. 
                            In addition to being recognized as the &quot;Oldest Summer Resort in America,&quot; Wolfeboro is a beloved home for full-time residents as well as a year-round 
                            vacation destination for beach-lovers and snow bunnies alike. Fine neighborhoods with big, old homes, a beautifully restored former train station that 
                            houses the Wolfeboro Chamber of Commerce and a nice mix of laid-back arts and crafts and book stores, bakeries and cafes and a truly tranquil and scenic 
                            backyard to the downtown -- the magnificent lake Winnie. 
                        </p>
                    </section>
                    <section className={styles.aboutContainer}>
                        <p style={{ 
                            maxWidth: '1000px',
                            margin: '2em auto',
                            lineHeight: '1.5', 
                            letterSpacing: '0.02em', 
                            overflowWrap: 'break-word',
                            fontSize: '22px',
                        }}>
                            <strong>Our Tasting Room</strong>
                            <br/>
                            Located in the heart of Wolfeboro within walking distance from the Mt. Washington boat dock, our new tasting room offers tastings, 
                            flights, glasses and bottles of a wide variety of our Virginia wines. Come check us out, grab a bag of popcorn, or stop in for a light snack. 
                        </p>
                    </section>
                    <section style={{ textAlign: 'center', lineHeight: '1.5em' }}>
                        <strong style={{ fontSize: '22px' }}>Wine Menu</strong>
                        <div>Wine Tasting <strong>$18</strong></div>
                        <div>Red, White, or Mixed Flight <strong>$18</strong></div>
                        <div>Glasses & Bottles <strong><em>varies*</em></strong></div>
                        <div style={{ fontSize: '14px' }}><em>*Check back often for weekly specials</em></div>
                    </section>
                    <section className={styles.menu}>
                        <Image src='/About/New-Hampshire/menu.png' alt='menu' fill />
                        {/*<div style={{ fontSize: '22px', marginBottom: '10px' }}><strong>Food Offerings</strong></div>
                        <div style={{ textDecoration: 'underline', fontSize: '18px' }}>Charcuterie Boards</div>
                        <div>Small (serves 2-4) <strong>$24</strong></div>
                        <div>Medium (serves 5-8) <strong>$38</strong></div>
                        <div style={{ textDecoration: 'underline', fontSize: '18px' }}>Fruit Plate <strong>$15</strong></div>
                        <div style={{ fontSize: '14px' }}><em>A selection of seasonal fresh fruit, dried fruits, and nuts</em></div>
                        <div style={{ textDecoration: 'underline', fontSize: '18px' }}>Cheese Plate <strong>$18</strong></div>
                        <div style={{ fontSize: '14px' }}><em>A selection of three cheeses with crackers</em></div>
                        <div style={{ textDecoration: 'underline', fontSize: '18px' }}>Party Paddle <strong>$75</strong></div>
                        <div style={{ fontSize: '12px' }}><em>Enough to feed 10+</em></div>
                    <div style={{ fontSize: '14px' }}><em>A selection of cheeses, cured meats, crackers, seasonal fruit, dried fruits, nuts & homemade jams.</em></div>*/}
                        {/*<div>Party Paddle (serves 10+) <strong>$60</strong></div>
                        <div style={{ textDecoration: 'underline', fontSize: '18px', marginTop: '10px' }}>Flatbreads <strong>$15</strong></div>
                        <div>Margherita Flatbread</div>
                        <div style={{ fontSize: '14px' }}><em>Tomato slices, Mozzarella cheese, and fresh basil topped with Balsamic glaze</em></div>
                        <div>BBQ Chicken Flatbread</div>
                        <div style={{ fontSize: '14px' }}><em>Chicken, barbecue sauce, cheese, cilantro, and red onion</em></div>
                    <div style={{ marginTop: '10px' }}>Fruit Tray <strong>$12</strong></div>*/}
                    </section>
                </section>
            </Layout>
        </main>
        </>
    );
}