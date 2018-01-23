import {observable, action} from "mobx";
import PartyStore from "./PartyStore";
import Opening from "../events/Opening";

class GameDataStore {
    @observable test = true;
    @observable party = new PartyStore();
    @observable currentEvent = new Opening();

    @action toggle = () => {
        this.test = !this.test;
    };

    @action setNextEvent = (newEvent) => {
        this.currentEvent = newEvent;
    };

    @action handleOptionClick = (i) => {
        const option = this.currentEvent.eventOptions[i];
        if(typeof option.nextEvent !== "undefined") {
            return;
        } else {
            this.party.mainCharacter.changeFirstName("eiheif");
            this.setNextEvent(new Opening());
        }
    };
}

export default GameDataStore;