

export function get(url : string) {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(url, requestOptions).then(handleResponse);
}

export function getWithHeaders(url : string,responseHeaders : any) {
    const requestOptions = {
        method: 'GET',
        headers: {
                ...responseHeaders
        }
    };
    return fetch(url, requestOptions).then(handleResponse);
}

export function post(url : string, body : any , headers? : any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' , ...headers },
        body: JSON.stringify(body)
        
    };
    return fetch(url, requestOptions).then(handleResponse);
}

export function put(url : string, body : any, headers? : any) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' , ...headers},
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);    
}

export function patch(url : string, body : any, headers? : any) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' , ...headers},
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);    
}

// prefixed with underscored because delete is a reserved word in javascript
export function _delete(url : string) {
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function handleResponse(response : any) {
    return response.text().then((text:string) => {
        const data = text && JSON.parse(text);
        
        if (!response.ok) {
            const error = (data && data.meta.error) || response.statusText;
            return Promise.reject(error);
        }

        return data;
     });
}

