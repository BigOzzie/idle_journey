import {observable, action, computed} from "mobx";
import data from "../db/data.json";

class DataStore {
    VIEW_INVENTORY = "inventory";
    VIEW_ACCOMPLISHMENTS = "accomplishments";
    VIEW_WHAT_TO_DO = "what_do_i_do";

    @observable data = [];
    @observable view = this.VIEW_INVENTORY;

    @action changeView = (view) => {
        this.view = view;
    };

    @computed get dataFiltered() {
        return this.data.filter((el) => {
            return el.category === this.view;
        }, this);
    }
}

const dataStore = new DataStore();
dataStore.data = data;

export default dataStore;