const buildHeadCell = ({ inColumn } = {}) => ({
    tagName: "th",
    attributes: {
        value: inColumn
    },
    textContent: inColumn
});

export default buildHeadCell;
