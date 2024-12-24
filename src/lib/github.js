// Fetch GitHub Repositories Stars
const GitRepoStars = async (username, page, searchQuery = '') => {
  if (!username) {
    return { data: [], pagination: null };
  }

  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`, // Add your GitHub token here
  };

  // Function to fetch a single page
  const fetchPage = async (pageNum) => {
    const url = `https://api.github.com/users/${username}/starred?page=${pageNum}&per_page=100`;
    const response = await fetch(url, { headers });
    return {
      data: await response.json(),
      headers: response.headers
    };
  };

  try {
    // First fetch to get total pages from the Link header
    const firstPage = await fetchPage(1);
    let allData = firstPage.data;
    
    // Get total pages from Link header
    const linkHeader = firstPage.headers.get("link");
    let lastPage = 1;
    
    if (linkHeader) {
      const links = linkHeader.split(",").reduce((acc, part) => {
        const match = part.match(/<([^>]+)>; rel="([^"]+)"/);
        if (match) {
          acc[match[2]] = match[1];
        }
        return acc;
      }, {});

      if (links.last) {
        lastPage = parseInt(new URL(links.last).searchParams.get("page"));
      }
    }

    // Fetch all other pages in parallel
    if (lastPage > 1) {
      const pagePromises = [];
      for (let i = 2; i <= lastPage; i++) {
        pagePromises.push(fetchPage(i));
      }
      const results = await Promise.all(pagePromises);
      results.forEach(result => {
        allData = [...allData, ...result.data];
      });
    }

    // Filter data based on search query if provided
    const filteredData = searchQuery
      ? allData.filter(repo => 
          repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      : allData;

    // Implement pagination for filtered results
    const itemsPerPage = 12; // Adjust this number as needed
    const totalFilteredItems = filteredData.length;
    const totalPages = Math.ceil(totalFilteredItems / itemsPerPage);
    const currentPage = parseInt(page) || 1;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    
    const paginatedData = filteredData.slice(start, end);

    const pagination = {
      next: currentPage < totalPages ? (currentPage + 1).toString() : null,
      last: totalPages > 1 ? totalPages.toString() : null,
      total: totalFilteredItems,
      currentPage: currentPage,
      totalPages: totalPages
    };

    return { data: paginatedData, pagination };

  } catch (error) {
    console.error("Error fetching starred repos:", error);
    return { data: [], pagination: null, error: "Failed to fetch repositories" };
  }
};

export default GitRepoStars;