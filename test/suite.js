/* eslint-env mocha */

import '../src/'

import assert from 'assert'
import { plugins } from '@citation-js/core'

const apiTests = [
  {
    name: 'simple',
    input: '0000-0002-4751-4637',
    output: [
      {
        indexed: {
          'date-parts': [[2022, 4, 3]],
          'date-time': '2022-04-03T18:13:52Z',
          timestamp: 1649009632265
        },
        'reference-count': 67,
        publisher: 'PeerJ',
        license: [
          {
            URL: 'https://creativecommons.org/licenses/by/4.0/',
            start: {
              'date-parts': [[2019, 8, 12]],
              'date-time': '2019-08-12T00:00:00Z',
              timestamp: 1565568000000
            },
            'delay-in-days': 0,
            'content-version': 'unspecified'
          }
        ],
        'content-domain': { domain: [], 'crossmark-restriction': false },
        abstract: `<jats:sec>
               <jats:title>Background</jats:title>
               <jats:p>Given the vast number of standards and formats for bibliographical data, any program working with bibliographies and citations has to be able to interpret such data. This paper describes the development of Citation.js (<jats:ext-link xmlns:xlink="http://www.w3.org/1999/xlink" ext-link-type="uri" xlink:href="https://citation.js.org/">https://citation.js.org/</jats:ext-link>), a tool to parse and format according to those standards. The program follows modern guidelines for software in general and JavaScript in specific, such as version control, source code analysis, integration testing and semantic versioning.</jats:p>
            </jats:sec>
            <jats:sec>
               <jats:title>Results</jats:title>
               <jats:p>The result is an extensible tool that has already seen adaption in a variety of sources and use cases: as part of a server-side page generator of a publishing platform, as part of a local extensible document generator, and as part of an in-browser converter of extracted references. Use cases range from transforming a list of DOIs or Wikidata identifiers into a BibTeX file on the command line, to displaying RIS references on a webpage with added Altmetric badges to generating ”How to cite this” sections on a blog. The accuracy of conversions is currently 27% for properties and 60% for types on average and a typical initialization takes 120 ms in browsers and 1 s with Node.js on the command line.</jats:p>
            </jats:sec>
            <jats:sec>
               <jats:title>Conclusions</jats:title>
               <jats:p>Citation.js is a library supporting various formats of bibliographic information in a broad selection of use cases and environments. Given the support for plugins, more formats can be added with relative ease.</jats:p>
            </jats:sec>`,
        DOI: '10.7717/peerj-cs.214',
        type: 'article-journal',
        created: {
          'date-parts': [[2019, 8, 12]],
          'date-time': '2019-08-12T07:36:55Z',
          timestamp: 1565595415000
        },
        page: 'e214',
        published: { 'date-parts': [[2019, 8, 12]] },
        source: 'Crossref',
        'is-referenced-by-count': 1,
        title: 'Citation.js: a format-independent, modular bibliography tool for the browser and command line',
        prefix: '10.7717',
        volume: '5',
        author: [
          {
            given: 'Lars G.',
            family: 'Willighagen',
            sequence: 'first',
            affiliation: [{ name: 'Eindhoven, The Netherlands' }]
          }
        ],
        member: '4443',
        'published-online': { 'date-parts': [[2019, 8, 12]] },
        'container-title': 'PeerJ Computer Science',
        'original-title': [],
        language: 'en',
        link: [
          {
            URL: 'https://peerj.com/articles/cs-214.pdf',
            'content-type': 'application/pdf',
            'content-version': 'vor',
            'intended-application': 'text-mining'
          },
          {
            URL: 'https://peerj.com/articles/cs-214.xml',
            'content-type': 'application/xml',
            'content-version': 'vor',
            'intended-application': 'text-mining'
          },
          {
            URL: 'https://peerj.com/articles/cs-214.html',
            'content-type': 'text/html',
            'content-version': 'vor',
            'intended-application': 'text-mining'
          },
          {
            URL: 'https://peerj.com/articles/cs-214.pdf',
            'content-type': 'unspecified',
            'content-version': 'vor',
            'intended-application': 'similarity-checking'
          }
        ],
        deposited: {
          'date-parts': [[2019, 8, 12]],
          'date-time': '2019-08-12T07:37:06Z',
          timestamp: 1565595426000
        },
        score: 1,
        subtitle: [],
        'short-title': [],
        issued: { 'date-parts': [[2019, 8, 12]] },
        'references-count': 67,
        'alternative-id': ['10.7717/peerj-cs.214'],
        URL: 'http://dx.doi.org/10.7717/peerj-cs.214',
        relation: {
          'has-review': [
            {
              'id-type': 'doi',
              id: '10.7287/peerj-cs.214v0.2/reviews/1',
              'asserted-by': 'object'
            },
            {
              'id-type': 'doi',
              id: '10.7287/peerj-cs.214v0.1/reviews/2',
              'asserted-by': 'object'
            },
            {
              'id-type': 'doi',
              id: '10.7287/peerj-cs.214v0.2/reviews/2',
              'asserted-by': 'object'
            },
            {
              'id-type': 'doi',
              id: '10.7287/peerj-cs.214v0.1/reviews/3',
              'asserted-by': 'object'
            },
            {
              'id-type': 'doi',
              id: '10.7287/peerj-cs.214v0.1/reviews/1',
              'asserted-by': 'object'
            }
          ]
        },
        resource: { primary: { URL: 'https://peerj.com/articles/cs-214' } },
        subject: ['General Computer Science'],
        ISSN: ['2376-5992'],
        'article-number': 'e214'
      },
      {
        indexed: {
          'date-parts': [[2022, 3, 29]],
          'date-time': '2022-03-29T04:21:28Z',
          timestamp: 1648527688024
        },
        posted: { 'date-parts': [[2019, 7, 11]] },
        'group-title': 'PeerJ Preprints',
        'reference-count': 0,
        publisher: 'PeerJ',
        license: [
          {
            URL: 'https://creativecommons.org/licenses/by/4.0/',
            start: {
              'date-parts': [[2019, 7, 11]],
              'date-time': '2019-07-11T00:00:00Z',
              timestamp: 1562803200000
            },
            'delay-in-days': 0,
            'content-version': 'unspecified'
          }
        ],
        'content-domain': { domain: [], 'crossmark-restriction': false },
        abstract: '<jats:p><jats:bold>Background.</jats:bold> Given the vast number of standards and formats for bibliographical data, any program working with bibliographies and citations has to be able to interpret such data. This paper describes the development of Citation.js (https://citation.js.org/), a tool to parse and format according to those standards. The program follows modern guidelines for software in general and JavaScript in specific, such as version control, source code analysis, integration testing and semantic versioning.</jats:p>\n' +
          '        <jats:p><jats:bold>Results.</jats:bold> The result is an extensible tool that has already seen adaption in a variety of sources and use cases: as part of a server-side page generator of a publishing platform, as part of a local extensible document generator, and as part of an in-browser converter of extracted references. Use cases range from transforming a list of DOIs or Wikidata identifiers into a BibTeX file on the command line, to displaying RIS references on a webpage with added Altmetric badges to generating "How to cite this" sections on a blog. The accuracy of conversions is currently 27 % for properties and 60 % for types on average and a typical initialization takes 120 ms in browsers and 1 s with Node.js on the command line.</jats:p>\n' +
          '        <jats:p><jats:bold>Conclusions.</jats:bold> Citation.js is a library supporting various formats of bibliographic information in a broad selection of use cases and environments. Given the support for plugins, more formats can be added with relative ease.</jats:p>',
        DOI: '10.7287/peerj.preprints.27466v2',
        type: 'manuscript',
        created: {
          'date-parts': [[2019, 7, 11]],
          'date-time': '2019-07-11T19:58:57Z',
          timestamp: 1562875137000
        },
        source: 'Crossref',
        'is-referenced-by-count': 0,
        title: 'Citation.js: a format-independent, modular bibliography tool for the browser and command line',
        prefix: '10.7287',
        published: { 'date-parts': [[2019, 7, 11]] },
        author: [
          {
            ORCID: 'http://orcid.org/0000-0002-4751-4637',
            'authenticated-orcid': true,
            given: 'Lars G',
            family: 'Willighagen',
            sequence: 'first',
            affiliation: [
              {
                name: 'Independent researcher, Eindhoven, The Netherlands'
              }
            ]
          }
        ],
        member: '4443',
        'container-title': [],
        'original-title': [],
        link: [
          {
            URL: 'https://peerj.com/preprints/27466v2.pdf',
            'content-type': 'application/pdf',
            'content-version': 'vor',
            'intended-application': 'text-mining'
          },
          {
            URL: 'https://peerj.com/preprints/27466v2.xml',
            'content-type': 'application/xml',
            'content-version': 'vor',
            'intended-application': 'text-mining'
          },
          {
            URL: 'https://peerj.com/preprints/27466v2.html',
            'content-type': 'text/html',
            'content-version': 'vor',
            'intended-application': 'text-mining'
          },
          {
            URL: 'https://peerj.com/preprints/27466v2.pdf',
            'content-type': 'unspecified',
            'content-version': 'vor',
            'intended-application': 'similarity-checking'
          }
        ],
        deposited: {
          'date-parts': [[2019, 12, 24]],
          'date-time': '2019-12-24T01:15:46Z',
          timestamp: 1577150146000
        },
        score: 1,
        subtitle: [],
        'short-title': [],
        issued: { 'date-parts': [[2019, 7, 11]] },
        'references-count': 0,
        URL: 'http://dx.doi.org/10.7287/peerj.preprints.27466v2',
        relation: {
          references: [
            {
              'id-type': 'doi',
              id: '10.7287/peerj.preprints.27466v2/supp-1',
              'asserted-by': 'subject'
            },
            {
              'id-type': 'doi',
              id: '10.7287/peerj.preprints.27466v2/supp-2',
              'asserted-by': 'subject'
            },
            {
              'id-type': 'doi',
              id: '10.7287/peerj.preprints.27466v2/supp-3',
              'asserted-by': 'subject'
            },
            {
              'id-type': 'doi',
              id: '10.7287/peerj.preprints.27466v2/supp-4',
              'asserted-by': 'subject'
            },
            {
              'id-type': 'doi',
              id: '10.7287/peerj.preprints.27466v2/supp-2',
              'asserted-by': 'object'
            },
            {
              'id-type': 'doi',
              id: '10.7287/peerj.preprints.27466v2/supp-1',
              'asserted-by': 'object'
            },
            {
              'id-type': 'doi',
              id: '10.7287/peerj.preprints.27466v2/supp-4',
              'asserted-by': 'object'
            },
            {
              'id-type': 'doi',
              id: '10.7287/peerj.preprints.27466v2/supp-3',
              'asserted-by': 'object'
            }
          ],
          'is-variant-form-of': [
            {
              'id-type': 'doi',
              id: '10.7287/peerj.preprints.27466v1',
              'asserted-by': 'subject'
            }
          ],
          replaces: [
            {
              'id-type': 'doi',
              id: '10.7287/peerj.preprints.27466v1',
              'asserted-by': 'object'
            }
          ]
        },
        resource: { primary: { URL: 'https://peerj.com/preprints/27466v2' } },
        subtype: 'preprint'
      },
      {
        type: 'article',
        id: 'https://doi.org/10.5281/zenodo.1005183',
        author: [
          { family: 'Willighagen', given: 'Lars' },
          { family: 'Willighagen', given: 'Egon' }
        ],
        issued: { 'date-parts': [[2017, 9, 2]] },
        abstract: `Added


\tOptions parameter in parseInput and parseInputAsync
\tOption for max parsing chain length
\tOption to generate parsing chain data in _graph property
\tOption to force type when parsing


Changed


\tOptions API in Cite and Cite.async


Cite(data, outputOptions) // BECOMES Cite(data, { ...parsingOptions, output: outputOptions })


\tAuthor ordinal in Wikidata props is now a property _ordinal instead of an array element
\tParsing invalid dates now returns input as literal date instead of an empty date-parts


Refactored


\tSimplify code to normalise CSL-JSON
\tMock APIs for async tests


Fixed


\tParsing names with lowercase particles now doesn't omit family names
\tBetter error messaging when API/file requests fails`,
        DOI: '10.5281/ZENODO.1005183',
        publisher: 'Zenodo',
        title: 'Larsgw/Citation.Js V0.3.1',
        URL: 'https://zenodo.org/record/1005183',
        copyright: 'MIT License'
      },
      {
        type: 'dataset',
        id: 'https://doi.org/10.5281/zenodo.845934',
        categories: ['conifers', 'datamining'],
        author: [{ family: 'Willighagen', given: 'Lars Gerard' }],
        issued: { 'date-parts': [[2017, 8, 22]] },
        abstract: 'A dataset containing info on matches from full text searches by ContentMine tools, that can be mapped to Wikidata. See README.md.',
        DOI: '10.5281/ZENODO.845934',
        publisher: 'Zenodo',
        title: 'Species Co-Occurrences From Eupmc Articles Related To Pines',
        URL: 'https://zenodo.org/record/845934',
        copyright: 'Creative Commons Attribution 4.0'
      },
      {
        type: 'graphic',
        id: 'https://doi.org/10.17863/cam.12533',
        language: 'en',
        author: [
          { family: 'Arrow', given: 'Tom' },
          { family: 'Matthews', given: 'Charles' },
          { family: 'Molloy', given: 'Jenny' },
          { family: 'Mounce', given: 'Ross' },
          { family: 'Murray-Rust', given: 'Peter' },
          { family: 'Smith-Unna', given: 'Richard' },
          { family: 'Willighagen', given: 'Lars' }
        ],
        contributor: [
          { literal: 'Apollo-University Of Cambridge Repository' },
          { literal: 'Apollo-University Of Cambridge Repository' }
        ],
        issued: { 'date-parts': [[2017, 8, 10]] },
        abstract: 'Poster presentation delivered at Text and Data Mining Symposium held at the University of Cambridge.',
        DOI: '10.17863/CAM.12533',
        publisher: 'Apollo - University of Cambridge Repository',
        title: 'WikiFactMine for Phytochemistry',
        URL: 'https://www.repository.cam.ac.uk/handle/1810/266236',
        copyright: 'All Rights Reserved'
      }
    ]
  }
]

describe('orcid', function () {
  describe('api', function () {
    this.timeout(5000)
    for (const { name, input, output } of apiTests) {
      it(name, async function () {
        const results = await plugins.input.chainAsync(input, { generateGraph: false })

        for (const entry of results) {
          delete entry.reference
        }

        assert.deepStrictEqual(results, output)
      })
    }
  })
})
