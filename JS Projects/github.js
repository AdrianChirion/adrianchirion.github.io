class Github {
  constructor() {
    this.client_id = 'bd454eaaac207fb6fd5d';
    this.client_secret = '6ec3b29b164559c5e80b4b5cfc883df31f7e5359';
    this.repos_count = 10;
    this.repose_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}