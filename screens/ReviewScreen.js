import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Review Jobs",
      headerRight: (
        <Button
          title="Settings"
          onPress={() => navigation.navigate("Settings")}
          backgroundColor="rgba(0,0,0,0)"
          color="rgb(0,0,0)"
        />
      ),
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    }
  }

  renderLikedJobs = () => {
    return this.props.likedJobs.map(job => {
      return (
        <Card>
          <View style={{ height: 200 }}>
            <View style={styles.detailWrapper}>
              <Text>{job.company}</Text>
              <Text>{job.formattedRelativeTime}</Text>
            </View>
          </View>
        </Card>
      );
    });
  }

  render(){
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  detailWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

function mapStateToProps(state) {
  return { likedJobs: state.likedJobs }
}

export default connect(mapStateToProps)(ReviewScreen);
