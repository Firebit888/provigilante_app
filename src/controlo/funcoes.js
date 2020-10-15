import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, Alert, Button, TextInput} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { white } from 'ansi-colors';

//esta area vai servir de ajuda para controlar o bom funcionamento do posto ou mais postos
//depois da view "controlo de vigilância, meter um botão para controlo semanal ou mensal", para ser um controlo à parte
export class funcoework extends React.Component {
    render() {
      return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={{color:"white", fontSize:20, textAlign:"center"}}>Controlo de vigilância</Text>
            </View>
            
            <View>
              <CheckBox
                title='Pontos de picagem'
                
              />
              <CheckBox
                title='Câmeras'
                
              />
              <CheckBox 
                title='Extintores'
              />
              <CheckBox
                title='Mangueiras de incêndio'
              />
              <CheckBox
                title='Aparelhos de aquecimento'
              />
              <CheckBox
                title='Zonas de risco de inundação'
              />
              <CheckBox
                title='Zonas de fácil acesso de intrusão'
              />
              <CheckBox
                title='Alarmes'
              />
            </View>
            <View>
              <Text style={{color:"white", fontSize:14, textAlign:"center"}}>Rondas</Text>
            <CheckBox
                title='1ª Ronda'
                
              />

              <CheckBox
                title='2ª Ronda'
                
              />

              <CheckBox
                title='3ª Ronda'
                
              />
              <CheckBox
                title='4ª Ronda'
                
              />
              <CheckBox
                title='5ª Ronda'
                
              />

              <CheckBox
                title='6ª Ronda'
                
              />

              <CheckBox
                title='7ª Ronda'
                
              />
              <CheckBox
                title='8ª Ronda'
                
              />
              <CheckBox
                title='9ª Ronda'
                
              />
              <CheckBox
                title='10ª Ronda'
                
              />
            </View>

        </ScrollView>
      );
    }
  }



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