class EventHelper {
    static subInText = (text, find, replace) => {
        return text.replace(new RegExp(find, 'g'), replace);
    }
}

const MAIN_CHARACTER_NAME = "%%MAIN_CHARACTER_NAME%%";
const MAIN_CHARACTER_GENDER = "%%MAIN_CHARACTER_GENDER%%";

export default EventHelper;
export {MAIN_CHARACTER_NAME, MAIN_CHARACTER_GENDER};
