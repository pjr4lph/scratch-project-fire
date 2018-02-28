// const links = ['Suggested', 'Most Popular', 'Most Open Issues'];
const tempUser = JSON.parse("{\"id\":\"29735261\",\"displayName\":null,\"username\":\"maxLatoche\",\"profileUrl\":\"https://github.com/maxLatoche\",\"photos\":[{\"value\":\"https://avatars2.githubusercontent.com/u/29735261?v=4\"}],\"provider\":\"github\",\"_raw\":\"{\\\"login\\\":\\\"maxLatoche\\\",\\\"id\\\":29735261,\\\"avatar_url\\\":\\\"https://avatars2.githubusercontent.com/u/29735261?v=4\\\",\\\"gravatar_id\\\":\\\"\\\",\\\"url\\\":\\\"https://api.github.com/users/maxLatoche\\\",\\\"html_url\\\":\\\"https://github.com/maxLatoche\\\",\\\"followers_url\\\":\\\"https://api.github.com/users/maxLatoche/followers\\\",\\\"following_url\\\":\\\"https://api.github.com/users/maxLatoche/following{/other_user}\\\",\\\"gists_url\\\":\\\"https://api.github.com/users/maxLatoche/gists{/gist_id}\\\",\\\"starred_url\\\":\\\"https://api.github.com/users/maxLatoche/starred{/owner}{/repo}\\\",\\\"subscriptions_url\\\":\\\"https://api.github.com/users/maxLatoche/subscriptions\\\",\\\"organizations_url\\\":\\\"https://api.github.com/users/maxLatoche/orgs\\\",\\\"repos_url\\\":\\\"https://api.github.com/users/maxLatoche/repos\\\",\\\"events_url\\\":\\\"https://api.github.com/users/maxLatoche/events{/privacy}\\\",\\\"received_events_url\\\":\\\"https://api.github.com/users/maxLatoche/received_events\\\",\\\"type\\\":\\\"User\\\",\\\"site_admin\\\":false,\\\"name\\\":null,\\\"company\\\":null,\\\"blog\\\":\\\"\\\",\\\"location\\\":null,\\\"email\\\":null,\\\"hireable\\\":null,\\\"bio\\\":null,\\\"public_repos\\\":14,\\\"public_gists\\\":0,\\\"followers\\\":1,\\\"following\\\":5,\\\"created_at\\\":\\\"2017-06-27T15:47:19Z\\\",\\\"updated_at\\\":\\\"2018-02-23T20:04:37Z\\\",\\\"private_gists\\\":2,\\\"total_private_repos\\\":55,\\\"owned_private_repos\\\":0,\\\"disk_usage\\\":45888,\\\"collaborators\\\":0,\\\"two_factor_authentication\\\":false,\\\"plan\\\":{\\\"name\\\":\\\"free\\\",\\\"space\\\":976562499,\\\"collaborators\\\":0,\\\"private_repos\\\":0}}\",\"_json\":{\"login\":\"maxLatoche\",\"id\":29735261,\"avatar_url\":\"https://avatars2.githubusercontent.com/u/29735261?v=4\",\"gravatar_id\":\"\",\"url\":\"https://api.github.com/users/maxLatoche\",\"html_url\":\"https://github.com/maxLatoche\",\"followers_url\":\"https://api.github.com/users/maxLatoche/followers\",\"following_url\":\"https://api.github.com/users/maxLatoche/following{/other_user}\",\"gists_url\":\"https://api.github.com/users/maxLatoche/gists{/gist_id}\",\"starred_url\":\"https://api.github.com/users/maxLatoche/starred{/owner}{/repo}\",\"subscriptions_url\":\"https://api.github.com/users/maxLatoche/subscriptions\",\"organizations_url\":\"https://api.github.com/users/maxLatoche/orgs\",\"repos_url\":\"https://api.github.com/users/maxLatoche/repos\",\"events_url\":\"https://api.github.com/users/maxLatoche/events{/privacy}\",\"received_events_url\":\"https://api.github.com/users/maxLatoche/received_events\",\"type\":\"User\",\"site_admin\":false,\"name\":null,\"company\":null,\"blog\":\"\",\"location\":null,\"email\":null,\"hireable\":null,\"bio\":null,\"public_repos\":14,\"public_gists\":0,\"followers\":1,\"following\":5,\"created_at\":\"2017-06-27T15:47:19Z\",\"updated_at\":\"2018-02-23T20:04:37Z\",\"private_gists\":2,\"total_private_repos\":55,\"owned_private_repos\":0,\"disk_usage\":45888,\"collaborators\":0,\"two_factor_authentication\":false,\"plan\":{\"name\":\"free\",\"space\":976562499,\"collaborators\":0,\"private_repos\":0}}}");

export function util(name, data, user, links){
  let result = [...data];

  switch (name) {
    case links[0]:

      break;
    case links[1]:
      result.sort((a, b) => {
        return b.forks - a.forks;
      });
      break;
    case links[2]:
      result.sort((a, b) => {
        return b.issues - a.issues;
      });
      break;
    default:
      return;
  }
  return result;
}

function fetchUserRepos(user, repos){
  return new Promise((resolve, reject) => {
    return fetch(user._json.repos_url)
    .then((res) => {
      return res.json();
    })
    .then((userRepos) => {
      const langs = userRepos.reduce((lang, repo) => {
        if(lang[repo.language]){
          lang[repo.language]++
        }
        else {
          lang[repo.language] = 1;
        }
        return lang;
      }, {})

      const mostUsedLang = Object.keys(langs).reduce((winner, lang) => {
        return (langs[lang] > langs[winner]) ? lang: winner;
      }, Object.keys(langs)[0]);

      resolve({
        repos: repos,
        user: Object.assign(user._json, {repos: userRepos, mostUsedLang: mostUsedLang})
      });
    })
  })
}

export function fetchUser(repos){
  let promise = new Promise((resolve, reject) => {
    // fetch("/")
    // .then(res => {
		// 	return res.json();
		// })
    // .then(user => {
			resolve(tempUser);
		// })
  });

  return promise.then(user => {
    return fetchUserRepos(user, repos);
  })
}

export function fetchRepos(){
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8081/getRepos")
    .then(res => {
			return res.json();
		})
    .then(repos => {
			resolve(repos);
		})
  })
}
