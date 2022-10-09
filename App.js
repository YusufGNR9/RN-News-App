import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import news_data from "./src/news_data.json";
import { NewsCard } from "./src/components/NewsCard";
import { ScrollViewComponent } from "./src/components/NewsCard";

 function App() {

  const renderNews = ({item}) => <NewsCard news={item}/>

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.headerText}>News</Text>
       <FlatList
       ListHeaderComponent={ () => (
         <ScrollViewComponent /> 
       )} 
       keyExtractor={(item) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
        //renderItem={({item}) => <NewsCard news={item} />
        //eski hali böyleydi renderItem'ın. Eski halinde 200 çağrımda 200 kere fonksiyon oluşup 200 kere işleniyordu. 
        //yeni hali yani şu anki kodumuzda olan ise Facebook'un önerdiği bir yapı bize fonksiyonu 200 kere çağırma işi yaptırıyor. Bu da verimlilik demek.
       />
     </SafeAreaView>
  );
 };

 const styles = StyleSheet.create({
    container :{
      flex : 1,
      backgroundColor : "#eceff1",
    },
    
    headerText:{
      fontSize: 50,
      fontWeight: "bold",
    },  
 });

 export default App;