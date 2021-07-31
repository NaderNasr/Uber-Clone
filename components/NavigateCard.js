import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_KEY} from '@env'
import {useDispatch} from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/core'

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()


    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
        <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={AutocompleteStyleSheet}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={100}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            enablePoweredByContaine={false}
            query={{
                key: GOOGLE_MAPS_KEY,
                language: "en"
            }}
            onPress={(data, details = null) => {
                dispatch(setDestination({
                    location: details.geometry.location,
                    description: data.description,
                }))
                navigation.navigate('RideOptionCard')
            }}
        />
            </View>

            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const AutocompleteStyleSheet = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})