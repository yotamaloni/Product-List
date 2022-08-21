import userService from '@/services/user.service.js';

export default {
    state: {
        user: null
    },
    getters: {
        loggedInUser(state) {
            return state.user;
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user;
        },
    },
    actions: {
        async saveUser({ commit }, { user }) {
            const updatedUser = await userService.signup(user);
            commit({ type: 'setUser', user: updatedUser });
        },
        async setUser({ commit }) {
            const loggedInUser = await userService.getLoggedInUser();
            commit({ type: 'setUser', user: loggedInUser });
        }
    },
};