export function showLoading(element) {
    element.innerHTML = '<p>Carregando...</p>';
}

export function clearResults(element) {
    element.innerHTML = '';
}



export function renderProfile(element, UserData, UserRepos) {

    const repositoriesHTMl = UserRepos && UserRepos.length > 0 ? UserRepos.map(repo => `
        <div class="repo-card">
           <a href="${repo.html_url}" target="_blank"> <h3>${repo.name}</h3> </a>
           <div class="repo-stats">
                <span>⭐ Stars: ${repo.stargazers_count}</span>
                <span>🍴  Forks: ${repo.forks_count}</span>
                <span>👀 Watchers: ${repo.watchers_count}</span>
                <span>💻 Language: ${repo.language || 'N/A'}</span>
              </div>
        </div>

        `).join('') : '<p>Este usuário não possui repositórios públicos.</p>';


    element.innerHTML = `
        <div class="profile-card">
            <img src="${UserData.avatar_url}" alt="${UserData.name}" class="profile-image">
            <div class="profile-info">
                
                <span>@${UserData.login}</span>
                <h2>${UserData.name || "Este usuário não possui nome."}</h2>
                <p>${UserData.bio || "Este usuário não possui bio 😕"}</p>                    
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4> 👥 Seguidores</h4>
                <span>${UserData.followers}</span>
            </div>  
            <div class="following">
                <h4> 👥 Seguindo</h4>
                <span>${UserData.following}</span>
            </div>
        </div>     
            
            
        <div class="profile-repositories">
            <h2>Repositórios</h2>

            <div class="repositories-list">
                ${repositoriesHTMl}
            </div>

        </div>

 

        `;
}
