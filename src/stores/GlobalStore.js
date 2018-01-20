import {observable, action} from "mobx";

class GlobalStore {
    @observable test = true;

    @action toggle = () => {
        this.test = !this.test;
    }
}

export default GlobalStore;