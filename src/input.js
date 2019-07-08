import { util } from '@citation-js/core'
// import config from './config'

export const ref = '@orcid'
export const formats = {
  // fetch from API
  '@orcid/id': {
    parseAsync (id) {
      const url = `https://orcid.org/${id}/works`
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
      return record['external-ids']['external-id'].find(id => id['external-id-type'] === 'doi')['external-id-value']
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