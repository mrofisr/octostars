// Fetch GitHub Repositories Stars

const GitRepoStars = async (username, page) => {
  if (!username) {
    return [];
  }
  if (page) {
    const url = `https://api.github.com/users/${username}/starred?page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  const url = `https://api.github.com/users/${username}/starred`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default GitRepoStars;
