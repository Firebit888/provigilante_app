import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Button, TextInput, Title} from 'react-native';
import { createAppContainer } from 'react-navigation';

export class segurV extends React.Component{
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
          <Text>
            Disposições gerais
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
            1 – O presente diploma regula o exercício da actividade de segurança privada.
            {"\n"}
            2 – A actividade de segurança privada só pode ser exercida nos termos do presente diploma e de regulamentação complementar e tem uma função subsidiária e complementar da actividade das forças e dos serviços de segurança pública do Estado.
            {"\n"}
            3 – Para efeitos do presente diploma, considera-se actividade de segurança privada:
            {"\n"}
            a) A prestação de serviços a terceiros por entidades privadas com vista à protecção de pessoas e bens, bem como à prevenção da prática de crimes;
            {"\n"}
            b) A organização, por quaisquer entidades e em proveito próprio, de serviços de autoprotecção, com vista à protecção de pessoas e bens, bem como à prevenção da prática de crimes.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 2.º</Text>
          <Text>

          </Text>
          <Text>
          Serviços de segurança privada
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – A actividade de segurança privada compreende os seguintes serviços:
          {"\n"}
a) A vigilância de bens móveis e imóveis e o controlo de entrada, presença e saída de pessoas, bem como a prevenção da entrada de armas, substâncias e artigos de uso e porte proibidos ou susceptíveis de provocar actos de violência no interior de edifícios ou locais de acesso vedado ou condicionado ao público, designadamente estabelecimentos, certames, espectáculos e convenções;
{"\n"}
b) A protecção pessoal, sem prejuízo das competências exclusivas atribuídas às forças de segurança;
{"\n"}
c) A exploração e a gestão de centrais de recepção e monitorização de alarmes;
{"\n"}
d) O transporte, a guarda, o tratamento e a distribuição de valores.
{"\n"}
2 – A prestação dos serviços previstos no número anterior obriga as entidades de segurança privada a possuírem instalações e meios materiais e humanos adequados ao exercício da sua actividade, cujos requisitos mínimos e regime sancionatório são definidos por portaria do Ministro da Administração Interna, sem prejuízo do estabelecido no presente diploma.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 3.º</Text>
          <Text>

          </Text>
          <Text>
          Organização de serviços de autoprotecção
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – Os serviços de autoprotecção referidos na alínea b) do n.º 3 do artigo 1.º devem ser organizados com recurso exclusivo a trabalhadores vinculados por contrato individual de trabalho com entidade titular da respectiva licença.
{"\n"}
2 – Os serviços de autoprotecção previstos no número anterior podem ser complementados com o recurso à prestação de serviços de entidades titulares de alvará adequado para o efeito.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 4.º</Text>
          <Text>

          </Text>
          <Text>
          Obrigatoriedade de adopção de sistema de segurança privada
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – O Banco de Portugal, as instituições de crédito e as sociedades financeiras são obrigados a adoptar um sistema de segurança em conformidade com o disposto no presente diploma.
{"\n"}
2 – As instituições de crédito e as sociedades financeiras podem ser obrigadas a adoptar meios de segurança específicos estabelecidos em portaria do Ministro da Administração Interna.
{"\n"}
3 – Os estabelecimentos de restauração e de bebidas que disponham de salas ou de espaços destinados a dança ou onde habitualmente se dance, nomeadamente os recintos de diversão, bares, discotecas e boîtes, são obrigados a dispor de um sistema de segurança no espaço físico onde é exercida a actividade nos termos e condições fixados em legislação própria.
{"\n"}
4 – A realização de espectáculos em recintos desportivos depende, nos termos e condições fixados por portaria conjunta do Ministro da Administração Interna e do membro do Governo que tutela a área do desporto, do cumprimento da obrigação de disporem de um sistema de segurança que inclua assistentes de recinto desportivo e demais meios de vigilância previstos no presente diploma.
{"\n"}
5 – Os responsáveis pelos espaços de acesso condicionado ao público que, pelas suas características, possam ser considerados de elevado risco de segurança podem ser obrigados a adoptar um sistema de segurança nos termos e condições a aprovar por despacho do Ministro da Administração Interna.
{"\n"}
6 – Os sistemas de segurança a adoptar nos termos dos números anteriores, sem prejuízo de outras disposições legais e regulamentares aplicáveis, obedecem às normas do presente diploma, designadamente quanto ao regime fiscalizador e sancionatório.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 5.º</Text>
          <Text>

          </Text>
          <Text>
          Proibições
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          É proibido, no exercício da actividade de segurança privada:
{"\n"}
a) A prática de actividades que tenham por objecto a prossecução de objectivos ou o desempenho de funções correspondentes a competências exclusivas das autoridades judiciárias ou policiais;
{"\n"}
b) Ameaçar, inibir ou restringir o exercício de direitos, liberdades e garantias ou outros direitos fundamentais, sem prejuízo do estabelecido nos n.os 5 e 6 do artigo seguinte;
{"\n"}
c) A protecção de bens, serviços ou pessoas envolvidas em actividades ilícitas.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 6.º</Text>
          <Text>

          </Text>
          <Text>
          Pessoal e funções de vigilância
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – Para os efeitos do presente diploma, considera-se pessoal de vigilância os indivíduos vinculados por contrato de trabalho às entidades titulares de alvará ou de licença habilitados a exercerem funções de vigilante, de protecção pessoal ou de assistente de recinto desportivo.
{"\n"}
2 – Os vigilantes de segurança privada exercem, entre outras, as seguintes funções:
{"\n"}
a) Vigiar e proteger pessoas e bens em locais de acesso vedado ou condicionado ao público, bem como prevenir a prática de crimes;
{"\n"}
b) Controlar a entrada, presença e saída de pessoas nos locais de acesso vedado ou condicionado ao público;
{"\n"}
c) Efectuar o transporte, o tratamento e a distribuição de valores;
{"\n"}
d) Operar as centrais de recepção e monitorização de alarme.
{"\n"}
3 – A função de protecção pessoal é desempenhada por vigilantes especializados e compreende o acompanhamento de pessoas para a sua defesa e protecção.
{"\n"}
4 – Os assistentes de recinto desportivo são vigilantes especializados que desempenham funções de segurança e protecção de pessoas e bens em recintos desportivos e anéis de segurança, nos termos previstos em portaria do Ministro da Administração Interna e do membro do Governo que tutela a área do desporto.
{"\n"}
5 – Os assistentes de recinto desportivo, no controlo de acesso aos recintos desportivos, podem efectuar revistas pessoais de prevenção e segurança com o estrito objectivo de impedir a entrada de objectos e substâncias proibidas ou susceptíveis de gerar ou possibilitar actos de violência.
{"\n"}
6 – A faculdade prevista no número anterior estende-se ao pessoal de vigilância no controlo de acesso a instalações aeroportuárias, bem como a outros locais de acesso vedado ou condicionado ao público, sendo que, neste caso, sempre a título excepcional, mediante autorização expressa do Ministro da Administração Interna e por um período delimitado no tempo.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 7.º</Text>
          <Text>

          </Text>
          <Text>
          Director de segurança
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – As entidades que prestem serviços de segurança ou organizem serviços de autoprotecção podem ser obrigadas a dispor de um director de segurança, nas condições previstas em portaria do Ministro da Administração Interna.
{"\n"}
2 – O director de segurança tem como funções ser responsável pela preparação, treino e actuação do pessoal de vigilância.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 8.º</Text>
          <Text>

          </Text>
          <Text>
          Requisitos e incompatibilidades para o exercício da actividade de segurança privada
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – Os administradores ou gerentes de sociedades que exerçam a actividade de segurança privada devem preencher permanente e cumulativamente os seguintes requisitos:
{"\n"}
a) Ser cidadão português, de um Estado membro da União Europeia, de um Estado parte do Acordo sobre o Espaço Económico Europeu ou, em condições de reciprocidade, de um Estado de língua oficial portuguesa;
{"\n"}
b) Possuir a escolaridade obrigatória;
{"\n"}
c) Possuir plena capacidade civil;
{"\n"}
d) Não ter sido condenado, por sentença transitada em julgado, pela prática de crime doloso contra a vida, a integridade física ou a reserva da vida privada, contra o património, de falsificação, contra a segurança das telecomunicações, contra a ordem e tranquilidade públicas, de resistência ou desobediência à autoridade pública, de detenção ilegal de armas ou por qualquer outro crime doloso punível com pena de prisão superior a 3 anos, sem prejuízo da reabilitação judicial;
{"\n"}
e) Não exercer, nem ter exercido, as funções de gerente ou administrador de sociedade de segurança privada condenada, por decisão transitada em julgado, pela prática de três contra-ordenações muito graves no exercício dessa actividade nos três anos precedentes;
{"\n"}
f) Não exercer, nem ter exercido, a qualquer título, cargo ou função de fiscalização do exercício da actividade de segurança privada nos três anos precedentes;
{"\n"}
g) Não ter sido sancionado, por decisão transitada em julgado, com a pena de separação de serviço ou pena de natureza expulsiva das Forças Armadas, dos serviços que integram o Sistema de Informações da República ou das forças e serviços de segurança.
{"\n"}
2 – O responsável pelos serviços de autoprotecção e o pessoal de vigilância devem preencher permanente e cumulativamente os requisitos previstos nas alíneas a) a d), f) e g) do número anterior.
{"\n"}
3 – O director de segurança deve preencher permanente e cumulativamente os requisitos previstos nas alíneas a), c), d), f) e g) do n.º 1, bem como ter concluído o ensino secundário.
{"\n"}
4 – Os formadores de segurança privada devem preencher permanente e cumulativamente os requisitos previstos nas alíneas c) e e) do n.º 1, bem como terem concluído o ensino secundário.
{"\n"}
5 – São requisitos específicos de admissão e permanência na profissão do pessoal de vigilância:
{"\n"}
a) Possuir a robustez física e o perfil psicológico necessários para o exercício das suas funções, comprovados por ficha de aptidão, acompanhada de exame psicológico obrigatório, emitida por médico do trabalho, nos termos da legislação em vigor, ou comprovados por ficha de aptidão ou exame equivalente efectuado noutro Estado membro da União Europeia;
{"\n"}
b) Ter frequentado, com aproveitamento, cursos de formação nos termos estabelecidos no artigo 9.º, ou cursos idênticos ministrados e reconhecidos noutro Estado membro da União Europeia.
{"\n"}
6 – Os nacionais de outro Estado membro da União Europeia legalmente habilitados e autorizados a exercer a actividade de segurança privada nesse Estado podem desempenhar essas funções em Portugal nos termos estabelecidos no presente diploma desde que demonstrem que foram cumpridos os seguintes requisitos:
{"\n"}
a) Para desempenhar as funções de director de segurança, os requisitos previstos nos n.os 3 e 7;
{"\n"}
b) Para desempenhar as funções de responsável pela autoprotecção, o requisito previsto no n.º 2;
{"\n"}
c) Para desempenhar as funções de vigilância, de protecção pessoal ou de assistente de recinto, os requisitos previstos nos n.os 2 e 5.
{"\n"}
7 – É requisito específico de admissão e permanência na profissão de director de segurança a frequência, com aproveitamento, de cursos de conteúdo programático e duração fixados em portaria do Ministro da Administração Interna ou de cursos equivalentes ministrados e reconhecidos noutro Estado membro da União Europeia.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 9.º</Text>
          <Text>

          </Text>
          <Text>
          Formação profissional
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – A formação profissional do pessoal de vigilância bem como as respectivas especialidades e cursos de actualização podem ser ministrados por entidades que sejam titulares de alvará ou por entidades especializadas, autorizadas nos termos do presente diploma e em regulamentação especial.
{"\n"}
2 – A definição do conteúdo e duração dos cursos referidos no número anterior, assim como os requisitos do respectivo corpo docente, consta de portaria conjunta dos Ministros da Administração Interna e da Segurança Social e do Trabalho e, no caso dos assistentes de recinto desportivo, de portaria conjunta dos Ministros da Administração Interna e da Segurança Social e do Trabalho e do membro do Governo que tutela a área do desporto.
{"\n"}
3 – As entidades não inseridas no sistema nacional de ensino que pretendam ministrar a formação prevista nos números anteriores devem, para o efeito, ser autorizadas nos termos a definir em portaria própria a aprovar pelo Ministro da Administração Interna.
{"\n"}
4 – A elaboração, a realização e a fiscalização de exames, bem como a respectiva avaliação dos candidatos à protecção pessoal, competem às forças de segurança, nos termos de portaria a aprovar pelo Ministro da Administração Interna na qual se prevê o pagamento a efectuar a essas forças.
{"\n"}
5 – Os formadores de segurança privada devem frequentar, com aproveitamento, um curso de conteúdo programático e duração fixados em portaria do Ministro da Administração Interna ou cursos equivalentes ministrados e reconhecidos noutro Estado membro da União Europeia.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 10.º</Text>
          <Text>

          </Text>
          <Text>
          Cartão profissional
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – Para o exercício das suas funções, o pessoal de vigilância deve ser titular de cartão profissional emitido pela Secretaria-Geral do Ministério da Administração Interna, válido pelo prazo de cinco anos e susceptível de renovação por iguais períodos de tempo.
{"\n"}
2 – O cartão profissional é emitido, nos termos do número anterior, a nacionais de outro Estado membro da União Europeia que possuam os requisitos enunciados no artigo 8.º ou que comprovem reunir tais requisitos, de acordo com os controlos e verificações efectuados no Estado de origem. 1
{"\n"}
3 – A renovação do cartão profissional implica a frequência de um curso de actualização ministrado nos termos e pelas entidades referidas no artigo anterior, ou de um curso equivalente ministrado e reconhecido noutro Estado membro da União Europeia, bem como a comprovação do requisito previsto na alínea d) do n.º 1 do artigo 8.º
{"\n"}
4 – Os modelos dos cartões profissionais do pessoal de vigilância referidos no n.º 1 são aprovados por portaria do Ministro da Administração Interna.


          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 11.º</Text>
          <Text>

          </Text>
          <Text>
          Elementos de uso obrigatório
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – O pessoal de vigilância, quando no exercício das funções previstas nas alíneas a), c) e d) do artigo 2.º, deve obrigatoriamente usar:
{"\n"}
a) Uniforme;
{"\n"}
b) Cartão profissional aposto visivelmente.
{"\n"}
2 – O pessoal de vigilância, quando exerça funções de assistente de recinto desportivo, deve obrigatoriamente usar sobreveste de identificação onde conste de forma perfeitamente visível a palavra «Assistente», com as características fixadas em portaria do Ministro da Administração Interna, sendo, neste caso, dispensável a aposição visível do cartão profissional, de que obrigatoriamente é portador.
{"\n"}
3 – A entidade patronal deve desenvolver todos os esforços para que os seus trabalhadores cumpram integralmente os requisitos previstos no n.º 1.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 12.º</Text>
          <Text>

          </Text>
          <Text>
          Contacto permanente
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          As entidades titulares de alvará devem assegurar a presença permanente nas suas instalações de pessoal que garanta o contacto, a todo o tempo, com o pessoal de vigilância, os utilizadores dos serviços e as forças de segurança.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 13.º</Text>
          <Text>

          </Text>
          <Text>
          Meios de vigilância electrónica
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>1 – As entidades titulares de alvará ou de licença para o exercício dos serviços estabelecidos nas alíneas a), c) e d) do artigo 2.º podem utilizar equipamentos electrónicos de vigilância com o objectivo de proteger pessoas e bens desde que sejam ressalvados os direitos e interesses constitucionalmente protegidos.
{"\n"}
2 – A gravação de imagens e som feita por entidades de segurança privada ou serviços de autoprotecção, no exercício da sua actividade, através de equipamentos electrónicos de vigilância deve ser conservada pelo prazo de 30 dias, findo o qual será destruída, só podendo ser utilizada nos termos da legislação processual penal.
{"\n"}
3 – Nos lugares objecto de vigilância com recurso aos meios previstos nos números anteriores é obrigatória a afixação em local bem visível de um aviso com os seguintes dizeres, consoante o caso, «Para sua protecção, este lugar encontra-se sob vigilância de um circuito fechado de televisão» ou «Para sua protecção, este lugar encontra-se sob vigilância de um circuito fechado de televisão, procedendo-se à gravação de imagem e som», seguido de símbolo identificativo.
{"\n"}
4 – A autorização para a utilização dos meios de vigilância electrónica nos termos do presente diploma não prejudica a aplicação do regime geral em matéria de protecção de dados previsto na Lei n.º 67/98, de 26 de Outubro, designadamente em matéria de direito de acesso, informação, oposição de titulares e regime sancionatório.</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 14.º</Text>
          <Text>

          </Text>
          <Text>
          Porte de arma
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – O pessoal de vigilância está sujeito ao regime geral de uso e porte de arma.
{"\n"}
2 – Em serviço, o porte de arma só é permitido se autorizado por escrito pela entidade patronal, podendo a autorização ser revogada a todo o tempo.
{"\n"}
3 – A autorização prevista no número anterior é anual e expressamente renovável.
          </Text>
        </View>
        
        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 15.º</Text>
          <Text>

          </Text>
          <Text>
          Canídeos
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – As entidades titulares de alvará ou de licença podem utilizar canídeos, acompanhados de pessoal de vigilância devidamente habilitado pela entidade competente.
{"\n"}
2 – A utilização de canídeos está sujeita ao respectivo regime geral de identificação, registo e licenciamento.
{"\n"}
3 – Em serviço, a utilização de canídeos só é permitida desde que autorizada por escrito pela entidade patronal, podendo a autorização ser revogada a todo o tempo.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 16.º</Text>
          <Text>

          </Text>
          <Text>
          Outros meios técnicos de segurança
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          Pode ser autorizada a utilização de meios técnicos de segurança não previstos no presente diploma, por despacho do Ministro da Administração Interna, ouvido o Conselho de Segurança Privada.
          </Text>
        </View>
        
        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 17.º</Text>
          <Text>

          </Text>
          <Text>
          Dever de colaboração
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – As entidades titulares de alvará ou de licença, bem como o respectivo pessoal, devem prestar às autoridades públicas toda a colaboração que lhes for solicitada.
{"\n"}
2 – Em caso de intervenção das forças ou serviços de segurança em locais onde também actuem entidades de segurança privada, estas devem colocar os seus meios humanos e materiais à disposição e sob a direcção do comando daquelas forças.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 18.º</Text>
          <Text>

          </Text>
          <Text>
          Deveres especiais
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – Constituem deveres especiais das entidades titulares de alvará ou de licença:
{"\n"}
a) Comunicar de imediato à autoridade judiciária ou policial competente a prática de qualquer crime de que tenham conhecimento no exercício das suas actividades;
{"\n"}
b) Diligenciar para que a actuação do pessoal de vigilância privada não induza o público a confundi-lo com as forças e serviços de segurança;
{"\n"}
c) Organizar e manter actualizado um registo de actividades permanentemente disponível para consulta das entidades fiscalizadoras;
{"\n"}
d) Fazer prova, até ao dia 31 de Março de cada ano, junto da Secretaria-Geral do Ministério da Administração Interna, da existência e manutenção dos seguros e da caução respeitantes ao ano anterior exigidos nos termos do presente diploma, da inexistência de dívidas ao Estado e à segurança social, ou de que o seu pagamento se encontra assegurado, e de que foram cumpridas as obrigações fiscais relativas ao ano a que respeita a comprovação;
{"\n"}
e) Comunicar à Secretaria-Geral do Ministério da Administração Interna, até ao dia 15 do mês seguinte em que tiverem ocorrido, as alterações ao pacto social e de administradores, gerentes ou responsáveis pelos serviços de autoprotecção, fazendo prova do cumprimento dos requisitos estabelecidos no artigo 8.º, bem como a abertura ou encerramento de filiais e instalações operacionais;
{"\n"}
f) Verificar, a todo o tempo, o cumprimento dos requisitos previstos no artigo 8.º, comunicando à Secretaria-Geral do Ministério da Administração Interna todas as ocorrências que impliquem perda de capacidade para o exercício de funções;
{"\n"}
g) Organizar e manter actualizados ficheiros individuais do pessoal de vigilância ao seu serviço, incluindo cópia do cartão de identificação e do certificado do registo criminal, número do cartão profissional de que é titular e data de admissão ao serviço;
{"\n"}
h) Comunicar à Secretaria-Geral do Ministério da Administração Interna as admissões e cessações contratuais do pessoal de vigilância e do director de segurança até ao dia 15 do mês seguinte em que tiverem ocorrido;
{"\n"}
i) Comunicar à Secretaria-Geral do Ministério da Administração Interna, no prazo de oito dias, a cessação da actividade, para efeitos de cancelamento do alvará ou da licença concedida.
{"\n"}
2 – Constitui ainda dever especial das entidades titulares de alvará mencionar o respectivo número na facturação, correspondência e publicidade.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 19.º</Text>
          <Text>

          </Text>
          <Text>
          Segredo profissional
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – As entidades titulares de alvará ou de licença e o respectivo pessoal ficam obrigados a segredo profissional.
{"\n"}
2 – A quebra do segredo profissional apenas pode ser determinada nos termos da legislação penal e processual penal.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 20.º</Text>
          <Text>

          </Text>
          <Text>
          Natureza e composição
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – O Conselho de Segurança Privada (CSP) é um órgão de consulta do Ministro da Administração Interna.
{"\n"}
2 – São membros permanentes do CSP:
{"\n"}
a) O Ministro da Administração Interna, que preside;
{"\n"}
b) O inspector-geral da Administração Interna;
{"\n"}
c) O comandante-geral da Guarda Nacional Republicana;
{"\n"}
d) O director nacional da Polícia de Segurança Pública;
{"\n"}
e) O director nacional da Polícia Judiciária;
{"\n"}
f) O secretário-geral do Ministério da Administração Interna;
{"\n"}
g) Dois representantes das associações de empresas de segurança privada;
{"\n"}
h) Dois representantes das associações representativas do pessoal de vigilância.
{"\n"}
3 – Atendendo à matéria objecto de consulta, podem ainda ser convocados, como membros não permanentes:
{"\n"}
a) Um representante do Conselho Nacional contra a Violência no Desporto;
{"\n"}
b) Um representante do Banco de Portugal;
{"\n"}
c) Um representante das entidades previstas no n.º 3 do artigo 4.º
{"\n"}
4 – As entidades referidas nas alíneas a) a f) do n.º 2 podem designar representantes.
{"\n"}
5 – Os membros do CSP referidos nas alíneas g) e h) do n.º 2 e na alínea c) do n.º 3 são designados pelo Ministro da Administração Interna, mediante proposta das entidades nele representadas.
{"\n"}
6 – A Secretaria-Geral do Ministério da Administração Interna presta o apoio técnico e administrativo necessário ao funcionamento do CSP.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 21.º</Text>
          <Text>

          </Text>
          <Text>
          Competência
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          Compete ao CSP:
{"\n"}
a) Elaborar o regulamento de funcionamento interno;
{"\n"}
b) Elaborar um relatório anual sobre a actividade de segurança privada;
{"\n"}
c) Pronunciar-se sobre o cancelamento de alvarás e licenças, sempre que solicitado pelo Ministro da Administração Interna;
{"\n"}
d) Pronunciar-se sobre a admissibilidade de novos meios de segurança;
{"\n"}
e) Pronunciar-se e propor iniciativas legislativas em matéria de segurança privada;
{"\n"}
f) Propor ao Ministro da Administração Interna orientações a adoptar pelas entidades competentes na fiscalização da actividade de segurança privada;
{"\n"}
g) Emitir recomendações, no âmbito da actividade da segurança privada.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 22.º</Text>
          <Text>

          </Text>
          <Text>
          Alvará e licença
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – A actividade de segurança privada a que se refere a alínea a) do n.º 3 do artigo 1.º só pode ser exercida com a autorização do Ministro da Administração Interna, titulada por alvará e após cumpridos todos os requisitos e condições estabelecidos no presente diploma e em regulamentação complementar.
{"\n"}
2 – A actividade de segurança privada a que se refere a alínea b) do n.º 3 do artigo 1.º só pode ser exercida com a autorização do Ministro da Administração Interna, titulada por licença e após cumpridos todos os requisitos e condições estabelecidos no presente diploma e em regulamentação complementar.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 23.º</Text>
          <Text>

          </Text>
          <Text>
          Requisitos das entidades de segurança privada
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – As sociedades que pretendam exercer a actividade de segurança privada prevista na alínea a) do n.º 3 do artigo 1.º devem constituir-se de acordo com a legislação de um Estado membro da União Europeia ou de um Estado parte do Acordo sobre o Espaço Económico Europeu e possuir sede ou delegação em Portugal.
{"\n"}
2 – O capital social das entidades referidas no número anterior não pode ser inferior a:
{"\n"}
a) (euro) 50000, se prestarem algum dos serviços previstos na alínea c) do n.º 1 do artigo 2.º;
{"\n"}
b) (euro) 125000, se prestarem algum dos serviços previstos nas alíneas a) e b) do n.º 1 do artigo 2.º;
{"\n"}
c) (euro) 250000, se prestarem algum dos serviços previstos na alínea d) do n.º 1 do artigo 2.º
{"\n"}
3 – O disposto nos números anteriores não se aplica:
{"\n"}
a) Às entidades, pessoas singulares ou colectivas, estabelecidas noutro Estado membro da União Europeia, legalmente autorizadas e habilitadas para exercer a actividade de segurança privada nesse Estado, que pretendam exercer a sua actividade em Portugal de forma contínua e duradoura e que detenham neste país delegação, sucursal ou qualquer outra forma de estabelecimento secundário; 1
{"\n"}
b) Às entidades, pessoas singulares ou colectivas, estabelecidas noutro Estado membro da União Europeia, legalmente autorizadas e habilitadas para exercer a actividade de segurança privada nesse Estado, que pretendam exercer a sua actividade em Portugal de forma temporária e não duradoura ao abrigo da liberdade de prestação de serviços. 2
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 24.º</Text>
          <Text>

          </Text>
          <Text>
          Instrução do processo
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          Compete à Secretaria-Geral do Ministério da Administração Interna a instrução dos processos de autorização para o exercício da actividade de segurança privada, bem como a emissão de alvarás, licenças e respectivos averbamentos.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 25.º</Text>
          <Text>

          </Text>
          <Text>
          Elementos que instruem o requerimento
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – O pedido de autorização para o exercício da actividade de segurança privada é formulado em requerimento dirigido ao Ministro da Administração Interna, acompanhado dos seguintes elementos:
{"\n"}
a) Certidão de teor da descrição e de todas as inscrições em vigor emitida pela Conservatória do Registo Comercial;
{"\n"}
b) Identificação dos administradores, gerentes ou responsável pelos serviços de autoprotecção, consoante o caso, e documentos comprovativos de que satisfazem os requisitos exigidos nos n.os 1 e 2 do artigo 8.º;
{"\n"}
c) Identificação das instalações a afectar ao serviço para o qual é requerido o alvará ou a licença;
{"\n"}
d) Certidão comprovativa da inexistência de dívidas ao Estado e à segurança social, ou de que o seu pagamento se encontra assegurado, e do cumprimento das obrigações fiscais respeitantes ao ano em que o requerimento é apresentado;
{"\n"}
e) Modelo de uniforme a utilizar pelo pessoal de vigilância, no caso de pedido de autorização para a prestação dos serviços de segurança enunciados nas alíneas a), c) e d) do n.º 1 do artigo 2.º.
{"\n"}
2 – O disposto no número anterior aplica-se, com as necessárias adaptações, às situações previstas no n.º 3 do artigo 23.º, sendo tidos em conta os elementos, justificações e garantias já exigidos no Estado membro de origem.
{"\n"}
3 – Os documentos referidos nos números anteriores são arquivados em processo individual organizado pela Secretaria-Geral do Ministério da Administração Interna.
{"\n"}
4 – É dispensada a apresentação de documentos que já constem do processo individual da entidade requerente, quando solicitar autorização para prestar novos tipos de serviços de segurança privada.
{"\n"}
5 – A Secretaria-Geral do Ministério da Administração Interna pode, no prazo de 30 dias a contar da data de entrada dos requerimentos, solicitar as informações e os documentos complementares necessários ao esclarecimento dos seus elementos instrutórios.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 26.º</Text>
          <Text>

          </Text>
          <Text>
          Requisitos de emissão de alvará
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – Concluída a instrução, o processo será submetido ao Ministro da Administração Interna para decisão, a proferir no prazo máximo de 30 dias.
{"\n"}
2 – Após o despacho referido no número anterior, o início do exercício da actividade de segurança privada fica condicionado à comprovação, pelo requerente e no prazo de 90 dias a contar da notificação, da existência de:
{"\n"}
a) Instalações e meios humanos e materiais adequados;
{"\n"}
b) Caução a favor do Estado, prestada mediante depósito em instituição bancária, seguro-caução à primeira solicitação ou garantia bancária à primeira solicitação, de montante, não superior a (euro) 40000, a fixar por despacho do Ministro da Administração Interna;
{"\n"}
c) Director de segurança, quando obrigatório;
{"\n"}
d) Quinze trabalhadores a ele vinculados por contrato de trabalho e inscritos num regime de protecção social, quando os serviços de segurança privada requeridos se inserem nas alíneas a) ou d) do n.º 1 do artigo 2.º;
{"\n"}
e) Seguro de responsabilidade civil no valor mínimo de (euro) 250000 e demais condições a aprovar por portaria conjunta dos Ministros das Finanças e da Administração Interna;
{"\n"}
f) Seguro contra roubo e furto no valor mínimo de (euro) 2000000 e demais condições a aprovar por portaria conjunta dos Ministros das Finanças e da Administração Interna, no caso da prestação dos serviços de segurança previstos na alínea d) do n.º 1 do artigo 2.º;
{"\n"}
g) Pagamento da taxa de emissão de alvará.
{"\n"}
3 – O prazo para entrega dos elementos referidos no número anterior pode ser prorrogado por igual período mediante pedido devidamente fundamentado.
{"\n"}
4 – A não emissão de alvará no prazo previsto nos números anteriores por causa imputável ao requerente determina a caducidade da autorização concedida nos termos do n.º 1.
{"\n"}
5 – Nos casos previstos no n.º 3 do artigo 23.º, são tidos em conta os elementos, justificações e garantias já exigidos no Estado membro de origem e que sejam apresentados pelo requerente.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 27.º</Text>
          <Text>

          </Text>
          <Text>
          Requisitos para a emissão de licença
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>1 – Concluída a instrução, o processo será submetido ao Ministro da Administração Interna para decisão, a proferir no prazo máximo de 30 dias.
{"\n"}
2 – Após o despacho referido no número anterior, o início do exercício da actividade de segurança privada fica condicionado à comprovação, pelo requerente, no prazo de 90 dias, da existência de:
{"\n"}
a) Instalações e meios materiais e humanos adequados;
{"\n"}
b) Caução a favor do Estado, prestada mediante depósito em instituição bancária, seguro-caução à primeira solicitação ou garantia bancária à primeira solicitação, de montante, não superior a (euro) 40000, a fixar por despacho do Ministro da Administração Interna;
{"\n"}
c) Director de segurança, quando obrigatório;
{"\n"}
d) Pagamento da taxa de emissão da licença.
{"\n"}
3 – O prazo para entrega dos elementos referidos no número anterior pode ser prorrogado por igual período mediante pedido devidamente fundamentado.
{"\n"}
4 – A não emissão da licença no prazo previsto nos números anteriores por causa imputável ao requerente determina a caducidade da autorização concedida nos termos do n.º 1.
{"\n"}
5 – Nos casos previstos no n.º 3 do artigo 23.º, são tidos em conta os elementos, justificações e garantias já exigidos no Estado membro de origem e que sejam apresentados pelo requerente.
</Text>
        </View>
        
        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 28.º</Text>
          <Text>

          </Text>
          <Text>
          Especificações do alvará e da licença
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – Do alvará e da licença constam os seguintes elementos:

a) Denominação da entidade autorizada;
{"\n"}
b) Sede social, filiais, delegações, estabelecimentos secundários e instalações operacionais;
{"\n"}
c) Indicação do despacho que aprovou o modelo de uniforme, se aplicável;
{"\n"}
d) Discriminação dos serviços de segurança autorizados.
{"\n"}
2 – As alterações aos elementos constantes do respectivo alvará ou licença fazem-se por meio de averbamento.
{"\n"}
3 – A Secretaria-Geral do Ministério da Administração Interna emite o alvará e a licença e respectivos averbamentos e comunica os seus termos ao Comando-Geral da Guarda Nacional Republicana, à Direcção Nacional da Polícia de Segurança Pública, à Direcção Nacional da Polícia Judiciária, à Inspecção-Geral da Administração Interna e ao governo civil.
{"\n"}
4 – Não é admitida a transmissão ou a cedência, a qualquer título, do alvará emitido
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 29.º</Text>
          <Text>

          </Text>
          <Text>
          Suspensão e cancelamento de alvará e de licença
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – Verifica-se a suspensão imediata do alvará ou da licença logo que haja conhecimento de que algum dos requisitos ou condições necessários ao exercício da actividade de segurança privada, estabelecidos no presente diploma ou em regulamentação complementar, deixaram de se verificar.
{"\n"}
2 – No caso de incumprimento reiterado das normas previstas no presente diploma ou em regulamentação complementar, por despacho do Ministro da Administração Interna e sob proposta do secretário-geral do Ministério da Administração Interna, pode ser cancelado o alvará ou a licença emitido.
{"\n"}
3 – Para efeitos do número anterior, considera-se incumprimento reiterado, designadamente:
{"\n"}
a) O não cumprimento, durante dois anos seguidos, dos deveres especiais previstos na alínea d) do n.º 1 do artigo 18.º;
{"\n"}
b) A inexistência ou insuficiência de meios humanos ou materiais ou de instalações operacionais, definidos na portaria aprovada nos termos do n.º 2 do artigo 2.º, por um período superior a seis meses;
{"\n"}
c) A suspensão do alvará ou da licença prevista no n.º 1 por um período superior a seis meses.
{"\n"}
4 – As decisões de suspensão e cancelamento de alvarás ou licenças são notificadas aos membros permanentes do Conselho de Segurança Privada.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 30.º</Text>
          <Text>

          </Text>
          <Text>
          Taxas
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – A emissão do alvará e da licença e os respectivos averbamentos estão sujeitos ao pagamento de uma taxa que constitui receita do Estado, revertendo 20% para a Secretaria-Geral do Ministério da Administração Interna.
{"\n"}
2 – O valor da taxa referida no número anterior é fixado por portaria conjunta dos Ministros das Finanças e da Administração Interna, podendo ser objecto de revisão anual.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 31.º</Text>
          <Text>

          </Text>
          <Text>
          Entidades competentes
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          A fiscalização da formação e da actividade de segurança privada é assegurada pela Secretaria-Geral do Ministério da Administração Interna, com a colaboração da Polícia de Segurança Pública e da Guarda Nacional Republicana e sem prejuízo das competências das forças e serviços de segurança e da Inspecção-Geral da Administração Interna.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 32.º</Text>
          <Text>

          </Text>
          <Text>
          Organização de ficheiros
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          A Secretaria-Geral do Ministério da Administração Interna organiza e mantém actualizado um ficheiro das entidades que exerçam a actividade de segurança privada, dos administradores, dos gerentes, dos responsáveis pelos serviços de autoprotecção, dos directores de segurança e do pessoal de vigilância.
          </Text>
        </View>


        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 33.º</Text>
          <Text>

          </Text>
          <Text>
          Contra-ordenações e coimas
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – De acordo com o disposto no presente diploma, constituem contra-ordenações muito graves:
{"\n"}
a) O exercício das actividades proibidas previstas no artigo 5.º;
{"\n"}
b) A prestação de serviços de segurança sem o necessário alvará ou licença;
{"\n"}
c) O exercício de funções de vigilância por indivíduos que não sejam titulares de cartão profissional;
{"\n"}
d) A não existência de director de segurança, quando obrigatório;
{"\n"}
e) O não cumprimento do preceituado no artigo 12.º;
{"\n"}
f) O não cumprimento dos deveres previstos no artigo 17.º e na alínea a) do n.º 1 do artigo 18.º;
{"\n"}
g) O porte de arma em serviço sem autorização da entidade patronal;
{"\n"}
h) A utilização de meios materiais ou técnicos susceptíveis de causar danos à vida ou à integridade física;
{"\n"}
i) O não cumprimento do preceituado no n.º 2 do artigo 13.º;
{"\n"}
j) Manter ao serviço pessoal de vigilância que não satisfaça os requisitos previstos no artigo 8.º
{"\n"}
2 – São graves as seguintes contra-ordenações:
{"\n"}
a) Não comunicar, ou comunicar fora do prazo previsto, ao Ministério da Administração Interna as admissões ou rescisões contratuais do pessoal de vigilância;
{"\n"}
b) O não cumprimento dos deveres especiais previstos nas alíneas b) a g) e i) do n.º 1 do artigo 18.º;
{"\n"}
c) O não cumprimento do preceituado no n.º 3 do artigo 13.º;
{"\n"}
d) A utilização de canídeos em infracção ao preceituado no artigo 15.º.
{"\n"}
3 – São contra-ordenações leves:
{"\n"}
a) O não cumprimento do estabelecido na alínea b) do n.º 1 do artigo 11.º e no n.º 2 do artigo 18.º;
{"\n"}
b) O não uso de uniforme, quando obrigatório;
{"\n"}
c) O não cumprimento das obrigações, formalidades e requisitos estabelecidos no presente diploma, quando não constituam contra-ordenações graves ou muito graves.
{"\n"}
4 – Quando cometidas por pessoas colectivas, as contra-ordenações previstas nos números anteriores são punidas com as seguintes coimas:
{"\n"}
a) De (euro) 1000 a (euro) 5000, no caso das contra-ordenações leves;
{"\n"}
b) De (euro) 5000 a (euro) 25000, no caso das contra-ordenações graves;
{"\n"}
c) De (euro) 10000 a (euro) 40000, no caso das contra-ordenações muito graves.
{"\n"}
5 – Quando cometidas por pessoas singulares, as contra-ordenações previstas nos n.os 1 a 3 são punidas com as seguintes coimas:
{"\n"}
a) De (euro) 100 a (euro) 500, no caso das contra-ordenações leves;
{"\n"}
b) De (euro) 200 a (euro) 1000, no caso das contra-ordenações graves;
{"\n"}
c) De (euro) 400 a (euro) 2000, no caso das contra-ordenações muito graves.
{"\n"}
6 – Se a contra-ordenação tiver sido cometida por um órgão de pessoa colectiva ou de associação sem personalidade jurídica, no exercício das suas funções e no interesse do representado, é aplicada a este a coima correspondente, sem prejuízo da responsabilidade individual do agente da contra-ordenação.
{"\n"}
7 – Se o agente retirou da infracção um benefício económico calculável superior ao limite máximo da coima, e não existirem outros meios de o eliminar, pode esta elevar-se até ao montante do benefício, não devendo, todavia, a elevação exceder o limite máximo estabelecido no regime geral das contra-ordenações.
{"\n"}
8 – A tentativa e a negligência são puníveis.
{"\n"}
9 – Nos casos de cumplicidade e de tentativa, bem como nas demais situações em que houver lugar à atenuação especial da sanção, os limites máximo e mínimo da coima são reduzidos para metade.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 34.º</Text>
          <Text>

          </Text>
          <Text>
          Sanções acessórias
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – Em processo de contra-ordenação, podem ser aplicadas simultaneamente com a coima as seguintes sanções acessórias:
{"\n"}
a) A apreensão de objectos que tenham servido para a prática da contra-ordenação;
{"\n"}
b) O encerramento do estabelecimento por um período não superior a dois anos;
{"\n"}
c) A suspensão, por um período não superior a dois anos, do alvará ou da licença concedido para o exercício da actividade de segurança privada ou da autorização para a utilização de meios de segurança;
{"\n"}
d) A interdição do exercício de funções ou de prestação de serviços de segurança por período não superior a dois anos.
{"\n"}
2 – Se o facto constituir simultaneamente crime, o agente é punido por este, sem prejuízo das sanções acessórias previstas para a contra-ordenação.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 35.º</Text>
          <Text>

          </Text>
          <Text>
          Competência
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – São competentes para o levantamento dos autos de contra-ordenação previstos no presente diploma as entidades referidas no artigo 31.º
{"\n"}
2 – É competente para a instrução dos processos de contra-ordenação o secretário-geral do Ministério da Administração Interna, o qual pode delegar aquela competência nos termos da lei e sem prejuízo das competências próprias das forças de segurança.
{"\n"}
3 – A aplicação das coimas e sanções acessórias previstas no presente diploma compete ao Ministro da Administração Interna.
{"\n"}
4 – O produto das coimas referidas no número anterior reverte para o Estado, sendo 40% para a Secretaria-Geral do Ministério da Administração Interna.
{"\n"}
5 – Na execução para a cobrança da coima, responde por esta a caução prestada nos termos previstos no presente diploma.
{"\n"}
6 – Na Secretaria-Geral do Ministério da Administração Interna, é mantido, em registo próprio, o cadastro de cada entidade a que foram aplicadas sanções previstas no presente diploma.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 36.º</Text>
          <Text>

          </Text>
          <Text>
          Legislação aplicável
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          Às contra-ordenações previstas no presente diploma é aplicado o regime geral que regula o processo contra-ordenacional, nos termos da respectiva lei geral, com as adaptações constantes dos artigos 31.º a 35.º
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 37.º</Text>
          <Text>

          </Text>
          <Text>
          Norma revogatória
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          São revogados os Decretos-Leis n.os 298/79, de 17 de Agosto, e 231/98, de 22 de Julho, com a redacção que lhe foi dada pelo Decreto-Lei n.º 94/2002, de 12 de Abril.
          </Text>
        </View>


        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 38.º</Text>
          <Text>

          </Text>
          <Text>
          Norma transitória
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          1 – Os alvarás e licenças emitidos ao abrigo do Decreto-Lei n.º 231/98, de 22 de Julho, passam a valer, independentemente de quaisquer formalidades, como os alvarás e licenças emitidos ao abrigo do presente diploma, nos seguintes termos:
{"\n"}
a) Os alvarás e licenças emitidos ao abrigo das alíneas b) e c) do n.º 1 do artigo 2.º do Decreto-Lei n.º 231/98, de 22 de Julho, autorizam o exercício das actividades previstas na alínea a) do n.º 1 do artigo 2.º do presente diploma;
{"\n"}
b) O alvará e a licença emitidos ao abrigo da alínea d) do n.º 1 do artigo 2.º do Decreto-Lei n.º 231/98, de 22 de Julho, autorizam o exercício das actividades previstas na alínea b) do n.º 1 do artigo 2.º do presente diploma;
{"\n"}
c) O alvará e a licença emitidos ao abrigo da alínea a) do n.º 1 do artigo 2.º do Decreto-Lei n.º 231/98, de 22 de Julho, autorizam o exercício das actividades previstas na alínea c) do n.º 1 do artigo 2.º do presente diploma;
{"\n"}
d) O alvará e a licença emitidos ao abrigo da alínea e) do n.º 1 do artigo 2.º do Decreto-Lei n.º 231/98, de 22 de Julho, autorizam o exercício das actividades previstas na alínea d) do n.º 1 do artigo 2.º do presente diploma.
{"\n"}
2 – Sem prejuízo do disposto no número anterior, as entidades já detentoras de alvará ou licença emitido ao abrigo do Decreto-Lei n.º 231/98, de 22 de Julho, devem adaptar-se às condições impostas nas alíneas b), d) e e) do n.º 2 do artigo 26.º e na alínea b) do n.º 2 do artigo 27.º, respectivamente, no prazo de um ano a contar da data da entrada em vigor do presente diploma.
{"\n"}
3 – Sem prejuízo do disposto no n.º 1, as entidades já detentoras de alvará ou licença emitido ao abrigo do Decreto-Lei n.º 231/98, de 22 de Julho, devem adaptar-se à condição imposta na alínea c) do n.º 2 dos artigos 26.º e 27.º, respectivamente, no prazo de um ano a contar da data da entrada em vigor da portaria prevista no n.º 1 do artigo 7.º do presente diploma.
{"\n"}
4 – Os cartões emitidos ao abrigo do artigo 9.º do Decreto-Lei n.º 231/98, de 22 de Julho, e regulamentação complementar mantêm-se em vigor até ao termo da respectiva validade, sendo substituídos nos termos e condições previstos no n.º 3 do artigo 10.º do presente diploma.
{"\n"}
5 – Enquanto não forem aprovadas as portarias previstas nas alíneas e) e f) do n.º 2 do artigo 26.º, é apenas exigível a cobertura dos riscos aí previstos nos montantes aí indicados.
{"\n"}
6 – Mantêm-se em vigor as Portarias n.os 969/98, de 16 de Novembro, 1325/2001, de 4 de Dezembro, 971/98, de 16 de Novembro, alterada pela Portaria n.º 485/2003, de 17 de Junho, 135/99, de 26 de Fevereiro, 25/99, de 16 de Janeiro, 972/98, de 16 de Novembro, e 1522-B/2002 e 1522-C/2002, ambas de 20 de Dezembro, publicadas ao abrigo do Decreto-Lei n.º 231/98, de 22 de Julho, na parte em que não forem materialmente incompatíveis com o presente diploma, até serem substituídas.
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle }>Artigo 39.º</Text>
          <Text>

          </Text>
          <Text>
          Entrada em vigor
          </Text>
          <Text>

          </Text>
          <Text style={styles.postDescription}>
          O presente diploma entra em vigor no 30.º dia após o da respectiva publicação.
{"\n"}
Visto e aprovado em Conselho de Ministros de 11 de Dezembro de 2003.
{"\n"}
José Manuel Durão Barroso
{"\n"}
Maria Manuela Dias Ferreira Leite
{"\n"}
António Jorge de Figueiredo Lopes
{"\n"}
Maria Celeste Ferreira Lopes Cardona
{"\n"}
José Luís Fazenda Arnaut Duarte
{"\n"}
Armando José Cordeiro Sevinate Pinto
{"\n"}
António José de Castro Bagão Félix.
{"\n"}
Promulgado em 6 de Fevereiro de 2004.
{"\n"}
Publique-se.
{"\n"}
O Presidente da República, JORGE SAMPAIO.
{"\n"}
Referendado em 11 de Fevereiro de 2004.
{"\n"}
O Primeiro-Ministro, José Manuel Durão Barroso
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