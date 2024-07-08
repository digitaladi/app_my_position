import { Text, View } from "react-native";



export default function Rules() {

return(

    <View style={{margin:20}}>

    <Text style={{fontSize:20, fontWeight:'bold', padding:10}}>   Régles de confidentialité :   </Text>
    <Text>  
        
        Cette application utilise vos données de localisation pour mle fonctionnenement de l'application.
        Ces données ne sont ni stockées ni partagées par nous mêmes à des personnes tiers. 
        Les données sont partagées par vous mêmes aux personnes de votre choix lorsque vous utilisez l'application
        
         </Text>
    </View>

)
}