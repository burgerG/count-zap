import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid'
export default class Counter {
    #id = '';
    #createdAt = '';
    #name = '';
    #weight = 0;
    value = 0;
    constructor({ name, weight }) {
        this.#id = uuid(name.concat(weight))
        this.#createdAt = dayjs().toISOString()
        this.#name = name
        this.#weight = weight
    }
    // Getters
    get id() {
        return this.#id
    }
    get name() {
        return this.#name
    }
    get weight() {
        return this.#weight
    }
    get totalWeight() {
        return this.#weight * this.value
    }
    get createdAt() {
        return this.#createdAt
    }
    // Setters
    set name(newValue) {
        this.#name = newValue
    }
}
