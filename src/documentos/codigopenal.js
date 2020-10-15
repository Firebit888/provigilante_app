import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Button, TextInput, Title} from 'react-native';
import { createAppContainer } from 'react-navigation';

export class cod_penal extends React.Component{
  render(){
    return (
      <ScrollView style={styles.container}>
        <Text style={{ color:888, fontSize:40}}>Pro </Text>
        <Text style={{color: 'red', fontSize:40}}>
          Vigilante
        </Text>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 1.º</Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>O Código Penal, aprovado pelo Decreto-Lei n.º 400/82, de 23 de Setembro, é revisto e publicado em anexo</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Artigo 2.º</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          1 - São revogadas as disposições legais avulsas que prevêem ou punem factos incriminados pelo Código Penal.
          {"\n"}
          2 - São revogadas as seguintes disposições:
          {"\n"}
          a) O n.º 1 do artigo 28.º do Decreto-Lei n.º 85-C/75, de 26 de Fevereiro;
          {"\n"}
          b) O artigo 190.º do Decreto-Lei n.º 314/78, de 27 de Outubro;
          {"\n"}
          c) O Decreto-Lei n.º 65/84, de 24 de Fevereiro;
          {"\n"}
          d) O Decreto-Lei n.º 101-A/88, de 26 de Março;
          {"\n"}
          e) Os artigos 2.º, 4.º, n.º 2, alínea a), e 5.º, n.º 1, do Decreto-Lei n.º 124/90, de 14 de Abril.
          {"\n"}
          3 - São também revogadas as disposições legais que em legislação penal avulsa proíbem ou restringem a substituição da
          pena de prisão por multa ou a suspensão da pena de prisão.
          {"\n"}
          Alterações
          {"\n"}
          Retificado pelo
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Artigo 3.º</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          Consideram-se efectuadas para as correspondentes disposições do Código Penal, cujo texto se publica em anexo, as
          remissões feitas para normas do Código Penal, aprovado pelo Decreto-Lei n.º 400/82, de 23 de Setembro.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Artigo 4.º</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
            Para efeito do disposto no Código Penal, considera-se arma qualquer instrumento, ainda que de aplicação definida, que
            seja utilizado como meio de agressão ou que possa ser utilizado para tal fim.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Artigo 5.º</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>Nunca será fixada prisão subsidiária às penas de multa em quantia previstas em legislação avulsa. </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Artigo 6.º</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>1 - Enquanto vigorarem normas que prevejam penas cumulativas de prisão e multa, sempre que a pena de prisão for
            substituída por multa será aplicada uma só pena equivalente à soma da multa directamente imposta e da que resultar da
            substituição da prisão.
            {"\n"}
            2 - É aplicável o regime previsto no artigo 49.º do Código Penal à multa única resultante do que dispõe o número anterior,
            sempre que se tratar de multas em tempo.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Artigo 7.º</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
            Enquanto vigorarem normas que prevejam cumulativamente penas de prisão e multa, a suspensão da execução da pena
            de prisão decretada pelo tribunal não abrange a pena de multa
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Artigo 8.º</Text>
          <Text style={styles.postDescription}>
            Se for aplicada pena de multa em quantia ou de prisão e multa em quantia e o desconto a que se refere o artigo 80.º do
            Código Penal dever incidir sobre a pena de multa, efectuar-se-á o desconto que parecer equitativo.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Artigo 9.º</Text>
          <Text style={styles.postDescription}>
            Aos crimes previstos em legislação avulsa e puníveis com pena de prisão não superior a 6 meses e multa é aplicável o
            regime relativo à dispensa de pena, se verificados os demais pressupostos exigidos pelo artigo 74.º do Código Penal.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Artigo 9.º</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          Aos crimes previstos em legislação avulsa e puníveis com pena de prisão não superior a 6 meses e multa é aplicável o
regime relativo à dispensa de pena, se verificados os demais pressupostos exigidos pelo artigo 74.º do Código Penal.
          </Text>
        </View>


        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Artigo 11.º</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
            Nos processos instaurados até 31 de Dezembro de 1987, a prescrição do procedimento criminal interrompe-se:
            {"\n"}
            a) Com a notificação para as primeiras declarações para comparência ou interrogatório do agente, como arguido, na
            instrução preparatória;
            {"\n"}
            b) Com a prisão;
            {"\n"}
            c) Com a notificação do despacho de pronúncia ou equivalente;
            {"\n"}
            d) Com a marcação do dia para o julgamento no processo de ausentes.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Artigo 12.º</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
            O disposto no n.º 4 do artigo 61.º apenas se aplica às penas por crimes cometidos após a entrada em vigor do Código
            Penal.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Artigo 13.º</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
            O Código Penal revisto e o presente decreto-lei entram em vigor em 1 de Outubro de 1995.
          </Text>
          <Text>

          </Text>
          <Text>

            Assinatura

          </Text>
          <Text>

          </Text>

          <Text>
            Visto e aprovado em Conselho de Ministros de 5 de Janeiro de 1995. - Aníbal António Cavaco Silva - Álvaro José Brilhante
            Laborinho Lúcio.
            Promulgado em 17 de Fevereiro de 1995.
            Publique-se.
            O Presidente da República, MÁRIO SOARES.
            Referendado em 20 de Fevereiro de 1995.
            O Primeiro-Ministro, Aníbal António Cavaco Silva.
          </Text>
        </View>

        <View>
          <Text style={{ color:888, fontSize:40, textAlign:"center"}}>
            Livro I
          </Text>
          <Text style={{ color:"white", fontSize:12, textAlign:"center"}}>
            Parte geral
          </Text>
          <Text style={{ color:888, fontSize:40, textAlign:"center"}}>
            Capítulo único
          </Text>
          <Text style={{ color:"white", fontSize:12, textAlign:"center"}}>
            Princípios gerais
          </Text>

        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>


        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>


        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>


        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>


        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>


        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>


        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>------</Text>
          <Text>
            
          </Text>
          <Text style={styles.postDescription}>
          
          </Text>
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