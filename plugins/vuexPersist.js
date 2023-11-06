import VuexPersistence from 'vuex-persist'
import Group from '~/classes/Group';

const mutations = [
    'counters/DECREMENT_COUNTER',
    'counters/INCREMENT_COUNTER',
    'counters/REMOVE_COUNTER',
    'counters/ADD_COUNTER',
    'counters/REMOVE_GROUP',
    'counters/ADD_GROUP',
]
export default ({ store }) => {
    new VuexPersistence({
        key: 'groups',
        reducer({ counters }) {
            return counters
        },
        restoreState(key) {
            const restoredData = JSON.parse(localStorage.getItem(key))
            if (restoredData) {
                const payload = {}
                Object.keys(restoredData.groups).forEach(key => {
                    payload[key] = new Group(restoredData.groups[key])
                })
                store.dispatch('counters/setGroups', payload)
            }
        },
        filter({ type }) {
            return mutations.find(mutation => mutation === type)
        }
    }).plugin(store);
}