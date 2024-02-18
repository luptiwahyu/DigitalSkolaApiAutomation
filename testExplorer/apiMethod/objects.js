const request = require('supertest')
const { expect } = require('chai')
const url = require('../globalVariable/baseUrl')
const api = '/objects'
const objectId = 'ff8081818da13a0f018dbbf357712367'

async function objectList(argument) {
  const response = await request(url).get(api)
  expect(response.status).equal(200)
}

async function objectDetail(argument) {
  const response = await request(url).get(`${api}/4`)
  expect(response.status).equal(200)
  expect(response.body.id).to.equal('4')
  expect(response.body.name).to.equal('Apple iPhone 11, 64GB')
}

async function objectCreate(argument) {
  const response = await request(url)
    .post(api)
    .send({
      name: 'iPhone 17 Pro',
      data: {
        year: 2025,
        price: 21000000,
        cpu: 'A7',
        storage: '1 TB'
      }
    })
  expect(response.status).equal(200)
  expect(response.body.name).to.equal('iPhone 17 Pro')
}

async function objectUpdate(argument) {
  const response = await request(url)
    .put(`${api}/${objectId}`)
    .send({
      name: 'iPhone 17',
      data: {
        year: 2025,
        price: 21000000,
        cpu: 'A7',
        storage: '256 GB'
      }
    })
  expect(response.status).equal(200)
  expect(response.body.name).to.equal('iPhone 17')
}

async function objectPartiallyUpdate(argument) {
  const response = await request(url)
    .patch(`${api}/${objectId}`)
    .send({
      name: 'iPhone 17 Pro (Updated Name)',
    })
  expect(response.status).equal(200)
  expect(response.body.name).to.equal('iPhone 17 Pro (Updated Name)')
}

async function objectDelete(argument) {
  const response = await request(url).delete(`${api}/${objectId}`)

  if (response.body.message) {
    expect(response.status).equal(200)
    expect(response.body.message)
      .to
      .equal(`Object with id = ${objectId} has been deleted.`)
  }

  if (response.body.error) {
    expect(response.status).equal(404)
    expect(response.body.error)
      .to
      .equal(`Object with id = ${objectId} doesn't exist.`)
  }
}

module.exports = {
  objectList,
  objectDetail,
  objectCreate,
  objectUpdate,
  objectPartiallyUpdate,
  objectDelete,
}
