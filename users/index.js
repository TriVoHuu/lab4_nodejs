const fetch = require('node-fetch');

async function getUsers(page = 1) {
    const url = '${process.env.GOREST_BASE_URL}'
    const response = await fetch(url, {
        method: 'GET',
    });
    const data = await response.json();
    return data
}

async function getUser(userID) {
    const url = '${process.env.GOREST_BASE_URL}'
    const response = await fetch(url, {
        method: 'GET',
    });
    const data = await response.json();
    return data;
}