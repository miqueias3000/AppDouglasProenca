import React, { useState } from 'react';
import { Alert, Modal, ImageBackground, Text, Pressable, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';

const Devocional = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  const [modalVisible6, setModalVisible6] = useState(false);

  return (
    <View style={styles.centeredView}>
      <StatusBar style="light" />
      <ImageBackground
        source={require('../img/bkg.png')}
        style={styles.imgHead}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.modalTitle}>Deus Planejou Sua Vida com Perfeição e excelência.</Text>
                <Text style={styles.modalText}>
                  Deus nos escolheu antes mesmo da criação do mundo, para sermos santos e sem falhas aos Seus olhos. {'\n\n'}
                  Ele nos destinou a ser Seus filhos através de Jesus Cristo, mostrando a grandeza de Sua graça (Efésios 1:4-6).{'\n\n'}
                  Isso significa que nossa vida, preenchida por Deus, exclui qualquer possibilidade de fraqueza, derrota ou tristeza.{'\n\n'}
                  Fomos criados para refletir a glória de Sua graça. Efésios 2:10 nos lembra que somos feitos por Deus, destinados a viver uma vida de boas obras preparadas por Ele.{'\n\n'}
                  Sua vida não tem espaço para frustração ou inveja.{'\n\n'}
                  Deus planejou cada detalhe, conhecendo cada momento que viveríamos, sem surpresas. Com Sua sabedoria, Ele nos deu tudo que precisamos para uma vida de testemunhos contínuos.{'\n\n'}
                  Seja uma benção em tudo o que fizer.{'\n\n'}
                  Viva com alegria, louvando a Deus todos os dias. Aleluia!{'\n\n'}
                  Você nasceu para dar certo!{'\n\n'}
                </Text>
              </ScrollView>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Voltar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable
          style={styles.imageButton}
          onPress={() => setModalVisible(true)}>
          <Image
            style={styles.image}
            source={require('../img/fundoApp-2.jpg')}
          />
          <Text style={styles.tituloCard}>Deus Planejou Sua Vida com Perfeição e excelência</Text>
        </Pressable>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible2);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.modalTitle}>Deus não fará nada que eu não queira</Text>
                <Text style={styles.modalText}>
                  Quero compartilhar com vocês algo sobre o poder da fé e de um desejo genuíno por mudanças em nossas vidas. 🌟{'\n\n'}

                  “Deus não fará nada que eu não queira.”{'\n\n'}
                  Está escrito:{'\n\n'}
                  📖 Tiago 5:16 nos diz: “A oração feita por um justo pode muito em seus efeitos.” {'\n\n'}

                  Isso nos lembra de que, quando nos aproximamos de Deus em oração, com corações sinceros e quebrantados e também com desejos profundos de mudanças, nossas orações têm um grande poder.{'\n\n'}

                  QUALQUER SITUAÇÃO NA VIDA PODE MUDAR PELO PODER DA ORAÇÃO{'\n\n'}

                  Vamos refletir sobre dois exemplos bíblicos marcantes:{'\n\n'}

                  1. A saída dos israelitas do Egito - Submetidos à dura realidade da escravidão, o povo de Israel clamou por mudança, reacendendo o desejo pela terra prometida a seus antepassados. Deus ouviu seu clamor e enviou Moisés como libertador.{'\n\n'}
                  Deus ouviu o clamor do seu povo!{'\n\n'}
                  Clame! Creia! Declare!{'\n\n'}

                  2. A história de Ana (1 Samuel 1:1-21) - Ana, profundamente triste por sua esterilidade, orou com amargura de alma. Seu desejo irresistível por um filho foi atendido por Deus, que lhe concedeu Samuel, um dos maiores profetas de Israel.{'\n\n'}

                  Estes exemplos nos ensinam que, além de orar, devemos arder com um desejo por mudança. Seja qual for a mudança que você busca em sua vida, apresente-a a Deus com um coração cheio de fé e desejo irresistível.{'\n\n'}
                  Tem que existir em{'\n\n'}
                  Você um desejo ardente por mudança .{'\n\n'}

                  “Temos que ir mais profundo em Deus e buscar dia a dia mudanças e avanços significativos em todas as areas da nossa vida 🙏”{'\n\n'}

                  Você nasceu para dar certo!{'\n\n'}
                  Deus te abençoe.{'\n\n'}
                </Text>
              </ScrollView>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible2(!modalVisible2)}>
                <Text style={styles.textStyle}>Voltar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable
          style={styles.imageButton}
          onPress={() => setModalVisible2(true)}>
          <Image
            style={styles.image}
            source={require('../img/fundoApp-2.jpg')}
          />
          <Text style={styles.tituloCard}>Deus não fará nada que eu não queira</Text>
        </Pressable>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible3);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.modalTitle}>Ide por todo o mundo e fale do amor de Cristo</Text>
                <Text style={styles.modalText}>

                  Hoje quero bater um papo contigo sobre ser um verdadeiro porta-voz das verdades de Deus. Lembra de Paulo o apostolo que sempre cito a vocês nas pregações? Mesmo preso, ele não parou de falar do amor de Cristo (Efésios 6:19-20). E aí, sabia que essa missão também é nossa? Sim, é isso mesmo! .{'\n\n'}

                  Somos escolhidos para espalhar a palavra de Deus e contar para todo mundo sobre a fé e a salvação que só Jesus oferece. Convide as pessoas para vir na nossa igreja. Fale da Fé e Graça..{'\n\n'}

                  Paulo deixa bem claro em Romanos 10:13-14 que a gente só pode crer naquilo que conhecemos..{'\n\n'}

                  Se a gente não falar de Jesus, como as pessoas vão saber que Ele pode mudar vidas? Por isso, todo dia, em todo lugar, a gente tem que compartilhar o amor de Deus. Falar de Jesus não é só obrigação minha ou dos  pastores não, é obrigação de todos nós!.{'\n\n'}

                  Paulo se sentia totalmente comprometido com essa missão. Ele diz em 1 Timóteo 1:11  que foi escolhido para espalhar as boas novas. E ele leva isso tão a sério que diz em 1 Coríntios 9:16 ¹⁶ Porque, se anuncio o evangelho, não tenho de que me gloriar, pois me é imposta essa obrigação; e ai de mim, se não anunciar o evangelho! .{'\n\n'}

                  Deus nos deu uma promessa incrível de vida eterna (Tito 1:2-3), e Ele quer que a gente compartilhe essa esperança de vida eterna e céus com todos. .{'\n\n'}
                  A gente é abençoado pra ser canal dessa mensagem boa que traz fé e transformação para todos que crê. .{'\n\n'}

                  Então, bora colocar a fé em ação! Vamos falar de Jesus com alegria e simplicidade, mostrando o quanto Ele ama e quer o melhor para cada um de nós..{'\n\n'}

                  Diga pras pessoas o que sempre digo a vocês:
                  “ Não há buraco tão profundo que a mão de Deus não possa te tirar de lá”
                  Você é muito especial para Deus, e Ele conta com você para fazer a diferença por aí. .{'\n\n'}

                  Lembre-se: “você nasceu para dar certo, para ser luz e levar as verdades do Senhor para quem precisa ouvir”..{'\n\n'}

                  Vamos juntos levar as verdades de Cristo para todo mundo! FALE DE JESUS! Fale da Fé e Graça..{'\n\n'}

                </Text>
              </ScrollView>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible3(!modalVisible3)}>
                <Text style={styles.textStyle}>Voltar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable
          style={styles.imageButton}
          onPress={() => setModalVisible3(true)}>
          <Image
            style={styles.image}
            source={require('../img/fundoApp-2.jpg')}
          />
          <Text style={styles.tituloCard}>Ide por todo o mundo e fale do amor de Cristo</Text>
        </Pressable>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible4}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible4);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.modalTitle}>Vivendo na Luz da Verdade, distante de toda mentira</Text>
                <Text style={styles.modalText}>

                  * “Vivendo na Luz da Verdade, distante de toda mentira”{'\n\n'}

                  A Bíblia nos diz algo poderoso em João 8:32: “E conhecereis a verdade, e a verdade vos libertará”. Isso quer dizer que a verdade não é apenas algo que conhecemos, mas algo que vivemos e que nos transforma. Fomos criados à imagem de Deus, e como Ele é a verdade, nós também fomos criados para viver nessa verdade.{'\n\n'}

                  A verdade tem o poder de mudar nossas vidas para melhor - trazendo sucesso, vitória, prosperidade e saúde. Por outro lado, a mentira e o engano podem destruir nosso espírito. É por isso que a verdade é tão importante para nós.{'\n\n'}

                  Antes de conhecermos a Jesus, muitas vezes vivíamos limitados pelo pecado, mas agora, como diz Romanos 6:14, “Porque o pecado não terá domínio sobre vós…”. Isso significa que temos o poder e a capacidade de viver na verdade e rejeitar as mentiras.{'\n\n'}

                  A Bíblia nos ensina em 1 Pedro 3:10 que, para ter uma vida boa e feliz, devemos controlar nossa língua e evitar mentiras. Além disso, Provérbios 6:16-19 nos lembra que a língua mentirosa é algo que Deus detesta.{'\n\n'}

                  Viver na verdade é viver na luz. Como Provérbios 12:19 nos diz: “Os lábios que dizem a verdade permanecem para sempre, mas a língua mentirosa dura apenas um instante.” Portanto, vamos escolher viver na verdade que é eterna e que nos liberta.{'\n\n'}

                  Você é um favorecido de Deus. Você nasceu para dar certo! Lembre-se sempre de que você é o melhor de Deus, criado à Sua imagem e semelhança. Ande na palavra, ande na santidade, ande na fé.{'\n\n'}
                  Paz!{'\n\n'}
                  Douglas Proença{'\n\n'}
                </Text>
              </ScrollView>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible4(!modalVisible4)}>
                <Text style={styles.textStyle}>Voltar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable
          style={styles.imageButton}
          onPress={() => setModalVisible4(true)}>
          <Image
            style={styles.image}
            source={require('../img/fundoApp-2.jpg')}
          />
          <Text style={styles.tituloCard}>Vivendo na Luz da Verdade, distante de toda mentira</Text>
        </Pressable>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible5}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible5);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.modalTitle}>RENDA-SE AO ESPÍRITO E À PALAVRA</Text>
                <Text style={styles.modalText}>

                  “Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção, para a educação na justiça, a fim de que o homem de Deus seja completo e perfeitamente habilitado para toda boa obra.” (2 Timóteo 3:16-17).{'\n\n'}

                  Muitas pessoas anseiam pela liderança do Espírito Santo em suas vidas, mas se encontram incertas sobre como se render verdadeiramente a Ele. Perguntam-se: seria o ato de render-se apenas uma questão de inclinar a cabeça ou ajoelhar-se em sinal de reverência? Embora expressões físicas de reverência sejam valiosas, elas não garantem por si só a orientação e direção desejadas.{'\n\n'}

                  Para verdadeiramente se render ao Espírito Santo, é necessário submeter-se à Sua Palavra. Isso significa aderir ao que Ele instrui e permitir que a Palavra de Deus se manifeste através de sua vida. O Espírito Santo, autor das Escrituras, nos conduz por meio da Palavra.{'\n\n'}

                  Aqueles que não compreendem a Palavra de Deus enfrentam dificuldades em reconhecer e seguir a orientação do Espírito Santo, resultando em grandes sofrimentos. {'\n\n'}


                  Não ouvir a voz de Deus resultará em sofrimento. Aprenda a ser guiado pelo Espírito.{'\n\n'}
                  Como Deus disse: “O meu povo está sendo destruído, porque lhe falta o conhecimento…” (Oséias 4:6). O Espirito Santo te levará ao conhecimento correto.{'\n\n'}
                  Ele nos aconselha: “Procura apresentar-te a Deus aprovado, como obreiro que não tem de que se envergonhar, que maneja bem a palavra da verdade.” (2 Timóteo 2:15).{'\n\n'}

                  À medida que você se dedica ao estudo da Palavra, a liderança do Espírito Santo em sua vida se torna mais evidente, pois você aprende a reconhecer Sua voz. A Palavra de Deus e o Espírito de Deus testemunham juntos a respeito de Jesus, a Palavra Viva. Ele disse: “Examinai as Escrituras… elas testificam de mim” (João 5:39).{'\n\n'}

                  Ele também afirmou: “Quando, porém, vier o Consolador, que eu vos enviarei da parte do Pai, o Espírito da verdade, que procede do Pai, esse dará testemunho de mim” (João 15:26). {'\n\n'}

                  Quanto mais você permite que a Palavra de Deus preencha sua mente, influencie suas decisões e molde sua visão de vida, mais o Espírito Santo toma controle, guiando-o de vitória em vitória. Declare agora mesmo que a Palavra de Deus possui autoridade sobre sua vida, orientando, controlando e direcionando cada passo que você dá.{'\n\n'}


                  Você nasceu para dar certo!{'\n\n'}

                </Text>
              </ScrollView>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible5(!modalVisible5)}>
                <Text style={styles.textStyle}>Voltar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable
          style={styles.imageButton}
          onPress={() => setModalVisible5(true)}>
          <Image
            style={styles.image}
            source={require('../img/fundoApp-2.jpg')}
          />
          <Text style={styles.tituloCard}>RENDA-SE AO ESPÍRITO E À PALAVRA</Text>
        </Pressable>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible6}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible6);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.modalTitle}>TENHA OBJETIVOS DEFINIDOS</Text>
                <Text style={styles.modalText}>
                  TENHA OBJETIVOS DEFINIDOS{'\n\n'}
                  📖════════{'\n\n'}
                  Mas vocês, amados, edifiquem-se [fundamentados] em sua santíssima fé [progridam, subam como um edifício cada vez mais alto], orando no Espírito Santo (Judas 1:20 AMP).{'\n\n'}

                  O plano de Deus é que você progrida consistentemente e progresso significa avanço; seguir em frente. O progresso deve ser mensurável, caso contrário não será progresso. Você deve ter objetivos; se você não tiver metas definidas, talvez não consiga medir realmente seu progresso.{'\n\n'}

                  Ao progredir, há certas coisas que você deve considerar. Primeiro, localize sua posição atual em qualquer área da sua vida na qual você deseja progredir. Seja na área de saúde, finanças, trabalho, negócios ou família; localize sua posição atual. Em segundo lugar, imagine qual será o próximo nível para você.{'\n\n'}

                  Em terceiro lugar, determine o que você deve fazer para chegar ao próximo nível. Isso significa sua contribuição em termos de esforço, tempo e recursos. Os recursos podem se referir a dinheiro, materiais, informações, etc. Em quarto e último lugar, tome medidas; faça o que for necessário para obter os resultados desejados. Caso contrário, as suas visões, objetivos e aspirações falharão e darão em nada.{'\n\n'}

                  Você já deve ter metas claras para o ano; mantenha o foco em seus objetivos. Com frequência,  ore no Espírito Santo sobre seus objetivos; isso é muito importante porque garantirá seu progresso em alcançá-los. Nosso versículo de abertura diz: “Mas vocês, amados, edifiquem-se [fundamentados] em sua santíssima fé [progridam, subam como um edifício cada vez mais alto], orando no Espírito Santo ”{'\n\n'}

                  Este ano, você fará progressos e avançará em sua vida como nunca antes, independentemente do que esteja acontecendo com você ou ao seu redor. O Espírito de Deus inspirará e guiará você a tomar as ações necessárias que farão com que você tenha crescimento, aumento e prosperidade evidentes e sem precedentes em Nome de Jesus.{'\n\n'}

                </Text>
              </ScrollView>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible6(!modalVisible6)}>
                <Text style={styles.textStyle}>Voltar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable
          style={styles.imageButton}
          onPress={() => setModalVisible6(true)}>
          <Image
            style={styles.image}
            source={require('../img/fundoApp-2.jpg')}
          />
          <Text style={styles.tituloCard}>TENHA OBJETIVOS DEFINIDOS</Text>
        </Pressable>

      </ScrollView>
    </View>
  );
};

export default Devocional;
