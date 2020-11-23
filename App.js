import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  render() {
    return (
      <View style={{ paddingTop: 100 }}>
        <Text style={stylesApp2.heading}>Class Based Component</Text>
      </View>
    );
  }
}
const stylesApp2 = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: 'center',
  },
});
export default function App() {
   
   const [solution,setSolution] = useState('') ;
   const [getugn, setugnn]=useState(Math.floor(Math.random()*100));
   const [getsgn,setsgn]=useState('');
   const [getresult,setresult]=useState('');
   const [gethint,sethint]=useState('');
   const [gethint1,sethint1]=useState('');
   const [getcount,setcount]=useState(0);
   const [getscore,setscore]=useState(0);
   const [getturn,setturn]=useState(0);                    
  const GAME_START_MESSAGE = 'Guess a Number';
               
  const [getNum, setNum] = useState(GAME_START_MESSAGE);

  const numClick = (e) => {
    // alert(1)
    if (getNum === 0) setNum(e);
    else setNum(getNum + '' + e);

  };
 
    
 const onClick = button => {
        var z= getugn
        if(getcount===5){
            sethint("You lost the game"),
            setresult(z)   
        }
        else if(button === "CE"){
          backspace()
        }//NOW IF I CLICK CE BUTTON IT WILL DELETE VERY LAST DIGIT NUMBER   
       
        else if(button === "reset"){
         // reset()
        }//NOW IF I CLICK C BUTTON IT WILL RESET EVERYTHING
         else if(button === "="){
           calculate()
           //TASK#01
           var c=1;
           c=getcount+1
           setcount(c)
           setturn(c)         
        }//NOW IF I CLICK = BUTTON THE RESULT WILL BE DISPLAYED 
        else if(button === "h"){
          hint1()
        }    
        else {
            setSolution(solution+button)
                   
         }//THIS IS EVENT LISTNER FOR EVERYOTHER BUTTON e.g 1, 2, 3, 4, 5,... etc
      };
      function hint1(){
        var ugn=getugn;
        var h=getugn;
        var h1=h;
        if(h<100){
            h=h%5;
            h+=2;
            h-=2;
            h+=ugn;
            h1=h;
            h1=ugn-5;
            var z ="Range is "+h1+" and "+h
            sethint1(z);
            setscore(getscore-2);
        }
      }   
      //THIS ARROW FUNCTION WILL BE INVOLVE IN CALCULATING CORRECT RESULTS
     const calculate = () => {
        console.log(getugn)
        var sgn=solution;
        var ugn=getugn;
        console.log(ugn,sgn)
        var s=getscore
        if(ugn==sgn){
          setresult("Correct. You won!!")
          setscore(getscore+5)
          setturn(getturn+5)
          setSolution("")
          setugnn(Math.floor(Math.random()*100))
        }
        else{
          setresult("Wrong Guess");
          setSolution("");
        }
      };
  
      const backspace=()=>{

      }
      const buttonClick=(e)=>{
        e.preventDefault();
        this.setState({button:e.target.name, countClick:this.state.countClick+1});
      } 
      
      //THIS WILL SET THE STATE OF THE INPUT TEXT TO EMPTY STRING
      //TASK#03
     const  reset = () => {
       setSolution("");
       setcount(0);
       sethint("");
       sethint1("");
       setresult("");
       setscore(0);
       setsgn(0);
       setugnn(Math.floor(Math.random()*100));
       setturn(0);
      };

  const message = (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>Welcome to Number Guessing Game</Text>
      <Button title="Start Game" onPress={() => setNum(0)} />
    </View>
  );
  const end = (
    <View>
    <Text style={{ textAlign: 'center', fontSize: 20 }}>Game ended</Text>
    <Text style={{ textAlign: 'center', fontSize: 20 }}>Your score is {getscore}</Text>
    
      <Button title="Finish" onPress={() => {
        setNum(GAME_START_MESSAGE);
        reset();
      }} />
    <Button title="Play Again" onPress={() => {
      setNum(0);
      reset();
    }} />
    
    </View>


  );
  const gameView = (
        <View style={styles.cbody}>  
   
    <Text style={styles.textcontainer}>{solution}</Text>
    <Text style={styles.textcontainer}>{getresult}</Text>
    <Text style={styles.textcontainer}>Hint: {gethint1}</Text>
  
    <Text style={styles.textcontainer}>Score: {getscore}</Text>
    <Text style={styles.textcontainer}>Turn: {getturn}</Text>
  

  <View style={{}}>
  <View style={{width:100}}><Button  title="reset" onPress={ onClick.bind(this,'reset')}/></View>
   
</View>
  <View style={styles.viewcontainer}>

    <View style={styles.buttoncontainer}><Button  title="1" onPress={ onClick.bind(this,'1')}/></View>
    <View style={styles.buttoncontainer}><Button  title="2" onPress={onClick.bind(this,'2')}/></View>
    <View style={styles.buttoncontainer}><Button  title="3" onPress={onClick.bind(this,'3')}/></View>
  
  </View>
  
  <View style={styles.viewcontainer}>
    
    <View style={styles.buttoncontainer}><Button  title="4" onPress={onClick.bind(this,'4')}/></View>  
    <View style={styles.buttoncontainer}><Button  title="5" onPress={onClick.bind(this,'5')}/></View>
    <View style={styles.buttoncontainer}><Button title="6" onPress={onClick.bind(this,'6')}/></View>
  
  </View>
  
  <View style={styles.viewcontainer}>
  
    <View style={styles.buttoncontainer}><Button  title="7" onPress={onClick.bind(this,'7')}/></View>
    <View style={styles.buttoncontainer}><Button  title="8" onPress={onClick.bind(this,'8')}/></View>
    <View style={styles.buttoncontainer}><Button  title="9" onPress={onClick.bind(this,'9')}/></View>
     
  </View>
  
  <View style={{flexDirection:"row", justifyContent:"space-between"}}>
      <View style={styles.buttoncontainer}><Button  title="0" onPress={onClick.bind(this,'0')}/></View>
      <View style={styles.buttoncontainer}><Button  title="h" onPress={hint1}/></View>
      <View style={styles.buttoncontainer}><Button  title="=" onPress={onClick.bind(this,'=')}/></View>
      
</View>
      </View>
       );

  return (
    <View style={styles.container}>
      {getNum === GAME_START_MESSAGE ? message : getturn<5 ? gameView: end }
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  cbody:{
  borderRadius:1,
  borderColor:"black",
  alignItems:"center",
  },
  textcontainer:{
  padding:15,
      textAlign:"center",
      fontSize:20,
  },
  buttoncontainer:{
    width:33
  },
  viewcontainer:{
    flexDirection:"row", 
    justifyContent:"space-between",
  }
});
