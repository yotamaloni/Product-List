import { createStore } from 'vuex';
import userModule from '@/store/modules/user.module.js';

// Create a new store instance.
const store = createStore({
    strict: true,
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {},
    modules: {
        userModule,
    }
});

export default store;