/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

/*import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';*/

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <TitleBar>
          <Avatar source={require('./assets/avatar.jpg')} />
          <Title>Welcome Back</Title>
          <Name>Meng</Name>
        </TitleBar>
        <Subtitle>Continue Learning</Subtitle>
        <Card />
      </Container>
    );
  }
}

const Container = styled.View`
  background-color: #f0f3f5;
  flex: 1;
`;
const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
const Subtitle = styled.Text`
  font-size: 15px;
  color: #b8bece;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;
