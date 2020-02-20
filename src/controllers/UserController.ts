import { Request, Response } from 'express'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    return res.json([{
      user: 1
    }, {
      user: 2
    }])
  }

  public async create (req: Request, res: Response): Promise<Response> {
    return res.json(req.body)
  }
}

export default new UserController()
