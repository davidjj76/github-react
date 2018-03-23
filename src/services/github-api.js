import axios from 'axios';

// Documentation is at https://developer.github.com/v3/
const BASE_URL = 'https://api.github.com';

export { getRepos, getUserData };

async function getRepos(username) {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  const { data } = await axios.get(url);
  return data;
}

async function getUserData(username) {
  const { data: user } = await axios.get(`${BASE_URL}/users/${username}`);
  const { data: orgs } = await axios.get(`${BASE_URL}/users/${username}/orgs`);

  return { user, orgs };
}
