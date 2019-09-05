import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput as NativeTextInput
} from 'react-native';
import Text from '../components/common/Text/Text';
import TextInput from '../components/common/TextInput/TextInput'



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        {/* opt shft A  default not needed to be specified*/}
        <View style={styles.helpContainer}>
         
          {/* <Text type="H1" textType="default" lineHeight="H1">  This is H1 default style </Text>  */}

          <View style={{width: "100%"}}>
          <Text type="H3" textType="primary" align="center">   Text field Demo </Text>
      
          <Text type="H4" textType="light" align="left">   Standard  </Text>
          <TextInput label="First Name" suffixIcon="lock" maxLength={5} />

          <Text type="H4" textType="light" align="left">   Standard with hint text  </Text>
          <TextInput label="PO number" hintText="Helper text lorem ipsum dolor" />

          {/* Error fields with and without hint behavior needs to be updated */}

          <Text type="H4" textType="light" align="left">   Standard - error state  </Text>
          <TextInput error={true} label="Field label" errorText="Error text placeholder goes here" />

          <Text type="H4" textType="light" align="left">   Error + hint text</Text>
          <TextInput error={true} label="Field name" errorText="Please enter a membership number" hintText="13 or 17 digits number on the back of your membership card." />

          <Text type="H4" textType="light" align="left">   Required formfields(indicate only when needed)</Text>
          <TextInput required={true} label="First Name" />

          <Text type="H4" textType="light" align="left">   Read-only</Text>
          <TextInput disabled={true} label="Not applicable input field" hintText="Helper text lorem ipsum dolor" />

          <Text type="H4" textType="light" align="left">   Read-only</Text>
          <TextInput disabled={true} label="Not applicable input field" hintText="Helper text lorem ipsum dolor" value="Test value" />

          <Text type="H4" textType="light" align="left">   Trailing text + hint text</Text>
          <TextInput label="Field label" suffixText="unit" hintText="Helper text lorem ipsum dolor" />

          <Text type="H4" textType="light" align="left">   Leading text + hint text</Text>
          <TextInput label="Field label" prefixText="Unit" hintText="Helper text lorem ipsum dolor" />

          <Text type="H4" textType="light" align="left">   Error: Trailing text + hint text</Text>
          <TextInput error={true} label="Field label" suffixText="unit" errorText="Helper text lorem ipsum dolor" />

          {/* <Text type="H4" textType="light" align="left">   Drop-down inputs</Text>
          <Select data={['Item label 1', 'Item label 2', 'Item label 3', 'Item label 4']} label="Field label" hintText="Helper text lorem ipsum dolor"></Select>

          <Select data={['Select (default)','Item label 1', 'Item label 2', 'Item label 3', 'Item label 4']} label="Select Text" error={true} errorText="This is error"></Select> */}
        
          {/* <TextInput hintText="Additional comment" label="Comment" required={true} unitStart="$" error={true} errorText="Comment is required" /> */}
          {/* <TextInput hintText="Give your name" label="Name" required={true}  /> */}
          
        </View>
          
          <Text type="H1" textType="default">H1 default </Text>
          <Text type="H2" textType="light">H2 light </Text>
          <Text type="H3" textType="disabled">H3 disabled </Text>
          <Text type="H4" textType="primary">H4 primary </Text>
          <Text type="H5" textType="highlight" textWeight="normal" >H5 highlighted</Text>
          <Text type="H6" textType="default" textWeight="normal" >H6 regular</Text>
          <Text type="LABEL" textType="default" >Label black 12/15</Text>
          <Text type="PARAGRAPH" textType="default" >Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="light" textWeight="normal" strike={true}>Paragraph regular 16/24</Text>
          <Text type="SMALLPARAGRAPH" textType="light" textWeight="normal">Paragraph small 14/21</Text>
          <Text type="CAPTION" textType="light" textWeight="normal">Caption regular 12/17</Text>
{/* 
          <Button 
          type="primary"
          onPress={() => console.log("It Worked!")}>
          Primary button
          </Button> */}

       {/*    <Text type="H2" textType="light">Button Component Types, Sizes and States</Text>
          <Text type="PARAGRAPH">Below is a Primary button with default size and default state</Text>
        <Button type="primary" onPress={() => console.log('Default Primary')}>Default Primary</Button>
        <Text type="PARAGRAPH">Below is a Primary button with default size and pressed state</Text>
        <Button type="primary" onPress={() => console.log('Primary pressed')}>Primary pressed</Button>
        <Text type="PARAGRAPH">Below is a Primary button with default size and disabled state</Text>
        <Button type="primary" disabled={true} onPress={() => console.log('Primary disabled')}>Primary disabled</Button>

        <Text type="PARAGRAPH">Below is a Primary button with small size and default state</Text>
        <Button type="primary" size="small" onPress={() => console.log('default small button')}>Pri Small default</Button>
        <Text type="PARAGRAPH">Below is a Primary button with small size and pressed state</Text>
        <Button type="primary" size="small" onPress={() => console.log('default small pressed button')}>Pri Small pressed</Button>
        <Text type="PARAGRAPH">Below is a Primary button with small size and disabled state</Text>
        <Button type="primary" size="small" disabled={true} onPress={() => console.log('default small disabled button')}>Pri Small disabled</Button>

        <Text type="PARAGRAPH">Below is a Secondary button with default size and default state</Text>
        <Button type="secondary" onPress={() => console.log('Secondary Default')}>Secondary Default</Button>
        <Text type="PARAGRAPH">Below is a Secondary button with default size and pressed state</Text>
        <Button type="secondary" onPress={() => console.log('Secondary Pressed')}>Secondary Pressed</Button>
        <Text type="PARAGRAPH">Below is a Secondary button with default size and disabled state</Text>
        <Button type="secondary" disabled={true} onPress={() => console.log('Secondary Disabled')}>Secondary Disabled</Button>

        <Text type="PARAGRAPH">Below is a Secondary button with small size and default state</Text>
        <Button type="secondary" size="small" onPress={() => console.log('Secondary small default')}>Secondary small default</Button>
        <Text type="PARAGRAPH">Below is a Secondary button with small size and pressed state</Text>
        <Button type="secondary" size="small" onPress={() => console.log('Secondary small pressed')}>Secondary small pressed</Button>
        <Text type="PARAGRAPH">Below is a Secondary button with small size and disabled state</Text>
        <Button type="secondary" size="small" disabled={true} onPress={() => console.log('Secondary small disabled')}>Secondary small disabled</Button>

        <Button type="secondary" noBorder={true} onPress={() => console.log('Hello')}>No border</Button>
        <Button type="secondary" noBorder={true} size="small" onPress={() => console.log('Hello')}>pressed</Button>
        <Button type="secondary" noBorder={true} size="small" disabled={true} onPress={() => console.log('Hello')}>disabled</Button> */}


          {/* <Text type="H4" textType="default" textWeight="bold" >H4 Bold 20/22</Text>
          <Text type="H4" textType="light" textWeight="bold" >H4 Bold 20/22</Text>
          <Text type="H4" textType="disabled" textWeight="bold" >H4 Bold 20/22</Text>
          <Text type="H4" textType="primary" textWeight="bold" >H4 Bold 20/22  </Text>
          <Text type="H4" textType="highlight" textWeight="bold" >H4 Bold 20/22 </Text>

          <Text type="H5" textType="default" textWeight="normal" >H5 Reg 18/20</Text>
          <Text type="H5" textType="light" textWeight="normal" >H5 Reg 18/20</Text>
          <Text type="H5" textType="disabled" textWeight="normal" >H5 Reg 18/20</Text>
          <Text type="H5" textType="primary" textWeight="normal" >H5 Reg 18/20</Text>
          

          <Text type="H5" textType="default" textWeight="normal" align="center">H5 Reg 18/20</Text>
          <Text type="H5" textType="light" textWeight="normal" align="center">H5 Reg 18/20</Text>
          <Text type="H5" textType="disabled" textWeight="normal" align="center">H5 Reg 18/20</Text>
          <Text type="H5" textType="primary" textWeight="normal" align="center">H5 Reg 18/20</Text>
          <Text type="H5" textType="highlight" textWeight="normal" align="center">H5 Reg 18/20</Text>

          
          <Text type="H6" textType="light" textWeight="normal" >H6 Reg 16/20</Text>
          <Text type="H6" textType="disabled" textWeight="normal" >H6 Reg 16/20</Text>
          <Text type="H6" textType="primary" textWeight="normal" >H6 Reg 16/20</Text>
          <Text type="H6" textType="primaryDisabled" textWeight="normal" >H6 Reg 16/20</Text>
          <Text type="H6" textType="highlight" textWeight="normal" >H6 Reg 16/20</Text>
          <Text type="H6" textType="success" textWeight="normal" >H6 Reg 16/20</Text>
          <Text type="H6" textType="error" textWeight="normal" >H6 Reg 16/20</Text>
          <Text type="H6" textType="warning" textWeight="normal" >H6 Reg 16/20</Text>

          <Text type="LABEL" textType="default" >Label black 12/15</Text>
          <Text type="LABEL" textType="light" textWeight="normal">Label black 12/15</Text>
          <Text type="LABEL" textType="disabled" textWeight="normal">Label black 12/15</Text>
          <Text type="LABEL" textType="primary" textWeight="normal">Label black 12/15</Text>
          <Text type="LABEL" textType="primaryDisabled" textWeight="normal">Label black 12/15</Text>
          <Text type="LABEL" textType="highlight" textWeight="normal">Label black 12/15</Text>
          <Text type="LABEL" textType="success" textWeight="normal">Label black 12/15</Text>
          <Text type="LABEL" textType="error" textWeight="normal">Label black 12/15</Text>
          <Text type="LABEL" textType="warning" textWeight="normal">Label black 12/15</Text>

          <Text type="LABEL" textType="light" textWeight="medium">Label black medium 12/15</Text>
          <Text type="LABEL" textType="disabled" textWeight="medium">Label black medium 12/15</Text>
          <Text type="LABEL" textType="primary" textWeight="medium">Label black medium 12/15</Text>
          <Text type="LABEL" textType="primaryDisabled" textWeight="medium">Label black medium 12/15</Text>
          <Text type="LABEL" textType="highlight" textWeight="medium">Label black medium 12/15</Text>
          <Text type="LABEL" textType="success" textWeight="medium">Label black medium 12/15</Text>
          <Text type="LABEL" textType="error" textWeight="medium">Label black medium 12/15</Text>
          <Text type="LABEL" textType="warning" textWeight="medium">Label black medium 12/15</Text>

          <Text type="PARAGRAPH" textType="default" >Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="light" textWeight="normal">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="disabled" textWeight="normal">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="primary" textWeight="normal">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="primaryDisabled" textWeight="normal">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="highlight" textWeight="normal">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="success" textWeight="normal">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="error" textWeight="normal">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="warning" textWeight="normal">Paragraph regular 16/24</Text>

          <Text type="PARAGRAPH" textType="default" >Paragraph regular with striked line16/24</Text>
          <Text type="PARAGRAPH" textType="light" textWeight="normal" strike={true}>Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="disabled" textWeight="normal" strike={true}>Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="primary" textWeight="normal" strike={true}>Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="primaryDisabled" textWeight="normal" strike={true}>Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="highlight" textWeight="normal" strike={true}>Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="success" textWeight="normal" strike={true}>Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="error" textWeight="normal" strike={true}>Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="warning" textWeight="normal" strike={true}>Paragraph regular 16/24</Text>

          <Text type="PARAGRAPH" textType="default" align="center">Paragraph regular center aligned 16/24</Text>
          <Text type="PARAGRAPH" textType="light" textWeight="normal" align="center">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="disabled" textWeight="normal" align="center">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="primary" textWeight="normal" align="center">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="primaryDisabled" textWeight="normal" align="center">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="highlight" textWeight="normal" align="center">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="success" textWeight="normal" align="center">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="error" textWeight="normal" align="center">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="warning" textWeight="normal" align="center">Paragraph regular 16/24</Text>

          <Text type="PARAGRAPH" textType="default" align="right">Paragraph regular right aligned 16/24</Text>
          <Text type="PARAGRAPH" textType="light" textWeight="normal" align="right">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="disabled" textWeight="normal" align="right">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="primary" textWeight="normal" align="right">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="primaryDisabled" textWeight="normal" align="right">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="highlight" textWeight="normal" align="right">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="success" textWeight="normal" align="right">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="error" textWeight="normal" align="right">Paragraph regular 16/24</Text>
          <Text type="PARAGRAPH" textType="warning" textWeight="normal" align="right">Paragraph regular 16/24</Text>

          <Text type="SMALLPARAGRAPH" textType="default" >Paragraph small 14/21</Text>
          <Text type="SMALLPARAGRAPH" textType="light" textWeight="normal">Paragraph small 14/21</Text>
          <Text type="SMALLPARAGRAPH" textType="disabled" textWeight="normal">Paragraph small 14/21</Text>
          <Text type="SMALLPARAGRAPH" textType="primary" textWeight="normal">Paragraph small 14/21</Text>
          <Text type="SMALLPARAGRAPH" textType="primaryDisabled" textWeight="normal">Paragraph small 14/21</Text>
          <Text type="SMALLPARAGRAPH" textType="highlight" textWeight="normal">Paragraph small 14/21</Text>
          <Text type="SMALLPARAGRAPH" textType="success" textWeight="normal">Paragraph small 14/21</Text>
          <Text type="SMALLPARAGRAPH" textType="error" textWeight="normal">Paragraph small 14/21</Text>
          <Text type="SMALLPARAGRAPH" textType="warning" textWeight="normal">Paragraph small 14/21</Text>

          <Text type="CAPTION" textType="default" >Caption regular 12/17</Text>
          <Text type="CAPTION" textType="light" textWeight="normal">Caption regular 12/17</Text>
          <Text type="CAPTION" textType="disabled" textWeight="normal">Caption regular 12/17</Text>
          <Text type="CAPTION" textType="primary" textWeight="normal">Caption regular 12/17</Text>
          <Text type="CAPTION" textType="primaryDisabled" textWeight="normal">Caption regular 12/17</Text>
          <Text type="CAPTION" textType="highlight" textWeight="normal">Caption regular 12/17</Text>
          <Text type="CAPTION" textType="success" textWeight="normal">Caption regular 12/17</Text>
          <Text type="CAPTION" textType="error" textWeight="normal">Caption regular 12/17</Text>
          <Text type="CAPTION" textType="warning" textWeight="normal">Caption regular 12/17</Text> */}
          
        </View>
        <View>
        
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
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
    marginHorizontal: 50,
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
