const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = phase => {
  const reactStrictMode = true
  const isDeveloment = phase === PHASE_DEVELOPMENT_SERVER
  const env = {
    SITE_NAME: "Blog de Eliud",
    ApiBlog: (() => {
      if (isDeveloment) {
        return "https://jsonplaceholder.typicode.com"
      } else {
        return "https://eliudcesar.netlify.app/api"
      }
    })()
  }

  return {
    env
  }
}
