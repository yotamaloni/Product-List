import { utils } from './utils.service.js';
import { DbService } from './db-service.js';

const KEY = 'user';
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export default {
    query,
    signup,
    getLoggedInUser,
    addMove
};

async function signup(user) {
    user.coins = 100
    user.moves = []
    const newUser = await DbService.post('user', user)
    return _saveLocalUser(newUser)
}

async function query() {
    var users = await DbService.query(KEY);
    if (!users || !users.length) {
        users = _createDefaultUsers();
        await DbService.insert(KEY, users);
    }
    return users;
}


// { toId: "d99e3u2ih329" to: "Moshiko", at: 2652712571, amount: 2 }

async function addMove(move) {
    move.at = Date.now()
    const user = await getLoggedInUser()
    if (user.coins >= move.amount) {
        user.coins -= move.amount
        user.moves.unshift(move)
        _saveLocalUser(user)
    }
    return user
}

function getLoggedInUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}




