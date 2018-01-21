class EventHelper {
    static subInBody = (text, substitutions) => {
        console.dir(text);
        console.dir(substitutions);
        return text.map((line) => {
            for(let i=0; i < substitutions.length; i++) {
                const substitution = substitutions[i];
                line = line.replace(new RegExp(substitution[0], 'g'), substitution[1]);
            }
            return line;
        });
    }
}

const CHARACTER_NAME = "%%CHARACTER_NAME%%";
const CHARACTER_GENDER = "%%CHARACTER_GENDER%%";
const CHARACTER_FIRST_NAME = "%%CHARACTER_FIRST_NAME%%";

export default EventHelper;
export {CHARACTER_NAME, CHARACTER_GENDER, CHARACTER_FIRST_NAME};