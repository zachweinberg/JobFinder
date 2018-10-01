import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  ScrollView,
  StyleSheet,
  Linking,
} from 'react-native';
import { MapView } from 'expo';
import { Button, Card, Icon } from 'react-native-elements';
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

      const initialRegion = {
        longitude: job.longitude,
        latitude: job.latitude,
        longitudeDelta: 0.02,
        latitudeDelta: 0.045
      };

      return (
        <Card title={job.jobTitle} key={job.jobkey}>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              cacheEnabled={true}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{job.company}</Text>
              <Text style={styles.italics}>{job.formattedRelativeTime}</Text>
            </View>
            <Button
              title="Apply Now!"
              backgroundColor="#03A9F4"
              onPress={ () => Linking.openURL(job.url) }
            />
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
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  italics: {
    fontStyle: 'italic'
  }
})

function mapStateToProps(state) {
  return { likedJobs: state.likedJobs }
}

export default connect(mapStateToProps)(ReviewScreen);
