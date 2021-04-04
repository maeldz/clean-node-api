import request from 'supertest'
import app from '~/main/config/app'

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      return res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Ismael' })
      .expect({ name: 'Ismael' })
  })
})
