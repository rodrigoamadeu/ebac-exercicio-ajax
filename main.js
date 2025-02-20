$(document).ready(function(){
    const endpoint = 'https://api.github.com/users/rodrigoamadeu';
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch(endpoint)
        .then(function(resposta) {
            if (!resposta.ok) {
                throw new Error(`Erro na requisiçã: ${resposta.status} ${resposta.statusText}`)
            }
            return resposta.json();
        })
        
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            repos.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
        })
        .catch(function(erro) {
            alert("Ocorreu um erro, tente mais tarde.");
            console.error(erro);
        });
    
});
