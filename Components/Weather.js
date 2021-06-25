import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar, Image, ScrollView, SafeAreaView, MaskedViewComponent } from 'react-native';
import Search from './Search';
import { haze, rainy, snow, sunny } from '../assets/backgroundImages/index';
import Header from './Header';

export default function Weather({ weatherData, fetchWeatherData }) {

    const { weather,
            visibility,
            weather: [{description, icon}],
            name,
            main: { temp, humidity, feels_like, pressure },
            wind: { speed },
            sys: { sunrise, sunset },
    } = weatherData;
    const [{ main }] = weather;
    
    
    return (
        <SafeAreaView style={styles.container}>
            
            <StatusBar backgroundColor='darkgray' />
            <Header />
                <Search fetchWeatherData={fetchWeatherData} />
                <ScrollView>
                <View style={{alignItems: 'center' }}>
                    <Text style={styles.title}>{name}</Text>
                    
                </View>
                <View style={styles.current}>
                <Image
                        style={styles.largeIcon}
                        source={{
                        uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
                        }}
                    />
                    <Text style={styles.currentTemp}>{temp} °C</Text>
                </View>
                <Text style={styles.currentDescription}>{description}</Text>
                <View style={styles.extraInfo}>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Feels Like</Text>
                        <Text style={{ fontSize: 20, color: 'white' }}>{feels_like} °C</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Humidity</Text>
                        <Text style={{ fontSize: 20, color: 'white' }}>{humidity}%</Text>
                    </View>
                
                </View>
                <View style={styles.extraInfo}>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Visibility</Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>{visibility}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Wind Speed</Text>
                        <Text style={{ fontSize: 20, color: 'white' }}>{speed} m/s</Text>
                    </View>
                
                </View>
                <View style={styles.extraInfo}>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Sunrise</Text>
                        <Text style={{ fontSize: 20, color: 'white' }}>{new Date(sunrise*1000).toLocaleString()}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Sunset</Text>
                        <Text style={{ fontSize: 20, color: 'white' }}>{new Date(sunset*1000).toLocaleString()}</Text>
                    </View>
                
                </View>
                </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFBF6',
      
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    headerText: {
        fontSize: 36,
        marginTop: 10,
    },
    extraInfo: {
        flexDirection: 'row',
        marginTop: 0,
        justifyContent: 'space-between',
        padding: 10
    },
    info: {
        width: Dimensions.get('screen').width/2.5,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center'
    },
    largeIcon: {
        width: 250,
        height: 200,
      },
      current: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
      },
      currentTemp: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      currentDescription: {
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10
      },
      title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        color: '#e96e50',
      },
});