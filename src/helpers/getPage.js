const getPage = (str) => {
    const regex = /&page=(\d+)/g;
    const match = regex.exec(str);
    const page = (match && match[1]) || '';
    return page;
};

export default getPage;