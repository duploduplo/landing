# Safely Pet landing page

This branch contains the new landing page for our project, simplified but
updated with all the information we need and developed for our MVP.
The landing page will be localized in a few languages and the content is
structured already to allow it easily.

## Theming and layouts

The website is based upon [Alpha by HTML5UP](https://html5up.net/uploads/demos/alpha/);
On the link you can find the demo as well as layout pages. The theme is free to download
so if we ever need to create new pages we can just download, copy and edit.

## Localization

Localization is done in a pretty rough way, but since we have static content
served from gh pages it should be ok and I didn't find another way.

There are 3 steps needed:

* Copy the current `en` version to a dedicated language folder and translate your content (duh!)
* Inside `assets/js/localization.js` add the correct `case`s to the switch statement in `getNewPath()`
* _Boring part_: edit the menu on each version, adding your new language

For naming convention and flag names use [ISO Alpha-2](https://www.iso.org/obp/ui/) names.
Flags for the link are added using [this](https://github.com/lipis/flag-icon-css) library.

At the moment the detection uses the first part of the language name, so `en-US` and `en` are read as `en`.

The default language is set to _English_.

## TODO

- [x] Integrate mailchimp
- [x] Add Google Analytics from previous version
- [ ] Check and validate content
- [ ] Cleanup page code
- [ ] Remove unused pages from `en`
- [ ] Translate in Italian
- [ ] Translate in Suomi
