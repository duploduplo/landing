# Safely Pet landing page

This branch contains the new landing page for our project, simplified but
updated with all the information we need and developed for our MVP.
The landing page will be localized in a few languages and the content is
structured already to allow it easily

## Localization

Localization is done in a pretty rough way, but since we have static content it should be ok.

To localize the website copy the current version of the `en` folder, that
contains the english version, into a separate folder named with the
[ISO Alpha-2](https://www.iso.org/obp/ui/) name of the language, then translate
the content.

After this open `assets/js/localization.js` and add a `case` statement for the
new localized content inside the `getNewPath` function.

The boring part is to add to every existing version the menu item to
allow user's language selection.

Flags for the link are added using [this](https://github.com/lipis/flag-icon-css)
small library: just copy one of the existing one and change the `flag-icon-<language>`
class in the span, using the appropriate ISO alpha-2 code