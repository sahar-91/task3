import Head from "next/head";
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Grid from '../components/Grid';
import Footer from '../components/footer';

export default function Homepage() {
  return (
    <>
        <Head>
        <title>Homepage</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Homepage description" />
      </Head>
    <Navbar />
    <Banner />
    <Grid />
    <Footer />
    </>
  );
}