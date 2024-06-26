import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const CustomToggleSwitch = ({ isOn, onColor, offColor, size, onToggle }) => {
    const handleToggle = () => {
        onToggle(!isOn);
    };

    const switchWidth = size === 'large' ? 70 : 40;
    const switchHeight = size === 'large' ? 40 : 20;
    const circleSize = size === 'large' ? 28 : 18;

    const switchStyle = {
        backgroundColor: isOn ? onColor : offColor,
        width: switchWidth,
        flexDirection: 'row',
        height: switchHeight,
        borderRadius: switchHeight / 2,
        padding: 6,
        justifyContent: isOn ? 'flex-end' : 'flex-start',
        
    };

    const circleStyle = {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: 'white',
    };

    return (
        <TouchableOpacity style={switchStyle} onPress={handleToggle}>
            <View style={circleStyle} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomToggleSwitch;
