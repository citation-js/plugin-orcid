# @citation-js/plugin-orcid

This plugin adds support for exporting references from an [ORCID](https://orcid.org/) record.

[![NPM version](https://img.shields.io/npm/v/@citation-js/plugin-orcid.svg)](https://npmjs.org/package/@citation-js/plugin-orcid)
[![Codecov](https://img.shields.io/codecov/c/gh/citation-js/plugin-orcid)](https://app.codecov.io/gh/citation-js/plugin-orcid)
[![NPM total downloads](https://img.shields.io/npm/dt/@citation-js/plugin-orcid.svg)](https://npmcharts.com/compare/@citation-js%2Fplugin-orcid?minimal=true)
![License](https://img.shields.io/npm/l/@citation-js/plugin-orcid.svg)

## Install

```js
npm install @citation-js/plugin-orcid @citation-js/plugin-doi
```

Note: this plugin requires `@citation-js/plugin-doi`, so be sure to install that one as well if you have not already. It is automatically included in the `citation-js` package.

## Use

```js
import '@citation-js/plugin-orcid'
```

Or install the plugin by `require`-ing it:

```js
require('@citation-js/plugin-orcid')
```

## Formats

Formats and other features added by this plugin.

### Input

#### ORCID IDs

Create a bibliography from an ORCID ID:

```js
const { Cite } = require('@citation-js/core')
require('@citation-js/plugin-orcid')

Cite
  .async('0000-0000-0000-0000')
  .then(cite => cite.format( ... ))
```

You can also use the [Replacer](https://github.com/citation-js/replacer) API, by downloading [a bundle](https://juniper-coat.glitch.me) with the Replacer functionality, the CSL output plugin and this plugin ([download link](http://juniper-coat.glitch.me/bundle?r=on&p=csl&p=pubmed)):

```html
<!-- Please *download* the file linked above, since there is no built-in caching -->
<script src="bundle.js"></script>

<div class="citation-js" data-input="0000-0000-0000-0000" data-output-format="bibliography" data-output-template="apa">
  Placeholder markup for if Citation.js does not work.

  For example, link to <a href="https://orcid.org/0000-0000-0000-0000">your ORCID profile</a> instead!
</div>
```
