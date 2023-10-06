
import {
    VStack,
    Image,
} from 'native-base';
export function ShowImageFromProductInfo({route}) {
    return(
        <VStack>
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain"
          }}
          source={{ uri: route.params }}
          alt="Alternate Text"
        />
      </VStack>
      
    )};