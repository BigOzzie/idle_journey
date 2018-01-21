import {observable, action, computed} from "mobx";

class PartyStore {
    @observable mainCharacter = null;
    @observable allies = [];

    @computed get members() {
        return [this.mainCharacter, ...this.allies];
    }

    @action addCharacter = (character) => {
        this.allies.push(character);
    }
}

export default PartyStore;