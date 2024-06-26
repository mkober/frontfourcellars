import Head from 'next/head'
import Image from 'next/image';
import { Gilda_Display } from 'next/font/google'

import Layout from '@/components/Layout';
import styles from '@/styles/pages/about/Philosophy.module.css';

const gilda = Gilda_Display({ weight: '400', subsets: ['latin'] });


export default function Team() {
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
                    <div>
                        <h1 style={{ 
                            textAlign: 'center', 
                            fontSize: '60px', 
                            margin: '1rem 0 1.5rem 0', 
                            overflowWrap: 'break-word', 
                            lineHeight: '1.2',
                            fontWeight: '300'
                        }}>Our Philosophy</h1>
                        <p style={{ 
                            maxWidth: '1000px',
                            margin: '1.5em auto',
                            lineHeight: '1.5', 
                            letterSpacing: '0.02em', 
                            overflowWrap: 'break-word',
                            textAlign: 'center',
                            fontSize: '22px',
                        }}>
                            The objective of our Urban Winery is to provide carefully-crafted wines made from locally sourced grapes and fruit that are distinctive in both 
                            taste and quality. But we don&apos;t just want to produce exceptional wines, we want to provide an experience. Since drinking wine is a social event, 
                            we believe a good wine can help people connect with each other and the places they love. Because of that, all of our wines have a story. Each one 
                            of our wines is purposely named for a special place in our life. We hope you find the joy of people and places in every bottle.  
                        </p>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image src="/About/ourphilosophy.png" alt="humble beginning" fill />
                    </div>
                </section>
            </Layout>
        </main>
        </>
    );
}