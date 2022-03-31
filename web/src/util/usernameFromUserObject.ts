import { split } from 'ramda'

/**
 * I grab the email username and use it as the FlipAgain username.  So, I reach
 * into the user object to grab the e-mail, then split the e-mail to grab the
 * username.  This feels error prone, because I assume a certain object shape
 * that the auth client provides.  So, I throw errors if things do not look right.
 *
 * @author Keith Elliott, March 26, 2022
 * @param currentUser Object containing auth info for a user
 * @returns username The first part of an email address, before the @ symbol
 */
export default function usernameFromUserObject(currentUser: any) {
  const email = currentUser?.email

  if (email === undefined)
    throw new Error(
      'User Object Error:  An email is expected in the user object ' +
        'provided by the auth client.  Here is the provided user object:  ' +
        JSON.stringify(currentUser)
    )

  const splitEmail = split('@', currentUser.email)

  if (splitEmail.length !== 2)
    throw new Error(
      'Email appears invalid.  Here is the provided email:  ' + email
    )

  return splitEmail[0]
}
