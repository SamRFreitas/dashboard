import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from '../../../src/utils/validators'

describe('Validators utils', () => {
  it('validateEmptyAndLength3 - should give a error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('validateEmptyAndLength3 - should give an error with less then 3 character payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa de no mínimo 3 caracteres')
  })

  it('validateEmptyAndLength3 - should returns true when pass a correct param', () => {
    expect(validateEmptyAndLength3('123')).toBe(true)
  })

  it('validateEmptyAndEmail - should give a error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('validateEmptyAndEmail - should give an error with less then 3 character payload', () => {
    expect(validateEmptyAndEmail('myemail@')).toBe('*Este campo precisa ser um email')
  })

  it('validateEmptyAndEmail - should returns true when pass a correct param', () => {
    expect(validateEmptyAndEmail('teste@teste.com')).toBe(true)
  })
})
