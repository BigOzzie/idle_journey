import {MAIN_CHARACTER_NAME, MAIN_CHARACTER_GENDER} from "./EventHelper";
import EventHelper from "./EventHelper";

class Opening {
    title = "The Journey Begins";

    getBody = (gameData) => {
        let body = `Okay so we got this ${MAIN_CHARACTER_GENDER} named ${MAIN_CHARACTER_NAME}.`;
        body = EventHelper.subInText(body,MAIN_CHARACTER_NAME,gameData.party.mainCharacter.name);
        body = EventHelper.subInText(body,MAIN_CHARACTER_GENDER,gameData.party.mainCharacter.gender);

        return body;
    };
}

export default Opening;