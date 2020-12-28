import { ErrorRequestHandler, RequestHandler } from "express"
import { ValidateError } from "tsoa"

export const handleError: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields)
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    })
  }
  if (err instanceof Error) {
    return res.status(500).json({ message: err.message })
  }

  res.status(500).json({ message: 'Unknown Server error' })
}

export const handle404NotFound: RequestHandler = (req, res) => {
  res.status(404).send('Hello! Not found ' + req.path)
}