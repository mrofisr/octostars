// Fetch GitHub Repositories Stars

const GitRepoStars = async (username) => {
  const url = `https://api.github.com/users/${username}/starred`;
  const response = await fetch(url);
  const data = await response.json();
  return data.reduce((acc, repo) => acc + repo.stargazers_count, 0);
};

export default GitRepoStars;
