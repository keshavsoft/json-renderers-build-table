const buildBodyCell = ({ inValue } = {}) => ({
    tagName: "td",
    attributes: {
        value: inValue
    },
    textContent: inValue
});

export default buildBodyCell;
