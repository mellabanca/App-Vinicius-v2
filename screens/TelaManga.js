import React, {Component} from "react";
import { Text,View,Button } from "react-native";


export default class TelaManga extends Component{
render(){
    return(
     <View style = {{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
     }}>
      <Text>
      Manga
      </Text>
    <Button title="Ir para proxima tela"/>
     </View>   
    )

}
}