import React from 'react';
import { View, Text } from 'react-native';

interface RootPageProps {
  title: string;
}

const RootPage: React.FC<RootPageProps> = props => {
  return (
    <View>
      <Text>This is a root page {props.title}</Text>
    </View>
  );
};

export default RootPage;
