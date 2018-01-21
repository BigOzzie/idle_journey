import {observable, action} from "mobx";
const chance = require("chance").Chance();

const gender = chance.gender();
const name = chance.name({gender: gender.toLowerCase()});

class Character {
    @observable gender = gender;
    @observable name = name;

    @action changeName = (name) => {
        this.name = name;
    }
}

export default Character;