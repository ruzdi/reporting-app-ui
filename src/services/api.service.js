const request = (url, { headers = {}, ...restOfOptions } = {}) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        ...restOfOptions
    }

    return fetch(url, options);
}

const doGet = async (url, options = {}) => {
    console.log(url, options);
    const response = await request(url, options);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    console.log({ body });
    return body;
}

const doPut = async (url, data) => {
    const options = {
        method: 'PUT',
        body: JSON.stringify(data)
    };

    const response = await request(url, options);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
}

export {
    doGet,
    doPut
}