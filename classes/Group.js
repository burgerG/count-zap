import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid'

export default class Counter {
    #id = null;
    #createdAt = null;
    #name = '';
    counters = {}
    constructor({ name, weight }) {
        this.#id = uuid(name.concat(weight))
        this.#createdAt = dayjs().toISOString()
        this.#name = name
    }
    // Getters
    get id() {
        return this.#id
    }
    get name() {
        return this.#name
    }
    get createdAt() {
        return this.#createdAt
    }
    // Setters
    set name(newValue) {
        this.#name = newValue
    }
}
