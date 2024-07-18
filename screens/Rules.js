import { Text, View } from "react-native";
//ici on importe la translation
import translation from './../translation';


export default function Rules() {

return(

    <View style={{margin:20}}>

    <Text style={{fontSize:20, fontWeight:'bold', padding:10, color:"red"}}>  {  translation('rulesTitle') }   </Text>
    <Text>  

            {translation('rules')}
        
         </Text>
    </View>

)
}