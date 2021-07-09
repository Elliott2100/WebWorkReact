export const Result = ({ html }) => {
    if (html.length === 0) {
        return <div>Nothing to display</div>;
    }
    return <div>{html}</div>;
};
