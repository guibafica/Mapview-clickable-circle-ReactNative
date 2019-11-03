<b><i>PT-BR: </b></i>

<h1> <b>CIRCULOS</b> em seus mapas! </h1>

<h2> 
  Como utilizar marcações circulares em seu react-native-maps e algumas explicações. 
</h2>

<h4> 
  Há algum tempo, tive a necessidade de criar diversas áreas circulares em um mapa,
com o objetivo de ao clica-las, aparecer um determindo texto/informação. 
  Decidi usar a lib do react-native-maps, o EXPO para criar o projeto 
e a api do google, justamente pela facilidade e possibilidade de personalização do 
mapa, (trarei mais sobre mapa posteriormente), voltando ao circulo... Com o desafio citado acima, olhando a doc, achei a tag <circle /> e pensei que seria a melhor opção, porém a tag não tem a propriedade onPress, o que dificulta muito, sendo que a       <marker /> e <poligon /> tinham onPress e isso não fazia sentido pra mim, ou teria que criar um poligno com dezenas de pontos para ficar visivelmente redondo ou adicionar markers com uma imagem de um círculo, o que ficaria feio e pesado pela quantidade de pontos necessarios. 

<h3> <b>Circulos sem interação.</b> </h3>

  Caso necessite criar apenas circulos no mapa, sem interagir com eles, apenas a tag <circle/> e suas props é suficiente.

<h3><b>Circulos com interação.</b></h3>

  Neste caso é um pouco mais complexo, mas nada impossivel. 

  <b>Funcionalidade:</b>
      
      Você irá gerar circulos no mapa parecido com a maneira que gera os circulos 
    normais, porém como um state + _ID. Sempre que clicar na tela, a aplicação mede a diferença do local clicado e os circulos, se for menor do que o raio do circulo proximo ao clique, significa que você clicou dentro, então ele retornará o estado 
    com o id do circulo, e neste momento você poderá fazer o que quiser tanto com o circulo, como no exemplo, que muda de cor, ou exibir alguma informação relacionada ao círculo.

    - [ ] Execute um npm install -> instalar o node_modules + dependências.
                                OU
    - [ ] Execute um yarn -> instalar o node_modules + dependências.  

    <b>IMPORTANTE: Lembre-se de fazer este projeto como Class </b>
    ```
       class App extends Component {
          ...
       }  

       ...

       export default App;
    ```       
</h4>

<b><i>ENGLISH: </b></i>