/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/*import React, { cloneElement } from 'react';*/
import React, { Component } from 'react';
/*import type {Node} from 'react';*/
import {
 
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends Component {

  constructor() {
    super();
    this.state = {
      pressed: false, 
      pressed2: false,
      pressed3: false,
      pressed4: false,
      color:"#000000",
      color2:"#000000",
      color3:"#000000",
      color4:"#000000",
      fontSize: 24
    }
  }

  updateColor=(nr)=>{
  switch(nr){
    case 2:
    switch (this.state.pressed2){ 
      case true:
      this.setState({
        pressed2: false,
        color2:"#000000"
      })
      break;
      default:
        this.setState({
          pressed2: true,
          color2:"#f0ff"
        })
    }
    break;
    case 3:
      switch (this.state.pressed3){
        case true:
        this.setState({
          pressed3: false,
       color3:"#000000"
        })
        break;
        default:
          this.setState({
            pressed3: true,
            color3:"#f0ff"
          })
      }
   break;
   case 4:
    switch (this.state.pressed4){
      case true:
      this.setState({
        pressed4: false,
     color4:"#000000"
      })
      break;
      default:
        this.setState({
          pressed4: true,
          color4:"#f0ff"
        })
    }
   break;
   default:
    switch (this.state.pressed){
      case true:
      this.setState({
        pressed: false,
        color:"#000000"
      })
      break;
      default:
        this.setState({
          pressed: true,
          color:"#f0ff"
        })
    };
  }
  }

  render(){

  return (
     
    <View style={styles.body}>

      <View style={styles.side1}>
      <View style={styles.side3}> 
      <TouchableOpacity onPress={()=>this.updateColor(1)}>
      <View style={styles.button}>
          <Text style={styles.text}>Button1</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.updateColor(2)}>
        <View style={styles.button}>
          <Text style={styles.text}>Button2</Text>
        </View>
        </TouchableOpacity>
        </View>
        <View style={styles.side3}> 
        <TouchableOpacity onPress={()=>this.updateColor(3)}>
        <View style={styles.button}>
          <Text style={styles.text}>Button3</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.updateColor(4)}>
        <View style={styles.button}>
          <Text style={styles.text}>Button4</Text>
        </View>
        </TouchableOpacity>
       </View>
      </View>

      <View style={styles.side2}>
          <View  style={styles.box}>
            <Text style={[{color: this.state.color}, {fontSize:this.state.fontSize}]}>
           Text1 
        </Text>
          </View>
          <View style={styles.box}>
            <Text style={[ {color:this.state.color2}, {fontSize:this.state.fontSize}]}>
          Text2 
        </Text>
        </View>
        <View style={styles.box}>
            <Text style={[ {color:this.state.color3},{fontSize:this.state.fontSize}]}>
          Text3
        </Text>
        </View>
        <View style={styles.box}>
            <Text style={[ {color:this.state.color4}, {fontSize:this.state.fontSize}]}>
          Text4 
        </Text>
        </View>
      </View>
    </View>
    
  );
  }
};

const styles = StyleSheet.create({
   body:{
    
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#0000ff',
    alignItems: 'stretch',
    justifyContent: 'center'

   },
    side1:
    {
     flex:1,
     flexDirection: 'row',
     justifyContent: 'center'

    },
    side2:
    {flex:1,
      backgroundColor: '#ffb6c1', 
      alignItems:'center',
      justifyContent:'center'
    },
    side3:
    {
      flex:1,
      backgroundColor: '#808080',
      alignItems:'center',
      justifyContent:'flex-start'
    },
    text:{
      fontSize:24,
      color:"#000000"
    },
    box:{
      width:150,
      height:50,
      margin:17,
      alignItems:'center',
      borderWidth:7,
      borderColor:'#808080',

    }, 
   button:
   {
    backgroundColor: '#ffffff',
    borderWidth:7,
    borderColor: '#FFFF00',
    width: 150,
    height: 70,
    justifyContent:'center',
    alignItems:'center',
    margin:25
   },

});

export default App;
