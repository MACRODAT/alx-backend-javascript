import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((state) => ({
        status: state.status,
        value: state.status === 'fulfilled' ? state.value : String(state.reason),
      }))
    ));
}
