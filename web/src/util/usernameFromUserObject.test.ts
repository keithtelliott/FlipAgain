import usernameFromUserObject from './usernameFromUserObject'

describe('usernameFromUserObject', () => {
  it('handles the happy path - it returns an appropriate username', () => {
    expect(
      usernameFromUserObject({ email: 'keith@validemailaddress.com' })
    ).toBe('keith')
  })

  it('throws an error if the user object does not contain an e-mail property', () => {
    expect(() =>
      usernameFromUserObject({
        notAnEmailPropertyName: 'keith@validemailaddress.com',
      })
    ).toThrow()
  })

  it('throws an error if the email format looks wrong', () => {
    expect(() =>
      usernameFromUserObject({
        email: 'invalidemailformat',
      })
    ).toThrow()
  })
})
