import Logo from './components/Logo'

export default {
  repository: 'https://github.com/shuding/nextra', // project repo
  docsRepository: 'https://github.com/shuding/nextra', // docs repo
  branch: 'master', // branch of docs
  path: '/', // path of docs
  titleSuffix: ' – ReactBricks',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: <>© {new Date().getFullYear()} F2 .net engineering s.r.l.</>,
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <div className="w-48">
      <Logo />
    </div>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#f65b8e" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="ReactBricks - React Blocks-based CMS" />
      <meta name="og:description" content="ReactBricks - React Blocks-based CMS" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ReactBricks" />
      <meta name="og:title" content="ReactBricks - React Blocks-based CMS" />
      <meta name="apple-mobile-web-app-title" content="ReactBricks" />
      <link rel="icon" href="/favicon-32x32.png"></link>
    </>
  ),
}
