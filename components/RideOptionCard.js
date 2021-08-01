import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-elements/dist/image/Image";

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null)
  const data = [
      {
          id:'Uber-X-1',
          title: "Uber X",
          multiplier: 1,
          image: 'https://bit.ly/3C3OL0B'
      },
      {
        id:'Uber-XL-2',
        title: "Uber XL",
        multiplier: 1.2,
        image: 'https://bit.ly/2WDreU1'
    },
    {
        id:'Uber-Lux-3',
        title: "Uber Lux",
        multiplier: 1.75,
        image: 'https://bit.ly/2VrlvQz'
    },
  ]

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 p-3 rounded-full z-20`}
        >
          <Icon name="chevron-back-outline" type="ionicon" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item:{id, title, multiplier, image}, item}) => (
            <TouchableOpacity
            onPress={() => setSelected(item)}
             style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && "bg-gray-100"}`}>
                <Image 
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={{uri: image}}
                />
                <View style={tw`-ml-6`}>
                    <Text style={tw`text-xl font-semibold`}>{title}</Text>
                    <Text>travel time</Text>
                </View>
                <Text style={tw`text-xl`}>12$</Text>
            </TouchableOpacity>
        )}
      />
      <View>
          <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-1 ${!selected && 'bg-gray-300'}`}>
              <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
