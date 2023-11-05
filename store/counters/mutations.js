import Vue from "vue"
export default {
    // Payload must be an instance of the Group class
    ADD_GROUP(state, payload) {
        Vue.set(state.groups, payload.id, payload)
    },
    // Payload must be a Group id
    REMOVE_GROUP(state, payload) {
        Vue.delete(state.groups, payload)
    },
    // Payload is destructured, groupId must be a Group Id and counter a Counter class instance
    ADD_COUNTER(state, { groupId, counter }) {
        Vue.set(state.groups[groupId].counters, counter.id, counter)
    },
    // Payload is destructured, groupId must be a Group Id and counterId a Counter Id
    REMOVE_COUNTER(state, { groupId, counterId }) {
        Vue.delete(state.groups[groupId].counters, counterId)
    },
    // Payload is destructured, groupId must be a Group Id and counterId a Counter Id
    INCREMENT_COUNTER(state, { groupId, counterId }) {
        Vue.set(state.groups[groupId].counters[counterId], 'value', state.groups[groupId].counters[counterId].value + 1)
    },
    // Payload is destructured, groupId must be a Group Id and counterId a Counter Id
    DECREMENT_COUNTER(state, { groupId, counterId }) {
        Vue.set(state.groups[groupId].counters[counterId], 'value', state.groups[groupId].counters[counterId].value - 1)
    },
}