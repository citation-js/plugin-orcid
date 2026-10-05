import { CSL } from '@citation-js/core'

interface OrcidRecord {
  'last-modified-date': string
  'put-code': string
  'external-ids': {
    'external-id': Array<{ 'external-id-type': string, 'external-id-value': string }>
  }
}

interface OrcidRecords {
  'last-modified-date': string
  group: Array<{ 'work-summary': [OrcidRecord] }>
}

declare module '@citation-js/core' {
  namespace plugins {
    namespace input {
      interface Formats {
        '@orcid/id': (input: string) => OrcidRecords
        '@orcid/record': (input: OrcidRecord) => string|null
        '@orcid/records': (input: OrcidRecords) => Array<OrcidRecord>
      }
    }
  }
}
