const request = require('supertest')
const { expect } = require('chai')
const url = require('../globalVariable/baseUrl')
const api = '/objects'

const {
  objectList,
  objectDetail,
  objectCreate,
  objectUpdate,
  objectPartiallyUpdate,
  objectDelete
} = require('../apiMethod/objects')

describe('Test API Objects', () => {
  it('GET Object List', async () => {
    await objectList()
  })

  it('GET Object Detail', async () => {
    await objectDetail()
  })

  it('POST Add Object', async () => {
    await objectCreate()
  })

  it('PUT Update Object', async () => {
    await objectUpdate()
  })

  it('PATCH Partially Update Object', async () => {
    await objectPartiallyUpdate()
  })

  it('DELETE Remove Object', async () => {
    await objectDelete()
  })
})
