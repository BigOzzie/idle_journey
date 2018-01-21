import {observable, action} from "mobx";
import PartyStore from "./PartyStore";
import Opening from "../events/Opening";

class GameDataStore {
    @observable test = true;
    @observable party = new PartyStore();
    @observable currentEvent = new Opening();

    @action toggle = () => {
        this.test = !this.test;
    }
}

export default GameDataStore;