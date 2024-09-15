import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

import { useRouter } from 'next/router'
import _meta from './pages/_meta.json'

const config: DocsThemeConfig = {
  logo: <>
	<img src='../images/udx-logo-yellow.png' style={{ width: '32px' }}></img><span className="nx-ml-2 nx-font-bold hidden md:inline">{_meta.brand_name}</span>
  </>,
  project: {
    link: _meta.brand_docs_github_link,
  },
  chat: {
    link: _meta.brand_support_link,
  },
  docsRepositoryBase: _meta.brand_docs_github_link,
  footer: {
    text: `${_meta.brand_name} Docs`,
  },
  // Remove default - Nextra from end of title to our own
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: `%s – ${_meta.brand_name}`
      }
    }
  }
}

export default config
