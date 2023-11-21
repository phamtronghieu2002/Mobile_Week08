import {View,Text,TextInput,StyleSheet,Button} from 'react-native'
import {useState} from 'react'
import store from './redux.js'
import { addTodo } from './redux.js';
const styles = StyleSheet.create({ 
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10, 
  },
});
export default function Todo({navigation}){
const [todo,setTodo] =useState("");
const [todos,setTodos]=useState(store.getState());
console.log("todos:",todos)
    return(
    <View>
         <TextInput
          style={styles.input}
          value={todo}
          onChangeText={setTodo}
      />
      <Button
      title="add"
      onPress={()=>{
        store.dispatch(addTodo(todo));
        setTodos(store.getState());
      }}
      />
       
       {
          todos.map(todo=><View style={{  }}>
            <Text>{todo.todo}</Text>
          </View>)
       }
      
    </View>
    
    )
}