import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid'
import Counter from './Counter';
export default class Group {
    id = '';
    createdAt = '';
    name = '';
    counters = {};
    constructor({ id = undefined, createdAt = undefined, counters = {}, name }) {
        this.id = id ?? uuid(name);
        this.createdAt = createdAt ?? dayjs().toISOString();
        this.name = name;
        Object.keys(counters).forEach(key => {
            this.counters[key] = new Counter(counters[key])
        });
    }
}
