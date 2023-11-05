import Counter from '~/classes/Counter'
import Group from '~/classes/Group'
export default {
    // Payload must be a object with prop name, {name: String}
    addGroup({ commit }, payload) {
        commit('ADD_GROUP', new Group(payload))
    },
    // Payload must be a Group Id
    removeGroup({ commit }, payload) {
        commit('REMOVE_GROUP', payload)
    },
    // Payload is destructured, groupId must be a Group Id and counterPreview must be a object with name and weight props
    addCounter({ commit }, { groupId, counterPreview }) {
        commit('ADD_COUNTER', { groupId, counter: new Counter(counterPreview) })
    },
    // Payload must be a object with groupId and counterId props
    removeCounter({ commit }, payload) {
        commit('REMOVE_COUNTER', payload)
    }
}