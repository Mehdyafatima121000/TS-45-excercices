//array of current users
var current_users = ['maha', 'riya', 'mehu', 'pehu', 'waniya'];
//array of new users
var new_users = ['mahai', 'rina', 'hamihu', 'santa', 'mehu'];
//loop through new_users check for available user names
new_users.forEach(function (newUsername) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === newUsername.toLowerCase(); });
    if (our_condition) {
        console.log('sorry ${newUsername} is already taken!');
    }
    else {
        console.log('This user name ${newUsername} is available');
    }
});
