import { collectionFromKey, collectionFromInternal } from "json-transformer-funcs";

import sampleSpec from "./sampleSpec.json" with { type: "json" };
import tableJson from "./table.json" with { type: "json" };
import instructions from "./instuctions.json" with { type: "json" };

const setByPath = (object, path, value) => {
    const keys = [...path];
    const lastKey = keys.pop();

    const target = keys.reduce((current, key) => current[key], object);
    target[lastKey] = value;
};

const functionRegistry = {
    collectionFromKey: ({ source, template }) =>
        collectionFromKey(source, template),

    collectionFromInternal: ({ source, template }) =>
        collectionFromInternal(
            source,
            template.outerTemplate,
            template.innerTemplate
        )
};

const startFunc = (inData) => {

    let tempTableJson = structuredClone(tableJson);

    instructions.forEach(instruction => {
        const input = {
            source: inData[instruction.sourceKey],
            template: sampleSpec[instruction.templateKey]
        };

        const result = functionRegistry[instruction.func](input);

        setByPath(tempTableJson, instruction.destinationPath, result);
    });

    return tempTableJson;
};

export default startFunc;