import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name: 'google-site-verification', content: 'c55rvD3il223DwPOIR5V35Y5qKOAumJdirtFVI0T31Y' },
          ]}
        >
          <html lang="en" />

          {/* inline script elements */}
          <script type="application/ld+json">{`
          var MTIProjectId='f2fb82fc-799e-44a7-ab5f-8f561dbc72c3';
            (function() {
              var mtiTracking = document.createElement('script');
              mtiTracking.type='text/javascript';
              mtiTracking.async='true';
               mtiTracking.src='mtiFontTrackingCode.js';
              (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild( mtiTracking );
            })();
          `}</script>

        {/* inline script elements */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-125265976-1"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-125265976-1');
        `}</script>

        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
