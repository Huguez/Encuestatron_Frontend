// import env from 'react-dotenv';

// process.env.BASE_URL

const fetchSinToken = ( url, data, method = 'GET' ) => {
    // const endpoint = `${ process.env.BASE_URL }/${ url }`
    const endpoint = `http://localhost:8000/${url}`

    if( method === 'GET' ){
        return fetch( endpoint )
    }
    
    return fetch( endpoint, {
        method,
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify( data )
    } );
}

const fetchToken = ( url, data, method = 'GET' ) => {
    // const endpoint = `${}/${}`
    
    const endpoint = `http://localhost:8000/${ url }`
    
    const uidtkn = `Authorization ${ localStorage.getItem( 'uidtkn' ) || '' }`

    if( method === 'GET' ){
        return fetch( endpoint, { method, headers: { 'uidtkn': uidtkn } } )
    }

    return fetch( 
        endpoint, {
            method, 
            headers:{ 
                'uidtkn': uidtkn,
                'Content-Type': 'application/json'
        },
        body: JSON.stringify( data )
    }  )

}

export {
    fetchSinToken,
    fetchToken
}