import { plugins } from '@citation-js/core'
import '..'

const b = plugins.input.data({
  'last-modified-date': 'foo',
  'put-code': 'bar',
  'external-ids': { 'external-id': [{ 'external-id-type': 'doi', 'external-id-value': 'baz' }] }
}, '@orcid/record')

type Expect<T extends true> = T
type IsString<T> = T extends string|null ? true : false

// @ts-ignore
type Tests = [
  Expect<IsString<typeof b>>
]
