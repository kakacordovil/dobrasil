import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <SEO title={process.env.NEXT_PUBLIC_SITE_TITLE} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
