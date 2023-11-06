export default {
    getCounterTotalWeight: (state) => (groupId, counterId) => {
        const counter = state.groups[groupId].counters[counterId]
        return counter.weight * counter.value
    }
}