import React from 'react'
import {
  View,
  Image,
  Button,
  StyleSheet,
  TextInput,
  StatusBar,
  Text
  } from 'react-native'
import equilatero from './assets/equilatero.png'
import escaleno from './assets/escaleno.png'
import isoceles from './assets/isoceles.png'


export default class App extends React.Component {
  
  state = {
    imagem : null,
    valor1 : null,
    valor2 : null,
    valor3 : null,
    text : null
  }

  condicao = _ => {

    let valor1 = parseFloat(this.state.valor1)
    let valor2 = parseFloat(this.state.valor2)
    let valor3 = parseFloat(this.state.valor3)
    let texto1 = "Esse triângulo é equilátero."
    let texto2 = "Esse triângulo é isóceles."
    let texto3 = "Esse triângulo é escaleno."
    let texto4 = "Nenhum dos lados pode ser zero."
    let texto5 = "Com esses valores não é possível formar um triângulo."
 
    if (valor1==0 || valor2==0 || valor3==0){
      this.setState({imagem : null}), this.setState({text : texto4})
    }
    else if (((valor1+valor2) < valor3) || ((valor1+valor3) < valor2) || ((valor2+valor3) < valor1)){
      this.setState({imagem : null}), this.setState({text : texto5})
    }
    else if (valor1==valor2 && valor2==valor3){
        this.setState({imagem : equilatero}), this.setState({text : texto1})
      }
    else if (valor1==valor2 || valor1==valor3 || valor2==valor3) {
      this.setState({imagem : isoceles}), this.setState({text : texto2})
    }
    else if (valor1!==valor2 && valor1!==valor3 && valor2!==valor3){
      this.setState({imagem : escaleno}), this.setState({text : texto3})
    } 
  }

  render() {

    const { imagem } = this.state
    const { text } = this.state

    return(
      <View style={{ flex: 1 }}>
      <StatusBar/>
      <TextInput
        onChangeText = {(text) => this.setState({valor1:text})}
        value = {this.state.valor1}
        style={styles.input}
        placeholder="A"
        keyboardType = 'numeric'
      />
      <TextInput
        onChangeText = {(text) => this.setState({valor2:text})}
        value = {this.state.valor2}
        style={styles.input}
        placeholder="B"
        keyboardType = 'numeric'
      />
      <TextInput
        onChangeText = {(text) => this.setState({valor3:text})}
        value = {this.state.valor3}
        style={styles.input}
        placeholder="C"
        keyboardType = 'numeric'
      />
      
      <View style={{padding: 50}}>
      <Button title="Classificar" onPress= {this.condicao}
      />
      </View>

      <Text style={styles.text}>{text}
      </Text>

      <Image 
        resizeMode= 'center'
        source = {imagem}
        style= {styles.image}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  image : {
   width : 200,
   height: 200,
   alignSelf: 'center'
  },

  text : {
    alignSelf: 'center',
    fontSize : 16,
    paddingHorizontal: 16
  },

  input : {
    backgroundColor: '#FFF5EE',
    color: '#000',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf:'center'
  }
})
