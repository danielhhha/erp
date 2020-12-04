'use strict'
import merge from 'webpack-merge'
import devEnv from './dev.env'

export default merge(devEnv, {
  NODE_ENV: '"testing"',
  API_BASE: "//localhost:8080/api"
})
