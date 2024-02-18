const request = require('supertest')
const { expect } = require('chai')
const url = require('../globalVariable/baseUrl')
const api = '/objects'

const { objectList, objectDetail, objectCreate } = require('../apiMethod/objects')

describe('Test API Objects', () => {
  it('GET Object List', async () => {
    await objectList()
  })

  it('GET Object Detail', async () => {
    await objectDetail()
  })

  it('POST Object Create', async () => {
    await objectCreate()
  })
})
