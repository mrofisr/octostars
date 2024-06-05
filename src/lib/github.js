// Fetch GitHub Repositories Stars

const GitRepoStars = async (username, page) => {
  if (!username) {
    return { data: [], pagination: null };
  }

  const url = page
    ? `https://api.github.com/users/${username}/starred?page=${page}`
    : `https://api.github.com/users/${username}/starred`;

  const response = await fetch(url);
  const data = await response.json();

  let pagination = { last: null, next: null };

  const linkHeader = response.headers.get("link");
  if (linkHeader) {
    const links = linkHeader.split(",").reduce((acc, part) => {
      const match = part.match(/<([^>]+)>; rel="([^"]+)"/);
      if (match) {
        acc[match[2]] = match[1];
      }
      return acc;
    }, {});

    pagination = {
      next: links.next ? new URL(links.next).searchParams.get("page") : null,
      last: links.last ? new URL(links.last).searchParams.get("page") : null,
    };
  }

  return { data, pagination };
};

export default GitRepoStars;
