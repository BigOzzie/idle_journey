const subInBody = (body, substitutions) => {
    return body.map((line) => {
        for(let i=0; i < substitutions.length; i++) {
            const substitution = substitutions[i];
            line = line.replace(new RegExp(wrap(substitution[0]), 'g'), substitution[1]);
        }
        return line;
    });
};

const wrap = (str) => `%%${str}%%`;

export {subInBody, wrap};