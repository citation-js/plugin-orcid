## Install

```js
npm install @citation-js/plugin-orcid
```

Note: this plugin requires `@citation-js/plugin-doi`, so be sure to install that one as well if you have not already. It is automatically included in the `citation-js` package.

## Use

Install the plugin by `require`-ing it:

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

  For example, visit <a href="https://orcid.org/0000-0000-0000-0000">my ORCID profile</a> instead!
</div>
```
