/**
 * @module input/bibjson
 */

import { plugins } from '@citation-js/core'
import '@citation-js/plugin-doi'

import { ref, formats as input } from './input'

plugins.add(ref, { input })
