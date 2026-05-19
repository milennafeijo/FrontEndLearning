
const base_url = 'https://api.github.com';

export async function fetchGitHubUser(userName) {
    const response = await fetch(`${base_url}/users/${userName}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado na API do GitHub.');
        }
        return await response.json(); 
    }
   
export async function fetchGitHubRepos(userName) {
    const response = await fetch(`${base_url}/users/${userName}/repos?per_page=10&sort=created`);
    if (!response.ok) {
            throw new Error('Repositórios não encontrados para este usuário na API do GitHub.');
        }
        
    return await response.json(); 
}