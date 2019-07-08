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

Cite
  .async('0000-0000-0000-0000')
  .then(cite => cite.format( ... )
```
