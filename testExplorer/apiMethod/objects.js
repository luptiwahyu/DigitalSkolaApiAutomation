const request = require('supertest')
const { expect } = require('chai')
const url = require('../globalVariable/baseUrl')
const api = '/objects'

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

async function objectPut(argument) {
}

async function objectDelete(argument) {
}

module.exports = {
  objectList,
  objectDetail,
  objectCreate,
  objectPut,
  objectDelete,
}
