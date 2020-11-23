import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      gameState:[[0,0,0],
      [0,0,0],
      [0,0,0]],
      turn:'-1',
       results:"",
       player:"",
    }
   }
  reset(){
    this.startgame();
  }
  startgame = () =>{
    this.setState({
      gameState:[[0,0,0],
      [0,0,0],
      [0,0,0]]
    });
  }
  display = (row,col)=>{
    var value=this.state.gameState[row][col];
    if(value == -1){
      return     <Text style={{fontSize:40}}>0</Text>;
    
    }
    else if(value ===1){
      return <Text style={{fontSize:40}}>*</Text>
    }
    else{
      return <View></View>
    }
  }
onboardpress=(row,col)=>{
  var value=this.state.gameState[row][col];
  if(value!==0){return;}



  var cp=this.state.turn
  var array=this.state.gameState.slice();
  array[row][col]=cp;
  this.setState(
    {player:"Player1 turn"}
  );

  this.setState({gameState:array});

  var cp1=(cp==1)? -1 : 1;
  this.setState({turn:cp1});
    this.setState(
    {player:"Player2 turn"}
  )


  var win=this.winner();
  if(win==1){
    this.setState(
      {results:"Player 1 wins"}
    );
    this.startgame();
  }
  else if(win ==-1){
    this.setState(
      {results:"Player 2 wins"}
    );
    this.startgame();
  }
 
}
winner = () =>{
  const n=3;
  var sum;
  var array=this.state.gameState
  //FOR ROWS
  for(var i =0;i<n;i++){
    sum=array[i][0]+array[i][1]+array[i][2];
    if(sum==3){
      return 1
    }
    else if(sum==-3){
      return -1;
    }
    
  }
  //FOR COLUMNS
  for(var j =0;j<n;j++){
    sum=array[0][j]+array[1][j]+array[2][j];
    if(sum==3){
      return 1
    }
    else if(sum==-3){
      return -1;
    }
}
  //FOR DIAGONALS
 sum=array[0][0]+array[1][1]+array[2][2];
    if(sum==3){
      return 1
    }
    else if(sum==-3){
      return -1;
    }
   //FOR DIAGONALS
 sum=array[0][2]+array[1][1]+array[2][0];
    if(sum==3){
      return 1
    }
    else if(sum==-3){
      return -1;
    }
}
  render(){
  return (
    <View style={styles.container}>
    <Text style={{fontSize:20}}>Results</Text>
     <View>{this.state.results}</View>
     
    <View style={{flexDirection:"row"}}>
       <TouchableOpacity onPress={()=>this.onboardpress(0,0) } style={styles.board}>
         {this.display(0,0)}
       </TouchableOpacity>
      
       <TouchableOpacity onPress={()=>this.onboardpress(0,1) }style={styles.board}>
          {this.display(0,1)}
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>this.onboardpress(0,2) } style={styles.board}>
         {this.display(0,2)}
       </TouchableOpacity>
      </View>

       <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={()=>this.onboardpress(1,0) } style={styles.board}>
            {this.display(1,0)}
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>this.onboardpress(1,1) }style={styles.board}>
            {this.display(1,1)}
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>this.onboardpress(1,2) } style={styles.board}>
             {this.display(1,2)}
       </TouchableOpacity>
      </View>

       <View style={{flexDirection:"row"}}>
      <TouchableOpacity  onPress={()=>this.onboardpress(2,0) } style={styles.board}>
            {this.display(2,0)}
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>this.onboardpress(2,1) }style={styles.board}>
          {this.display(2,1)}
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.onboardpress(2,2) }style={styles.board}>
           {this.display(2,2)}
     </TouchableOpacity>
      </View>   
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
board:{
    borderWidth:1,
    width:100,
    height:100
  }
});
