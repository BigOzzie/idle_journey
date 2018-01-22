import * as h from "./EventHelper";

class Opening {
    title = "The Journey Begins";

    getBody = (gameData) => {
        const character = gameData.party.mainCharacter;
        let body = [];
        body.push(`${h.wrap("name")} is a teenage ${h.wrap("gender")} from a small village.  Today ${h.wrap("he_she")} is going out into the world to make a name for ${h.wrap("him_her")}self.`);
        body = h.subInBody(body,[
            ["name",character.name],
            ["gender",character.gender === "Male" ? "boy" : "girl"],
            ["he_she",character.gender === "Male" ? "he" : "she"],
            ["him_her",character.gender === "Male" ? "him" : "her"]
        ]);

        return body;
    };

    options = [
        {text: "Embark"}
    ];
}

export default Opening;