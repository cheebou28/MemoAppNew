import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  // eslint-disable-next-line
handlePress() {
    const { params } = this.props.navigation.state;
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });
    db.collection(`users//${params.currentUser.uid}/memos`).add({
      body: 'test memo',
      createdOn: '2017-12-1',
    })
    .then((docRef) => {
    　console.log(docRef.id);
    })
    .catch((error) =>
      console.log(error);
    });
}

  render() {
    return (
      <View styles={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton onPress={this.handlePress.bind(this)}>
          {'\uf067'}
        </CircleButton>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});

export default MemoListScreen;
