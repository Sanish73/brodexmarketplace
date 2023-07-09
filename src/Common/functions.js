
export const baseUri = 'http://192.168.1.2/FinalSuperMarketAPI/api/';


export const objectToFormData = (data) => {
    var formBox = new FormData();
    if(typeof(data) == 'object'){
        for (const key in data) {
            if (data && key in data) {
                formBox.append(key, data[key]);
            }
        }
    }
    return formBox;
};

export const request = async($endpoint, data, $callback, $catchFeedback = (e) => {}, authToken = false) => {
    
    var option = {
        method: 'POST',
        body: objectToFormData(data)
    };
    if (authToken && authToken
        ?.length > 10) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);
        option['headers'] = myHeaders
    }

    console.log(baseUri + $endpoint, data, option);

    await fetch(baseUri + $endpoint, option).then(response => {
        if (response
            ?.status == 429) {
            return $callback(false, {message: 'Too Many Requests , Please Try again later.'})
        }
        return response; // Return the entire response object
    }).then((response) => response.json()).then((json) => {
        console.log(" ");
        console.log(" ");
        // console.log('===>', JSON.stringify( json , null , 4 ));
        console.log(" ");
        console.log(" ");
        console.log(" ");
        console.log("----------------------------------------------------------------");
        return $callback(true, json);
    })
        .catch(function (quot, x) {
            console.log("Error >>", quot, x, '<< error');
            $catchFeedback(false);
        });
}