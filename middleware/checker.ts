import { Tester } from '../utils/request'

module.exports = async (req: any, res: any, next: Function) => {
  const address = req.headers.address
  const secrets = req.headers.secrets
  const data = await Tester(address, secrets)
}
