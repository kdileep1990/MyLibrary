// import * as WebBrowser from 'expo-web-browser';
// import React from 'react';
// import {
//   Platform,
//   ScrollView,
//   StyleSheet,
//   View,
//   StatusBar
// } from 'react-native';
// import { Header } from 'react-native-elements';
// import Text from '../components/common/Text/Text';
// import TextInput from '../components/common/TextInput/TextInput'
// import Colors from '../constants/Colors';
// import Button from '../components/common/Button/Button';
// import ToggleImages from '../components/common/ToggleImages/ToggleImages';

// const headerTitle = 'Leave feedback';

// export default function DisplayScreen() {
//   const smileyButtonsData = [
//     {
//       imageUrl: require("../assets/images/sadface-outline.png"),
//       selectedImageUrl: require("../assets/images/sadface-filled.png"),
//       value: "Sad"
//     },
//     {
//       imageUrl: require("../assets/images/happyface-outline.png"),
//       selectedImageUrl: require("../assets/images/happyface-filled.png"),
//       value: "Happy"
//     }
//   ];
//   let selectedSmileyValue = '';
//   return (
//     <View style={styles.container}>
//       <Header
//           leftComponent={{ icon: 'close', color: Colors['white'] }}
//           centerComponent={{ text: 'Leave feedback', style: {
//               fontSize: 18,
//               fontWeight: "500",
//               color: Colors['white']
//           } }}
//           containerStyle={{
//               backgroundColor: Colors['bluePrimary']
//           }}
//           placement="left"
//       />
//       <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
//         <Text style={{ flex: 2, justifyContent: 'space-evenly'}}
//           type="H4"
//           textWeight="weight300"
//           textType= "default"
//           align="center"> How do you like this app?
//         </Text>

//         <View style={styles.smileyContainer}>
//           <ToggleImages 
//             data={smileyButtonsData}
//             imageStyle={{width: 59, height: 59}}
//             onValueChange={(selectedValue) => console.log(selectedValue)}>
//           </ToggleImages>
//         </View>

//         <View style={{width: "100%"}} style={styles.multilineTextBox}>
//           <TextInput 
//             label="Comments (required)" 
//             multiline={true} 
//             numberOfLines={10}
//             paddingSides= {16}>
//           </TextInput>
//         </View>

//         <View style={styles.containerButton}>
//           <Button 
//             type="primary"
//             disabled={true}
//             fullWidth={true}
//             onPress={() => console.log("Sending feedback")}>
//             Send
//           </Button>
//         </View>

//         <View style={styles.containerBottomText}>
//           <Text 
//             type="textSMALLPARAGRAPH" 
//             textType= "disabled" 
//             fontWeight="normal" 
//             align="center">
//             All feedback will be reviewed by the team and will be used in future improvements to this app.
//           </Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// DisplayScreen.navigationOptions = {
//   header: null,
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.white,
//   },
//   contentContainer: {
//     flex: 1,
//     marginTop: 32,
//   },
//   smileyContainer: {
//     flex: 1,
//     marginTop: 32,
//     alignItems: "center",
//     justifyContent: 'space-evenly',
//   },
//   multilineTextBox: {
//     flex: 3, 
//     marginTop: 48,
//     marginBottom: 24,
//     backgroundColor: Colors.white,
//   },
//   containerButton: {
//     flex: 1,
//     justifyContent: 'center',  
//     width: '100%'
//   },
//   containerBottomText: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//   },
//   centered: {
//     alignItems: 'center',
//   },
//   containerHeader: {
//     color: Colors.bluePrimary,
//     flex: 1,
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },

//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 16,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     width:180,
//     height:160,
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });

import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header } from 'react-native-elements';
import Text from '../components/common/Text/Text';
import TextInput from '../components/common/TextInput/TextInput'
import Colors from '../constants/Colors';
import Button from '../components/common/Button/Button';
import ToggleImages from '../components/common/ToggleImages/ToggleImages';


class DisplayScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = { selectedSmileyValue: '', comments: '' };
  }
  smileyButtonsData = [

    {
      imageUrl: require("../assets/images/sadface-outline.png"),
      selectedImageUrl: require("../assets/images/sadface-filled.png"),
      value: "Sad"
    },
    {
        imageUrl: require("../assets/images/happyface-outline.png"),
        selectedImageUrl: require("../assets/images/happyface-filled.png"),
        value: "Happy"
    }

  ];
    updateSmileyValue = (selectedValue) => {
        this.setState({
            ...this.state,
            selectedSmileyValue: selectedValue
        })
    };
    updateComments = (changedComments) => {
        this.setState({
            ...this.state,
            comments: changedComments
        })
    };
  render () {
      return (
          <View style={styles.container}>
              <Header
                  leftComponent={{icon: 'close', color: Colors['white']}}
                  centerComponent={{
                      text: 'Leave feedback', style: {
                          fontSize: 18,
                          fontWeight: "500", // this was the culprit
                          color: Colors['white']
                      }
                  }}
                  containerStyle={{
                      backgroundColor: Colors['bluePrimary']
                  }}
                  placement="left"
              />
              <KeyboardAwareScrollView
                  style={styles.container} contentContainerStyle={styles.contentContainer}
                  resetScrollToCoords={{ x: 0, y: 0 }}
                  scrollEnabled={true}
                  keyboardShouldPersistTaps={'always'}
                  showsVerticalScrollIndicator={false}
              >
                  <Text style={{flex: 2, justifyContent: 'space-evenly'}}
                        type="H4"
                        textWeight="weight300"
                        textType="default"
                        align="center"> How do you like this app?
                  </Text>

                  <View style={styles.smileyContainer}>
                      <ToggleImages
                          data={this.smileyButtonsData}
                          imageStyle={{minWidth: 59, minHeight: 59}}
                          onValueChange={this.updateSmileyValue}>
                      </ToggleImages>
                  </View>

                  <View style={{width: "100%", height: "50%"}} style={styles.multilineTextBox}>
                      <TextInput
                          label="Comments (required)"
                          multiline={true}
                          numberOfLines={8}
                          paddingSides={16}
                          value={this.state.comments}
                          onChangeText={this.updateComments}>
                      </TextInput>

                      <Button
                          type="primary"
                          disabled={this.state.comments === ''}
                          fullWidth={true}
                          onPress={() => console.log("feedback form")}>
                          Send
                      </Button>
                  </View>

                  <View style={styles.containerBottomText}>
                      <Text
                          type="textSMALLPARAGRAPH"
                          textType="disabled"
                          fontWeight="normal"
                          align="center">
                          All feedback will be reviewed by the team and will be used in future improvements to this app.
                      </Text>
                  </View>
              </KeyboardAwareScrollView>
          </View>
      );
  }
}

DisplayScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    flex: 1,
    marginTop: 32,
  },
  smileyContainer: {
    flex: 1,
    marginTop: 32,
    alignItems: "center",
    justifyContent: 'space-evenly',
  },
  multilineTextBox: {
    marginTop: 48,

    backgroundColor: Colors.white,
    flex: 3,
  },
  containerButton: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    marginTop: 24,
  },
  containerBottomText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  centered: {
    alignItems: 'center',
  },
  containerHeader: {
    color: Colors.bluePrimary,
    flex: 1,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },

  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    width:180,
    height:160,
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default DisplayScreen;

