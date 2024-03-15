export async function fetchGitHubStars() {
  const res = await fetch('https://api.github.com/repos/Leeon0/Logo-library');
  const response = await res.json();
  const starsFormated =
    response.stargazers_count > 1000
      ? `${(response.stargazers_count / 1000).toFixed(1)}K`
      : response.stargazers_count;

  return starsFormated;
}
