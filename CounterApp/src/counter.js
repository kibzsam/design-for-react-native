import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Counter extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Text>Decrease</Text>
                    </TouchableOpacity>
                    <Text>0</Text>
                    <TouchableOpacity>
                        <Text>Decrease</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'


    }
});

export default Counter;
