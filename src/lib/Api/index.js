/** @module lib/Api */

export async function post(url, body){
    const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
    return response.json()
}