import Head from 'next/head';
import 'material-icons/iconfont/material-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from '@/components/HomePage';


function Home() {

  if (typeof window !== 'undefined') {
    console.log(window.innerWidth);
  }

  return (
    <>
      <Head>
        <title>
          Logics Zon Web Services | Web Designing | Web Development | React Developer| React Native |PHP Developer | WordPress Developer | Laravel Developer | Graphic Designing
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&amp;display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" cross0rigin='true'></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500&display=swap" rel="stylesheet"></link>
      </Head>
      <HomePage />
      
    </>
  )
}
export default Home;