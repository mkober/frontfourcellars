import Head from 'next/head'
import Image from 'next/image';
import { Gilda_Display } from 'next/font/google'

import Layout from '@/components/Layout';
import styles from '@/styles/pages/about/Team.module.css';
import Link from 'next/link';

const gilda = Gilda_Display({ weight: '400', subsets: ['latin'] });


export default function DryMill() {
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
                <section style={{ width: '90%', minHeight: '700px', margin: '0 auto', position: 'relative' }}>
                    <h1 style={{ 
                        textAlign: 'center', 
                        fontSize: '60px', 
                        margin: '1rem 0 1.5rem 0', 
                        overflowWrap: 'break-word', 
                        lineHeight: '1.2',
                        fontWeight: '300'
                    }}>Dry Mill Collection</h1>
                    <div style={{ height: '200px', aspectRatio: '3/2', position: 'relative', margin: '20px auto' }}>
                        <Image src={'/Home/Dry Mill Collection.png'} alt="image" fill />
                    </div>
                    <section style={{ fontSize: '20px', maxWidth: '1100px', margin: 'auto', textAlign: 'center' }}>
                        Dry Mill Winery & Vineyard was an old-school winery located in the Hunt County of Virginia.  In the Fall of 2022, the owner 
                        decided to commence a well-earned retirement to enjoy family, and sold the company and the tasting room.  Although the tasting 
                        room is no longer, Front Four Cellars wanted to ensure the legacy lived on.  We purchased the winery, including an array of the 
                        quality wines, and are excited by the opportunity to present this collection to our cutomers as we continue to develop Front Four Cellars 
                        into a recognized brand. Discover the Dry Mill legacy today. 
                    </section>
                    <Link href={'https://frontfourcellars.orderport.net/wines/All-Wines'}>
                        <div style={{ textAlign: 'center', margin: '40px 0' }}>
                            <button style={{ 
                                backgroundColor: 'transparent', 
                                border: '2px solid black', 
                                padding: '0.667em 1.333em',
                                fontWeight: '400',
                                lineHeight: '1.1',
                                fontSize: '16px',
                                color: 'black',
                                cursor: 'pointer',
                            }}>See Wines</button>
                        </div>
                    </Link>
                </section>
            </Layout>
        </main>
        </>
    );
}