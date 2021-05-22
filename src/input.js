import { util } from '@citation-js/core'

export const ref = '@orcid'
export const formats = {
  // fetch from API
  '@orcid/id': {
    parseAsync (id) {
      const url = `https://pub.orcid.org/v3.0/${id}/works`
      const headers = {
        accept: 'application/json'
      }
      return util.fetchFileAsync(url, { headers })
    },
    parseType: {
      dataType: 'String',
      predicate: /^\d{4}-\d{4}-\d{4}-\d{4}$/
    }
  },

  // translate to CSL-JSON
  '@orcid/record': {
    parse (record) {
      const doi = record['external-ids']['external-id'].find(id => id['external-id-type'] === 'doi')
      return doi ? doi['external-id-value'] : null
    },
    parseType: {
      dataType: 'SimpleObject',
      propertyConstraint: {
        props: ['last-modified-date', 'put-code']
      }
    }
  },

  '@orcid/records': {
    parse (records) {
      return records.group.map(record => record['work-summary'])
    },
    parseType: {
      dataType: 'SimpleObject',
      propertyConstraint: {
        props: ['last-modified-date', 'group']
      }
    }
  }
}
