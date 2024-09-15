import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <>
	<img src='/images/udx-logo-yellow.png' style={{ width: '32px' }}></img><span className="nx-ml-2 nx-font-bold hidden md:inline">UdyogX Docs</span>
  </>,
  project: {
    link: "https://github.com/cyberpassion/udyogx-docs",
  },
  /*chat: {
    link: "https://support.udyogx.in",
  },*/
  docsRepositoryBase: "https://github.com/cyberpassion/udyogx-docs",
  footer: {
    text: "UdyogX Docs",
  },
  // Remove default - Nextra from end of title to our own
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: "%s – UdyogX"
      }
    }
  }
}

export default config
