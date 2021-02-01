
console.log('Before');
//call back hell problem
//getUser(1,(user)=>{
//    getRepositories(user.gitHubUsername,(repositories)=>{
//        getCommit(repositories[0],(commits)=>{
//            console.log(commits);
//        })
//    })
//});
/*function getUser(id, callback){
    setTimeout(()=>{
        console.log('Reading Database...');
        callback({ id: id, gitHubUsername: 'Parth'});
    },2000);
}

function getRepositories(username, callback){
    setTimeout(()=>{
        console.log('Callinf girhub API...');
        callback({ user: username, Repositories: ['repo1', 'repo2', 'repo3'] });
    });
    
}*/

console.log('After');
//now remove callback hell 
getUser(1,getRepositories);
//resolve by giving name of function/callback functions
function getRepositories(user){
    getRepositories(user.gitHubUsername,getCommit);
}

function getCommit(repositories){
    getCommit(repositories[0],displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}




