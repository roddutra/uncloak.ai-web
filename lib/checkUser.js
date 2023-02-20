import { Auth } from 'aws-amplify';

export default async function checkUser() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch (err) {
    return null;
  }
}
