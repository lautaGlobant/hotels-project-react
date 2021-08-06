export function addFilter(filter, filterType) {
    return { type: "ADD_FILTER", payload: { filter, filterType } };
};