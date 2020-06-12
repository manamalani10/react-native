import React, { Component } from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

 class ActionBarImage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{
            uri:
              'data:image/png;base64,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',
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: 15,
          }}
        />
      </View>
    );
  }
}
export default ActionBarImage;