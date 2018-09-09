import {observable, action} from "mobx";
import data from "../db/data.json";

class DataStore {
    @observable data = true;
    @observable test = false;

    @action toggle = () => {
        this.test = !this.test;
    };
}

const dataStore = new DataStore();
dataStore.data = data;

export default dataStore;