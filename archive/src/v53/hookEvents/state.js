/**
 * Local reactive state holder for the hooked table instance.
 */
export const createState = ({
    container,
    dataset = [],
    columns = [],
    options = {},
    render = null,
    onSearch = null,
    onRowClick = null,
    onRowAction = null,
    onSave = null,
    showLog = false
} = {}) => {
    return {
        container,
        dataset: [...dataset],
        filteredData: [...dataset],
        columns,
        options,
        render,
        selectedIndex: -1,
        onSearch,
        onRowClick,
        onRowAction,
        onSave,
        showLog
    };
};

export default createState;
