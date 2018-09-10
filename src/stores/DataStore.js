import {observable, action} from "mobx";
import data from "../db/data.json";

class DataStore {
    VIEW_INVENTORY = "inventory";
    VIEW_ACCOMPLISHMENTS = "accomplishments";
    VIEW_WHAT_TO_DO = "what_do_i_do";

    @observable data = null;
    @observable view = this.VIEW_INVENTORY;

    @action changeView = (view) => {
        this.view = view;
    };
}

const dataStore = new DataStore();
dataStore.data = data;

export default dataStore;