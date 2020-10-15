import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Button, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { comentario } from './src/partilha';
import { leis } from './src/leis';
import { cod_penal } from './src/documentos/codigopenal';
import { segurV } from './src/documentos/leiSegPri';
import { funcoework } from './src/controlo/funcoes';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color:888, fontSize:40}}>Pro </Text>
        <Text style={{color: 'red', fontSize:40}}>
          Vigilante
        </Text>
        <Button title="Ínicio" onPress={() => this.props.navigation.navigate('Details')}>
        </Button>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text style={{ color: 'white', textAlign:"center", color:'blue' }}>
            Atualizações:
          </Text>
          <Text style={{ color: 'white', textAlign:"center", color:'white' }}>
            Código Segurança Privada: Artigo 39º
          </Text>
          <Text style={{ color: 'white', textAlign:"center", color:'white' }}>
            Código Penal: Artigo 13º
          </Text>
        </View>
        
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        <View>
          <Text>
            
          </Text>
        </View>
        

        <View style={styles.container}>
          <Text style={{ color: 'white', textAlign:"center", }}>Autor: João Bernardo Vieira</Text>
        </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color:888, fontSize:40}}>Pro </Text>
        <Text style={{color: 'red', fontSize:40}}>
          Vigilante
        </Text>   
        <Button
          title="ínicio"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Informação legal"
          onPress={() => this.props.navigation.push('doc')}
        />
        <Button title="Área vigilância" onPress={() => this.props.navigation.navigate('area')} />
      </View>
    );
  }
}

//por resolver
class share extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color:888, fontSize:40}}>Central relatorial</Text>
        <Button
          title="ínicio"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button title="Feedback" onPress={()=> this.props.navigation.navigate('parti')} />
      </View>
    );
  }
}

class documentos extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color:888, fontSize:40}}>Pro </Text>
        <Text style={{color: 'red', fontSize:40}}>
          Vigilante
        </Text>
        <Button
          title="ínicio"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button title="Leis" onPress={()=> this.props.navigation.navigate('leiType')} />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
  partilha: share,
  doc: documentos,
  parti: comentario,
  leiType: leis,
  codP:cod_penal,
  Segur:segurV,
  area:funcoework,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  },
  postContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 3
  }
});

export default createAppContainer(RootStack);