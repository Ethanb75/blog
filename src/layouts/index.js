import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import '../css/main.css';





const TemplateWrapper = ({ children }) => (
  <div className="pageWrap">
    {() => {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });
      }
    }}
    <Helmet
      title="Home | Gatsby + Netlify CMS"
      script={[
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]}
    />
    <Navbar />
    <div className="pageContent">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
