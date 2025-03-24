import knex from 'knex'
import knexConfigFile from './knexfile.js'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment

const knexConfig = knexConfigFile[environment]

export default knex(knexConfig)
