import React, {Component, Fragment} from 'react';
import { StyleSheet, View, Text, Image, TextInput} from 'react-native';



export default class Herramientas extends Component {

    constructor() {
        super()
        this.state = {
            textValue: '',
        }
    }
    changeTextInput = text =>{
        this.setState({textValue: text});
    };

    render() {
        return (
            <Fragment>
            <View style={styles.inputsContainer}>
            <TextInput
                style={styles.input}
                placeholder={'Buscar'}
                onChangeText={text => this.changeTextInput(text)}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underlineColorAndroid='transparent'
            />
            <Image style={{height: 25, width: 25}} source = {require('../../img/lupa.png')}/>
            </View>
            <View
            style={styles.items}>
                <View style={styles.item}>
                    <Image style={{height: 25, width: 25}} source = {require('../../img/usuario.png')}/>
                    <Text style={styles.title}>Accounts</Text>
                    <Image style={{height: 15, width: 15}} source = {require('../../img/right-arrow.png')}/>
                </View>
                <View style={styles.item}>
                    <Image style={{height: 25, width: 25}} source = {require('../../img/campana.png')}/>
                    <Text style={styles.title}>Notifications</Text>
                    <Image style={{height: 15, width: 15}} source = {require('../../img/right-arrow.png')}/>
                </View>
                <View style={styles.item}>
                    <Image style={{height: 25, width: 25}} source = {require('../../img/view.png')}/>
                    <Text style={styles.title}>Appearance</Text>
                    <Image style={{height: 15, width: 15}} source = {require('../../img/right-arrow.png')}/>
                </View>
                <View style={styles.item}>
                    <Image style={{height: 25, width: 25}} source = {require('../../img/padlock.png')}/>
                    <Text style={styles.title}>Privacy & Segurity</Text>
                    <Image style={{height: 15, width: 15}} source = {require('../../img/right-arrow.png')}/>
                </View>
                <View style={styles.item}>
                    <Image style={{height: 25, width: 25}} source = {require('../../img/headphones.png')}/>
                    <Text style={styles.title}>Help and Support</Text>
                    <Image style={{height: 15, width: 15}} source = {require('../../img/right-arrow.png')}/>
                </View>
                <View style={styles.item}>
                    <Image style={{height: 25, width: 25}} source = {require('../../img/about.png')}/>
                    <Text style={styles.title}>About</Text>
                    <Image style={{height: 15, width: 15}} source = {require('../../img/right-arrow.png')}/>
                </View>
            </View>
            </Fragment>
        );
    }


}
const styles = StyleSheet.create({
    items: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#DFD9E1',
        padding: 15,
        marginVertical: 3,
        marginHorizontal: 16,
        borderRadius: 3,
    },
    title: {
        flex: 1,
        fontSize: 17,
        paddingLeft: 10,
    },
    input: {
        width: 300,
        height: 45,
        fontSize: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
    },
    inputsContainer: {
        flexDirection: 'row',
        backgroundColor: 'gray',
        padding: 15,
        marginVertical: 3,
        marginHorizontal: 16,
        borderRadius: 3,
    },
});
