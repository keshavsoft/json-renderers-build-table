import tagJson from "./tag.json" with { type: "json" };

const buildFooterInput = ({ inColumn } = {}) => {
    const input = structuredClone(tagJson);

    input.attributes.name = inColumn;

    return input;
};

export default buildFooterInput;
