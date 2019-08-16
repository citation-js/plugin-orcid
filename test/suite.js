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
        DOI: '10.7287/peerj.preprints.27466',
        'indexed': {
          'date-parts': [
            [
              2019,
              7,
              11
            ]
          ],
          'date-time': '2019-07-11T20:40:40Z',
          'timestamp': 1562877640914
        },
        'posted': {
          'date-parts': [
            [
              2019,
              7,
              11
            ]
          ]
        },
        'group-title': 'PeerJ Preprints',
        'reference-count': 0,
        'publisher': 'PeerJ',
        'license': [
          {
            'URL': 'https://creativecommons.org/licenses/by/4.0/',
            'start': {
              'date-parts': [
                [
                  2019,
                  7,
                  11
                ]
              ],
              'date-time': '2019-07-11T00:00:00Z',
              'timestamp': 1562803200000
            },
            'delay-in-days': 0,
            'content-version': 'unspecified'
          }
        ],
        'content-domain': {
          'domain': [],
          'crossmark-restriction': false
        },
        'abstract': '<jats:p><jats:bold>Background.</jats:bold> Given the vast number of standards and formats for bibliographical data, any program working with bibliographies and citations has to be able to interpret such data. This paper describes the development of Citation.js (https://citation.js.org/), a tool to parse and format according to those standards. The program follows modern guidelines for software in general and JavaScript in specific, such as version control, source code analysis, integration testing and semantic versioning.</jats:p>\n        <jats:p><jats:bold>Results.</jats:bold> The result is an extensible tool that has already seen adaption in a variety of sources and use cases: as part of a server-side page generator of a publishing platform, as part of a local extensible document generator, and as part of an in-browser converter of extracted references. Use cases range from transforming a list of DOIs or Wikidata identifiers into a BibTeX file on the command line, to displaying RIS references on a webpage with added Altmetric badges to generating \"How to cite this\" sections on a blog. The accuracy of conversions is currently 27 % for properties and 60 % for types on average and a typical initialization takes 120 ms in browsers and 1 s with Node.js on the command line.</jats:p>\n        <jats:p><jats:bold>Conclusions.</jats:bold> Citation.js is a library supporting various formats of bibliographic information in a broad selection of use cases and environments. Given the support for plugins, more formats can be added with relative ease.</jats:p>',
        'type': 'manuscript',
        'created': {
          'date-parts': [
            [
              2019,
              1,
              5
            ]
          ],
          'date-time': '2019-01-05T15:53:58Z',
          'timestamp': 1546703638000
        },
        'source': 'Crossref',
        'is-referenced-by-count': 0,
        'title': 'Citation.js: a format-independent, modular bibliography tool for the browser and command line',
        'prefix': '10.7287',
        'author': [
          {
            'ORCID': 'http://orcid.org/0000-0002-4751-4637',
            'authenticated-orcid': true,
            'given': 'Lars G',
            'family': 'Willighagen',
            'sequence': 'first',
            'affiliation': [
              {
                'name': 'Independent researcher, Eindhoven, The Netherlands'
              }
            ]
          }
        ],
        'member': '4443',
        'container-title': [],
        'original-title': [],
        'link': [
          {
            'URL': 'https://peerj.com/preprints/27466.pdf',
            'content-type': 'application/pdf',
            'content-version': 'vor',
            'intended-application': 'text-mining'
          },
          {
            'URL': 'https://peerj.com/preprints/27466.xml',
            'content-type': 'application/xml',
            'content-version': 'vor',
            'intended-application': 'text-mining'
          },
          {
            'URL': 'https://peerj.com/preprints/27466.html',
            'content-type': 'text/html',
            'content-version': 'vor',
            'intended-application': 'text-mining'
          },
          {
            'URL': 'https://peerj.com/preprints/27466.pdf',
            'content-type': 'unspecified',
            'content-version': 'vor',
            'intended-application': 'similarity-checking'
          }
        ],
        'deposited': {
          'date-parts': [
            [
              2019,
              7,
              11
            ]
          ],
          'date-time': '2019-07-11T19:59:04Z',
          'timestamp': 1562875144000
        },
        'score': 1,
        'subtitle': [],
        'short-title': [],
        'issued': {
          'date-parts': [
            [
              2019,
              7,
              11
            ]
          ]
        },
        'references-count': 0,
        'URL': 'http://dx.doi.org/10.7287/peerj.preprints.27466',
        'relation': {
          'references': [
            {
              'id-type': 'doi',
              'id': '10.7287/peerj.preprints.27466v2/supp-1',
              'asserted-by': 'subject'
            },
            {
              'id-type': 'doi',
              'id': '10.7287/peerj.preprints.27466v2/supp-2',
              'asserted-by': 'subject'
            },
            {
              'id-type': 'doi',
              'id': '10.7287/peerj.preprints.27466v2/supp-3',
              'asserted-by': 'subject'
            },
            {
              'id-type': 'doi',
              'id': '10.7287/peerj.preprints.27466v2/supp-4',
              'asserted-by': 'subject'
            }
          ]
        },
        'subtype': 'preprint'
      },
      {
        'type': 'article',
        // 'id': 'https://doi.org/10.5281/zenodo.1005176',
        'author': [
          {
            'family': 'Willighagen',
            'given': 'Lars'
          },
          {
            'family': 'Willighagen',
            'given': 'Egon'
          },
          {
            'family': 'Badger',
            'given': 'The Gitter'
          },
          {
            'family': 'Čermák',
            'given': 'Petr'
          },
          {
            'family': 'Wienke',
            'given': 'Johannes'
          }
        ],
        'issued': {
          'date-parts': [
            [
              2018,
              11,
              2
            ]
          ]
        },
        'abstract': "Added\n\n[meta] More test work\n<code>util.Register</code>: Alias <code>remove</code> to <code>delete</code>\n<code>input/@wikidata</code>: Support 'stated as' (P1932) qualifier, if possible preferring that over fetching author labels (#131)\n<code>output/@csl</code>: Bibliography <code>nosort</code> option\n<code>input/@bibtex</code>: Support for comma-delimited entries (#157)\n\nChanged\n\nDeprecated wrapper CSL locale and template methods\n\nFixed\n\n<code>output/@csl</code>: Affixes now work reliably for all formats (#84)",
        'DOI': '10.5281/zenodo.1005176',
        'publisher': 'Zenodo',
        'title': 'Larsgw/Citation.Js: V0.4.0-10',
        'URL': 'https://zenodo.org/record/1005176'
      },
      {
        'type': 'dataset',
        // 'id': 'https://doi.org/10.5281/zenodo.845934',
        'categories': [
          'conifers',
          'datamining'
        ],
        'author': [
          {
            'family': 'Willighagen',
            'given': 'Lars Gerard'
          }
        ],
        'issued': {
          'date-parts': [
            [
              2017,
              8,
              22
            ]
          ]
        },
        'abstract': 'A dataset containing info on matches from full text searches by ContentMine tools, that can be mapped to Wikidata. See README.md.',
        'DOI': '10.5281/zenodo.845934',
        'publisher': 'Zenodo',
        'title': 'Species Co-Occurrences From Eupmc Articles Related To Pines',
        'URL': 'https://zenodo.org/record/845934'
      },
      {
        'type': 'graphic',
        // 'id': 'https://doi.org/10.17863/cam.12533',
        'language': 'en',
        'author': [
          {
            'family': 'Arrow',
            'given': 'Tom'
          },
          {
            'family': 'Matthews',
            'given': 'Charles'
          },
          {
            'family': 'Molloy',
            'given': 'Jenny'
          },
          {
            'family': 'Mounce',
            'given': 'Ross'
          },
          {
            'family': 'Murray-Rust',
            'given': 'Peter'
          },
          {
            'family': 'Smith-Unna',
            'given': 'Richard'
          },
          {
            'family': 'Willighagen',
            'given': 'Lars'
          }
        ],
        'contributor': [
          {
            'literal': 'Apollo-University Of Cambridge Repository'
          },
          {
            'literal': 'Apollo-University Of Cambridge Repository'
          }
        ],
        'issued': {
          'date-parts': [
            [
              2017,
              8,
              10
            ]
          ]
        },
        'abstract': 'Poster presentation delivered at Text and Data Mining Symposium held at the University of Cambridge.',
        'DOI': '10.17863/cam.12533',
        'publisher': 'Apollo - University of Cambridge Repository',
        'title': 'WikiFactMine for Phytochemistry',
        'URL': 'https://www.repository.cam.ac.uk/handle/1810/266236'
      }
    ]
  }
]

describe('orcid', function () {
  describe('api', function () {
    for (let { name, input, output } of apiTests) {
      it(name, async function () {
        const results = await plugins.input.chainAsync(input, { generateGraph: false })

        for (let entry of results) {
          delete entry.id
        }

        assert.deepStrictEqual(results, output)
      })
    }
  })
})
