import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid'
export default class Counter {
    id = '';
    createdAt = '';
    name = '';
    weight = 0;
    value = 0;
    constructor({ id = undefined, createdAt = undefined, name, weight, }) {
        this.id = id ?? uuid(name.concat(weight));
        this.createdAt = createdAt ?? dayjs().toISOString();
        this.name = name;
        this.weight = weight;
    }
    // Getters
    get totalWeight() {
        return this.weight * this.value
    }
}
