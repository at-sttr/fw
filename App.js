import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

let tmpSum = 0;
const articles = [
  {
    id: 1,
    name: "Bier 0,33l",
    price: 3,
    count: 0,
    sumArt: 0
  },
  {
    id: 2,
    name: "Limo 0,5l",
    price: 2.5,
    count: 0,
    sumArt: 0
  },
  {
    id: 3,
    name: "Glühmost",
    price: 3,
    count: 0,
    sumArt: 0
  },
  {
    id: 4,
    name: "Kinderpunsch",
    price: 1.5,
    count: 0,
    sumArt: 0
  },
  {
    id: 5,
    name: "Wurst + Brot",
    price: 4.5,
    count: 0,
    sumArt: 0
  },
  {
    id: 6,
    name: "Zack-Zack",
    price: 4.5,
    count: 0,
    sumArt: 0
  },
  {
    id: 7,
    name: "12er Träger Bier",
    price: 30,
    count: 0,
    sumArt: 0
  },
  {
    id: 8,
    name: "Sprizzero/Bitterorange",
    price: 4,
    count: 0,
    sumArt: 0
  }];

export default function App() {
  const [sum, setSum] = useState(0);

  function updatePrice (article) {
    articles[article.id - 1].sumArt = article.sumArt + article.price
    articles[article.id - 1].count = articles[article.id - 1].count + 1
    
    tmpSum = 0;

    articles.forEach(article => {
      tmpSum = tmpSum + article.sumArt;
    });

    setSum(tmpSum);
  }

  function reset () {
    articles.forEach(article => {
      article.count = 0
      article.sumArt = 0
    });

    setSum(0);
  }
  
  return (
    <View style={styles.container}>

      {articles.map((article) => (
        <Pressable style={styles.button} key={article.id} onPress={() => updatePrice(article)}>
          <Text style={styles.buttonLabel} key={article.id}>{article.name} - EUR: {article.price} - Anzahl: {article.count}</Text>
        </Pressable>
      ))}

      <Text style={styles.buttonLabel}>Summe: {sum}</Text>

      <Pressable style={styles.button} key="reset" onPress={() => reset()}>
        <Text style={styles.buttonLabel} key="reset">!! RESET !!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    aspectRatio: 10 / 3
  },
  button: {
    marginBottom:20,
  },
  buttonLabel: {
    marginBottom:20,
    color: '#000',
    fontSize: 23,
  },
});