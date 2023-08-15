import AsyncStorage from '@react-native-async-storage/async-storage';

export const baseUri = 'http://192.168.1.20/FinalSuperMarketAPI/api/';


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

export const storeData = async ($key , value , $callback = ()=>{}) => {
    //    console.log("++++++++++++++++++++++++++++++++++++++++");
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem($key , jsonValue)
      return $callback(value);
    } catch (e) {
      return $callback({})
    }
}

export const getStoredData = async ($key , $callback) => {
    try {
      const jsonValue = await AsyncStorage.getItem($key);
    //   console.log("2342342342342342342342=============",jsonValue);
      return $callback( true , jsonValue != null ? JSON.parse(jsonValue) : {});
    } catch(e) {
      return $callback( false , {});
    }
}