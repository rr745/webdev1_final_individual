import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import styles from '../components/layout.module.css';
// import utilStyles from '../styles/utils.module.css';
// import privacyStyles from '../styles/utils.module.css';
import Signup from '../components/signup';
import ProfileHead, { ProfileBody } from './profile';
import React, { useEffect } from 'react';
import PrivacyPolicy from '../pages/privacy';

export default function Home() {
  return (
    <Layout home>
      <Head>
        {/* Existing head content if any... */}

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9FCNEJLFC6"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9FCNEJLFC6');
            gtag('config', 'GA_MEASUREMENT_ID', {
              'anonymize_ip': true
            });
          `
        }}>
        </script>
      </Head>
      {/* <section className={utilStyles.headingMd}> */}
      <ProfileHead />
      <ProfileBody />
      <Signup />
      {/* </section> */}
      <br/>
      <Link href="/privacy" className={styles.privacyPolicy}>
          Privacy Policy
        </Link>
    </Layout>
  );
}
