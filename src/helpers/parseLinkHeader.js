const parseLinkHeader = (header) => {
/*
    * parseLinkHeader()
    *
    * Parse the Github Link HTTP header used for pageination
    * http://developer.github.com/v3/#pagination
*/
if (!header) return {};
if (header.length === 0) {
    throw new Error("input must not be of zero length");
    }

    // Split parts by comma
    const parts = header.split(',');
    const  links = {};
    // Parse each part into a named link
    parts.forEach(p => {
    const section = p.split(';');
    if (section.length !== 2) {
        throw new Error("section could not be split on ';'");
    }
    const url = section[0].replace(/<(.*)>/, '$1').trim();
    const name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
    });

    return links;
};

export default parseLinkHeader;