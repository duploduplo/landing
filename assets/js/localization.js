/**
 * Redirect the browser to the correct localized page if available
 * else default to english version
 */

/**
 * Create the new path for the browser address
 */
function getNewPath(lang) {
  var _path

  switch (lang) {
    case "it":
      _path = "/it/"
      break
      case "fi":
      _path = "/fi/"
      break
    default:
      _path = "/en/"
  }
  return _path
}

(function () {
  // Get the browser language
  lang = navigator.languages
    ? navigator.languages[0]
    : (navigator.language || navigator.userLanguage)

  // get the first part of the language string so it can be used to redirect
  // the browser to the localized content folder
  lang = lang.split("-")[0]

  // get the new path from the detected language (if any)
  newPath = getNewPath(lang)

  // if a new path has been built redirect the browser there
  if (newPath) {
    window.location.replace(newPath)
  }
})()