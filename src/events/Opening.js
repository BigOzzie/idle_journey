import {CHARACTER_NAME, CHARACTER_GENDER, CHARACTER_FIRST_NAME} from "./EventHelper";
import EventHelper from "./EventHelper";

class Opening {
    title = "The Journey Begins";

    getBody = (gameData) => {
        const character = gameData.party.mainCharacter;
        let body = [];
        body.push(`Okay so we got this ${CHARACTER_GENDER} named ${CHARACTER_NAME}.`);
        body.push(`${CHARACTER_FIRST_NAME} is pretty damn great.`)
        body = EventHelper.subInBody(body,[
            [CHARACTER_NAME,character.name],
            [CHARACTER_GENDER,character.gender],
            [CHARACTER_FIRST_NAME,character.firstName]
        ]);

        return body;
    };
}

export default Opening;