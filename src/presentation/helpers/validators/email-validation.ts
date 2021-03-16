import { EmailValidator } from '../../protocols/email-validator'
import { InvalidParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class EmailValidation implements Validation {
  private readonly fieldName: string
  private readonly emailValidator: EmailValidator

  constructor (fieldName: string, emailValidator: EmailValidator) {
    this.fieldName = fieldName
    this.emailValidator = emailValidator
  }

  validate (input: any): Error {
    const isValid = this.emailValidator.isValid(input[this.fieldName])
    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
  }
}
