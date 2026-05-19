import { fetchGitHubUser, fetchGitHubRepos } from './api.js';
import { showLoading, clearResults, renderProfile } from './ui.js';

const inputSearch = document.getElementById("input-search");
const button = document.getElementById("btn-search");
const results = document.getElementById("profile-results");

button.addEventListener("click", async () => {
    const userName = inputSearch.value.trim();

    if (userName) {
        showLoading(results);

        try {
            const userData = await fetchGitHubUser(userName); 
            const userRepos = await fetchGitHubRepos(userName);
            console.log(userRepos);
           
            renderProfile(results, userData, userRepos);
        } catch (error) {
            console.error('erro ao buscar o perfil do usuário', error);
           
            if (error.message.includes('Usuário não encontrado')) {
                alert('Usuário não encontrado!');
            } else {
                alert('ocorreu um erro ao buscar o perfil do usuario');
            }
            clearResults(results);
        }

    } else {
        alert('Por favor, digite um usuário');
    }
});

inputSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        button.click();
    }
});
