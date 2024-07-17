import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Share } from 'react-native';
import * as Location from 'expo-location'
export default function Home() {





/*
DEPLOYER SON APPLICATION SUR GOOGLE PLAY
Pour deployer son appplication sur google app qui uilise des données de localisation il faut faire une regle de confidentialité : 
ici exemple le screen Rules
*/













  //STYLES
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  Text: {
    marginTop:100,
    marginBottom:100,
    fontSize:20
  }
  
  });

//INITIATION DE VARIABLES ET STATES
const [location, setLocation] = useState(null)
const [errorMSG, setErrorMSG] = useState(null)
let latitude = null
let longitude = null
let altitude = null





/*  

Pour obtenir une clé key google api enfin d'utiliser le systéme de géolocation plus précise de google : 
aller sur :  https://developers.google.com/maps/documentation/javascript/get-api-key?hl=fr

cliquer sur :  Configurer vos projets dans la console Cloud.
cliquer sur créer votre projet ex creer-deployer-application
cliquez sur acceder aux parametres du projet
dans la barre de recherche taper geocoding APi puis cliquez dessus
puis activer




pour en savoir plus voir ce video : https://www.youtube.com/watch?v=d7G0E_9FwyE
ce lien aussi :  https://www.codeur.com/tuto/html/api-google-maps-prix/
*/





const getUserLocation = async () =>{
  const {status} = await Location.requestForegroundPermissionsAsync()

//si on est pas autorisé on envoie le message : Vous n' etes pas autorisé
if(status !== 'granted'){
  alert("La permission a été refusée")
  setErrorMSG("La permission a été refusée")
  //return
 }




  //sinon on est autorisé et là on récupère notre position avec tous les informations de géolication et on affiche un message  : Vous etes autorisé
const currentLocation = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
setLocation(currentLocation)
//alert("La permission a été autorisée")
//setErrorMSG("La permission a été autorisée")
console.log(currentLocation)

  
}


/*
useEffect(() =>{

//récuperer la position de l'utillisateur s'il à l'autorisation 
getUserLocation()
}, [])



*/



//partager ma position
const sharePosition = async () =>{

try{

//permet de partager la position 
/*le composant Share a une fonction share qui a parametre un objet contient le message 
et dans le l'attribut message on met un message , l'attitude, la longitude, l' altitude  et le lien pour vers google map pour afficher sa position*/
await Share.share({
  message : 'Au secours ! Je suis coincé à la position indiqué par le lien ci dessous. Cliquez sur le lien pour afficher ma position dans google maps et venez me secourir svp :'+
  '\n latitude : '+latitude+
 '\n longitude : '+longitude+
 '\n altitude : '+altitude+ 
 '\n https://www.google.com/maps/search/?api=1&query='+latitude+'%2C'+longitude //le lien permet de localiser sur google maps

})




}

catch(e){
alert(e.message)
}

}




let text = 'Cliquez sur le boutton "Obtenir ma position"'


if(errorMSG){
  text = errorMSG
} else if(location){
  latitude = location.coords.latitude
  longitude = location.coords.longitude
  altitude = location.coords.altitude


text = 'latitude : '+latitude+
        '\nlongitude : ' +longitude+
        '\naltitude : ' +altitude



}







  return (
    <View style={styles.container}>

<Button  title='Obtenir ma position' onPress={getUserLocation}/>


      <Text style={styles.Text}>{text}</Text>

      <Button  title='Partager ma position' onPress={sharePosition}/>
      <StatusBar style="auto" />
    </View>
  );



















  
}










