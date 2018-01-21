import {observable, action, computed} from "mobx";
const chance = require("chance").Chance();

const gender = chance.gender();
const firstName = chance.first({gender: gender.toLowerCase()});
const lastName = chance.last();

class Character {
    @observable gender = gender;
    @observable firstName = firstName;
    @observable lastName = lastName;

    @computed get name() {
        return this.firstName + " " + this.lastName;
    }

    @action changeFirstName = (firstName) => {
        this.firstName = firstName;
    }
}

export default Character;