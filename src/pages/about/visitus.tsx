import Head from 'next/head'
import Image from 'next/image';
import { Gilda_Display } from 'next/font/google'

import Layout from '@/components/Layout';
import styles from '@/styles/pages/about/Team.module.css';

const gilda = Gilda_Display({ weight: '400', subsets: ['latin'] });


export default function VisitUs() {
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
                    }}>Vist New Hampshire</h1>
                    <div style={{ height: '200px', aspectRatio: '3/2', position: 'relative', margin: '20px auto' }}>
                        <Image src={'/placeholder.jpg'} alt="image" fill />
                    </div>
                </section>
            </Layout>
        </main>
        </>
    );
}