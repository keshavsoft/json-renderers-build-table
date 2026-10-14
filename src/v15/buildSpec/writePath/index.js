import { findByRole } from "json-transformer-funcs";

const toArray = val => (Array.isArray(val) ? val : [val]);

const actions = {
    set: (parent, key, value) => {
        parent[key] = value;
    },
    push: (parent, key, value) => {
        parent[key].push(...toArray(value));
    },
    unshift: (parent, key, value) => {
        parent[key].unshift(...toArray(value));
    },
    pushToRows: (parent, key, value) => {
        parent[key].forEach(row => {
            row.children.push(...structuredClone(toArray(value)));
        });
    },
    unshiftToRows: (parent, key, value) => {
        parent[key].forEach(row => {
            row.children.unshift(...structuredClone(toArray(value)));
        });
    },
    unshiftSerialToRows: (parent, key, value) => {
        parent[key].forEach((row, rowIndex) => {
            const item = structuredClone(value);
            item.textContent = rowIndex + 1;
            row.children.unshift(item);
        });
    }
};

const writePath = ({ inRegistry, inPath, inValue }) => {
    const localRegistry = inRegistry;
    const localPath = inPath;
    const localValue = inValue;

    const root = localPath.dataRole
        ? findByRole(localRegistry[localPath.fileName], localPath.dataRole)
        : localRegistry[localPath.fileName];

    if (!root) return;

    const keys = [...(localPath.filePath ?? [])];
    const lastKey = keys.pop();
    const parent = keys.reduce((current, key) => current?.[key], root);

    if (!parent) return;

    const actionHandler = actions[localPath.action] || actions.set;
    actionHandler(parent, lastKey, localValue);
};

export default writePath;
