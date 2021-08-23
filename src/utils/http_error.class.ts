import HttpResponseCode from "../core/enums/http_response_code.enum"

export default class HttpError extends Error {
	private code: number
	constructor(message: string, code: HttpResponseCode = HttpResponseCode.BAD_REQUEST) {
		super(message)
		this.code = code
		console.log(this.code)
	}
	set setCode(code: number) {
		this.code = code
	}

	get getCode(): number {
		return this.code
	}
}
