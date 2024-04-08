//array of current users
let current_users = ['maha','riya','mehu','pehu','waniya'];
//array of new users
let new_users  = ['mahai','rina','hamihu','santa','mehu'];

//loop through new_users check for available user names

new_users.forEach(newUsername => {
let our_condition = current_users.some (current_one_user => current_one_user.toLowerCase() === newUsername.toLowerCase())

if(our_condition){
    console.log('sorry ${newUsername} is already taken!')
}else{
    console.log('This user name ${newUsername} is available')
}
})