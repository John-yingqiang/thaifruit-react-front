import React from 'react';
import {success, fail} from './status'

const fetch_fruit = (url_post) => {
    let url = `http://118.31.43.180${url_post}`;

    return fetch(url).then((response) => {
        console.log("url:" + url);
        if (response.status !== 200) {
            return fail(response.status, response.error)
        }
        response.json().then((json) => {
            console.log("json:" + json);
            return json;
        }).catch(() => (fail(response.status, response.error)))
    }).catch(() => (fail(500, 'unknown error')))
}
export default fetch_fruit;