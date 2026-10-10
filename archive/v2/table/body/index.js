const renderTableBody = ({ inData = [], inColumns = [] } = {}) => ({
    tagName: "tbody",
    children: inData.map(row => ({
        tagName: "tr",
        children: inColumns.map(column => {
            const value = Array.isArray(row) ? row[column] : row?.[column];

            return {
                tagName: "td",
                attributes: {
                    value
                },
                textContent: value
            };
        })
    }))
});

export default renderTableBody;
