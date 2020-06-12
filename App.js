/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
import React, {Component, setState} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
} from 'react-native';
 import Video from 'react-native-video';
 import VideoPlayer from "react-native-video-player";
 //import {StackNavigator} from "react-navigation";
//import customData from './data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        categories: [
          {
            name: 'Movies',
            videos: [
              {
                id: 1,
                description:
                  "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
                sources: [
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                ],
                subtitle: 'By Blender Foundation',
                thumb: 'images/BigBuckBunny.jpg',
                title: 'Big Buck Bunny',
              },
              {
                id: 2,
                description: 'The first Blender Open Movie from 2006',
                sources: [
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                ],
                subtitle: 'By Blender Foundation',
                thumb: 'images/ElephantsDream.jpg',
                title: 'Elephant Dream',
                selected: false,
              },
              {
                id: 3,
                description:
                  'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
                sources: [
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                ],
                subtitle: 'By Google',
                thumb: 'images/ForBiggerBlazes.jpg',
                title: 'For Bigger Blazes',
                selected: false,
              },
              {
                id: 4,
                description:
                  "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
                sources: [
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                ],
                subtitle: 'By Google',
                thumb: 'images/ForBiggerEscapes.jpg',
                title: 'For Bigger Escape',
                selected: false,
              },
              {
                id: 5,
                description:
                  'Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.',
                sources: [
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
                ],
                subtitle: 'By Google',
                thumb: 'images/ForBiggerFun.jpg',
                title: 'For Bigger Fun',
                selected: false,
              },
              {
                id: 6,
                description:
                  'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
                sources: [
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
                ],
                subtitle: 'By Google',
                thumb: 'images/ForBiggerJoyrides.jpg',
                title: 'For Bigger Joyrides',
                selected: false,
              },
              {
                id: 7,
                description:
                  "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
                sources: [
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
                ],
                subtitle: 'By Google',
                thumb: 'images/ForBiggerMeltdowns.jpg',
                title: 'For Bigger Meltdowns',
                selected: false,
              },
              {
                id: 8,
                description:
                  'Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org',
                sources: [
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
                ],
                subtitle: 'By Blender Foundation',
                thumb: 'images/Sintel.jpg',
                title: 'Sintel',
                selected: false,
              },
              {
                id: 9,
                description:
                  'Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.',
                sources: [
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
                ],
                subtitle: 'By Garage419',
                thumb: 'images/SubaruOutbackOnStreetAndDirt.jpg',
                title: 'Subaru Outback On Street And Dirt',
                selected: false,
              },
              {
                id: 10,
                description:
                  'Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org',
                sources: [
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
                ],
                subtitle: 'By Blender Foundation',
                thumb: 'images/TearsOfSteel.jpg',
                title: 'Tears of Steel',
                selected: false,
              },
              {
                id: 11,
                description:
                  "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
                sources: [
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
                ],
                subtitle: 'By Garage419',
                thumb: 'images/VolkswagenGTIReview.jpg',
                title: 'Volkswagen GTI Review',
                selected: false,
              },
              {
                id: 12,
                description:
                  'The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com',
                sources: [
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
                ],
                subtitle: 'By Garage419',
                thumb: 'images/WeAreGoingOnBullrun.jpg',
                title: 'We Are Going On Bullrun',
                selected: false,
              },
              {
                id: 13,
                description:
                  'The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.',
                sources: [
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
                ],
                subtitle: 'By Garage419',
                thumb: 'images/WhatCarCanYouGetForAGrand.jpg',
                title: 'What care can you get for a grand?',
                selected: false,
              },
            ],
          },
        ],
      },
      selected: false,
    };
    this.touch = this.touch.bind(this);
  }

  /*async data() {
    try {
      const response = await fetch(this.state.url);
      console.warn(response);
      const json = await response.json();
      console.warn(json);
      this.setState({data: json});
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert(err); // TypeError: failed to fetchs

  }*/

  touch() {
    this.setState({selected: true});
  }
  render() {
    let yellow = [];
    return (
      <View>
        <Text>Hello world</Text>
        <VideoPlayer video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }} videoWidth={300} videoHeight={300} thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }} />
        <ScrollView horizontal={true}>
          {this.state.data.categories[0].videos.map(data => {
            yellow.push(data);
            return (
              <View key={data.id}>
                <TouchableHighlight onPress={this.touch}>
                  <Text style={{fontSize: 30, padding: 20}}>{data.title}</Text>
                </TouchableHighlight>
                <Modal  visible={this.state.selected}>
                  <Text>{data.id}</Text>
                  <Button title="button" onPress={()=>{this.setState({selected:false});}} />
                  
                </Modal>
              </View>
            ); 
          })}
        </ScrollView>
      </View>
    );
  }
}
