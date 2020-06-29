module.exports = {
  siteName: 'zarkopafilis',
  siteUrl: 'https://zarkopafilis.github.io',
  titleTemplate: '%s | Theodoros Ntakouris',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-139665432-1'
      }
    }
  ]
}
