require("dotenv").config()

export async function request (action, additional) {
    try {
        const urlEndpoint = process.env.URLENDPOINT || null
        const apiKey = process.env.APIKEY || null
        if(!apiKey || !urlEndpoint) {
            return "url endpoint or api key are not provided"
        }
        const response = await fetch(
            `${urlEndpoint}` + "/action" + `/${action}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "api-key": `${apiKey}`,
                },
                body: JSON.stringify({
                    dataSource: "Demo",
                    database: "Todo",
                    collection: "Tasks",
                    ...additional
                })
            }
        ).then((res) => res.json())
        return response
    } catch (error ) {
        return error
    }
}
