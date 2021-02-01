
const p =new Promise((resolve, reject) =>{ //promise is an object that Hold the Result of Async operation
    setTimeout(()=>{ //promise consist three state 1)Pandding 2)resolve,Fullfill 3)reject,Failed
       // resolve(1);  //here panddimg => Fullfill State
        reject(new Error('message'));  // here pandding => Failed State
    },1000);
});

p
    .then(result => console.log('Result',result))
    .catch(err => console.log('Error', err.message));


//let's remove callback hell problem by promise

console.log('Before');
//getUser(1,(user)=>{
//    getRepositories(user.gitHubUsername,(repositories)=>{
//        getCommit(repositories[0],(commits)=>{
//            console.log(commits);
//        })
//    })
//});

/*const p1 = getUser(1);
p1
    .then(user => getRepositories(user.gitHubUsername))
    .then(repositories => getCommit(repositories[0]))
    .then(commits => console.log('commits', commits))
    .catch(err => console.log('Error', err));
*/
//Async and Await approach 
async function displayCommits(){
    try{
    const user = await getUser(1);
    const respositories = await getRepositories(user.gitHubUsername);
    const commits = await getCommit(respositories[0]);
    console.log(commits);
    }
    catch(err){
        console.log('Error',err.message);
    }
}
displayCommits(); //async await error handle bt try catch block

function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Reading Database...');
            resolve({ id: id, gitHubUsername: 'Parth'});
        },2000);
    });
}

function getRepositories(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Callinf girhub API...');
            resolve(['repo1', 'repo2', 'repo3']);
        },2000);
    });
}
function getCommit(respositories){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Calling GitHub API...');
            resolve([respositories]);
        },2000);
    });
}
console.log('After');



//parallel promise running

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async operation 1...');
        resolve(1);
    },2000);
});
const p3 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async operation 2...');
        resolve(2);
    },2000);
});

Promise.all([p2,p3])
    .then(result => console.log(result));
