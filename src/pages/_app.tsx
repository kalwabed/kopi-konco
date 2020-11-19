import type { AppProps } from 'next/app'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { NextSeo } from 'next-seo'

import theme from '@/utils/theme'
import { AppProvider } from '@/components/helpers'
import Layout from '@/components/layout'
// eslint-disable-next-line import/no-named-as-default-member
import siteConfig from 'site-config'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter()
  const url = siteConfig.baseUrl + route.asPath
  return (
    <AppProvider>
      <Layout>
        <NextSeo
          title={siteConfig.title}
          description={siteConfig.description}
          canonical={url}
          openGraph={{
            url,
            title: siteConfig.title,
            site_name: `${siteConfig.title} Website`,
            type: 'website',
            description: siteConfig.description
          }}
          twitter={{ cardType: 'summary_large_image', handle: '@kalwabed_rizki', site: siteConfig.baseUrl }}
        />
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: ${theme.colors.info};

          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;

          width: 100%;
          height: 2px;
        }

        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px ${theme.colors.info}, 0 0 5px ${theme.colors.info};
          opacity: 1;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
        }

        /* Remove these to get rid of the spinner */
        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }

        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;

          border: solid 2px transparent;
          border-top-color: ${theme.colors.info};
          border-left-color: ${theme.colors.info};
          border-radius: 50%;

          -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }

          100% {
            -webkit-transform: rotate(360deg);
          }
        }

        @keyframes nprogress-spinner {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </AppProvider>
  )
}
export default MyApp
