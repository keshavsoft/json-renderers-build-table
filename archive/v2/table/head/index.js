const renderTableHead = ({ inColumns = [] } = {}) => ({
    tagName: "thead",
    children: [
        {
            tagName: "tr",
            children: inColumns.map(column => ({
                tagName: "th",
                attributes: {
                    value: column
                },
                textContent: column
            }))
        }
    ]
});

export default renderTableHead;
