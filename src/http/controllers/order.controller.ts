import { Request, Response } from "express"

class OrderController {
	constructor() {}

	findOne(request: Request, response: Response) {}
	find(request: Request, response: Response) {}
	create(request: Request, response: Response) {}
	update(request: Request, response: Response) {}
	delete(request: Request, response: Response) {}
}

const orderController = new OrderController()
Object.freeze(orderController)

export default orderController
