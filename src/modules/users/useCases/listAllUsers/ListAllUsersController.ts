import { Request, Response } from "express"
import { ListAllUsersUseCase } from "./ListAllUsersUseCase"

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers

    const id = user_id.toString()

    try {
      const all = this.listAllUsersUseCase.execute({ user_id: id })
      return response.status(200).json(all)
    } catch (e) {
      return response.status(400).json({ error: e.message })
    }
  }
}

export { ListAllUsersController }
