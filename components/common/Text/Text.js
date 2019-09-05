// import React from 'react';
// import { StyleSheet, Text as ReactText, View } from 'react-native'; 
// import Colors from '../../../constants/Colors';
// import { DefaultTheme } from 'react-native-paper';

// class Text extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   styles = StyleSheet.create({
//     /* These are properties in the StyleSheet */
    
//     rightAlign: {
//       justifyContent: 'flex-end'
//     },
//     leftAlign: {
//       justifyContent: 'flex-start'
//     },
//     centerAlign: {
//       justifyContent: 'center'
//     },
//     boldWeight: {
//       fontWeight: "bold"
//     },
//     lightWeight: {
//       fontWeight: "100"
//     },
//     mediumWeight: {
//       fontWeight: "500"
//     },
//     weight300Weight: {
//       fontWeight: "300"
//     },
//     tagTextType: {
//       color: '#414b50'
//     },
//     lightTextType: {
//       color: Colors["blueGrey-500"]
//     },
//     primaryTextType: {
//       color: Colors["bluePrimary"]
//     },
//     warningTextType: {
//       color: Colors["warning"]
//     },
//     primaryDisabledTextType: {
//       color: Colors["blueHigh"]
//     },
//     errorTextType: {
//       color: Colors["orangePrimary"]
//     },
//     successTextType: {
//       color: Colors["greenPrimary"]
//     },
//     highlightTextType: {
//       color: Colors["white"],
//       backgroundColor: Colors["bluePrimary"]
//     },
//     disabledTextType: {
//       color: Colors["blueGrey-300"]
//     },
//     strikeText: {
//       textDecorationLine: "line-through",
//     },
//     lineHeightH1:{
//       lineHeight:1.14
//     },
//     textTags: {
//       fontSize: 38,
//       fontWeight: "300",
//       fontStyle: "normal",
//       letterSpacing: -0.4,
//       color: "#414b50",
//     },
//     textH1: {
//       fontSize: 44,
//       fontWeight: "300",
//       fontStyle: "normal",
//       letterSpacing: -0.4,
//       lineHeight: 50,
//       color: Colors["grey-900"],
//     },
//     textH2: {
//       fontSize: 32,
//       fontStyle: "normal",
//       letterSpacing: -0.4,
//       lineHeight: 36,
//       color: Colors["grey-900"],
//     },
//     textH3: {
//       fontSize: 24,
//       fontStyle: "normal",
//       letterSpacing: -0.3,
//       lineHeight: 28,
//       color: Colors["grey-900"],
//     },
//     textH4: {
//       fontSize: 20,
//       fontStyle: "normal",
//       letterSpacing: -0.4,
//       lineHeight: 22,
//       color: Colors["grey-900"],
//     },
//     textH5: {
//       fontSize: 18,
//       fontStyle: "normal",
//       fontWeight: "normal",
//       letterSpacing: -0.4,
//       lineHeight: 20,
//       color: Colors["grey-900"],
//     },
//     textH6: {
//       fontSize: 16,
//       fontStyle: "normal",
//       letterSpacing: -0.4,
//       lineHeight: 20,
//       color: Colors["grey-900"],
//     },
//     textLABEL: {
//       fontSize: 12,
//       fontStyle: "normal",
//       fontWeight: "900",
//       letterSpacing: -0.4,
//       lineHeight: 15,
//       color: Colors["grey-900"],
//       textTransform: "uppercase"
//     },
//     textPARAGRAPH: {
//       fontSize: 16,
//       fontStyle: "normal",
//       letterSpacing: 0.55,
//       lineHeight: 24,
//       color: Colors["grey-900"]
//     },
//     textSMALLPARAGRAPH: {
//       fontSize: 14,
//       fontStyle: "normal",
//       letterSpacing: 0.55,
//       lineHeight: 21,
//       color: Colors["grey-900"]
//     },
//     textCAPTION: {
//       fontSize: 12,
//       fontStyle: "normal",
//       letterSpacing: 0.55,
//       lineHeight: 17,
//       color: Colors["grey-900"]
//     },
//     innerTextH1: {
//       lineHeight: 1.14,
//     },
//     innerTextH2: {
//       lineHeight: 1.13
//     },
//     innerTextH3: {
//       lineHeight: 1.17
//     },
//     innerTextH4: {
//       lineHeight: 1.1
//     },
//     innerTextH5: {
//       lineHeight: 1.11
//     },
//     innerTextH6: {
//       lineHeight: 1.25
//     },
//     innerTextLABEL: {
//       lineHeight: 1.25
//     },
//     innerTextPARAGRAPH: {
//       lineHeight: 1.5
//     },
//     innerTextSMALLPARAGRAPH: {
//       lineHeight: 1.5
//     },
//     innerTextCAPTION: {
//       lineHeight: 1.42
//     }
//   });
  
//   render() {
//     //console.log(styles.textH1);
//     //const className = `${styles['text' + this.props.type]} ${styles['algn' + this.props.align]} ${styles[this.props.textWeight + 'Weight']}`;
//     // We want to take some of the properties from the user such as align, weight, texttype, strikethru thats we use flatten ()
//     const style = StyleSheet.flatten([
//       this.styles['text' + this.props.type.toUpperCase()],  
//       this.styles[this.props.textWeight + 'Weight'],  
//       this.styles[this.props.textType + 'TextType'],
//       // this.styles[this.props.lineHeight + 'lineheight'],
//       this.styles[this.props.strike ? 'strikeText' : ''],
//       this.styles[this.props.align + 'AlignText'],
      
//     ]);
//     const viewStyle = StyleSheet.flatten([
//       {width: '100%', flexDirection: 'row'},  
//       this.styles[this.props.align + 'Align'],  
//     ]);
//     return (
//       (<View style={viewStyle}>
//         <ReactText 
//           style={style} children={this.props.children}>
//         </ReactText>
//       </View>)
//     );
//   }
// }
// export default Text;

import React from 'react';
import { StyleSheet, Text as ReactText, View } from 'react-native'; 
import Colors from '../../../constants/Colors';
import { DefaultTheme } from 'react-native-paper';

class Text extends React.Component {
  constructor(props) {
    super(props);
  }
  styles = StyleSheet.create({
    /* These are properties in the StyleSheet */
    
    rightAlign: {
      justifyContent: 'flex-end'
    },
    leftAlign: {
      justifyContent: 'flex-start'
    },
    centerAlign: {
      justifyContent: 'center'
    },
    
    rightAlignText: {
      textAlign: 'right'
    },
    leftAlignText: {
      textAlign: 'left'
    },
    centerAlignText: {
      textAlign: 'center'
    },
    boldWeight: {
      fontWeight: 'bold'
    },
    lightWeight: {
      fontWeight: '100'
    },
    mediumWeight: {
      fontWeight: '500'
    },
    weight300Weight: {
      fontWeight: '300'
    },
    tagTextType: {
      color: '#414b50'
    },
    lightTextType: {
      color: Colors["blueGrey-500"]
    },
    primaryTextType: {
      color: Colors["bluePrimary"]
    },
    warningTextType: {
      color: Colors["warning"]
    },
    primaryDisabledTextType: {
      color: Colors["blueHigh"]
    },
    errorTextType: {
      color: Colors["orangePrimary"]
    },
    successTextType: {
      color: Colors["greenPrimary"]
    },
    highlightTextType: {
      color: Colors["white"],
      backgroundColor: Colors["bluePrimary"]
    },
    disabledTextType: {
      color: Colors["blueGrey-300"]
    },
    strikeText: {
      textDecorationLine: "line-through",
    },
    lineHeightH1:{
      lineHeight:1.14
    },
    textTags: {
      fontSize: 38,
      fontWeight: '300',
      fontStyle: "normal",
      letterSpacing: -0.4,
      color: "#414b50",
    },
    textH1: {
      fontSize: 44,
      fontWeight: '300',
      fontStyle: "normal",
      letterSpacing: -0.4,
      lineHeight: 50,
      color: Colors["grey-900"],
    },
    textH2: {
      fontSize: 32,
      fontStyle: 'normal',
      letterSpacing: -0.4,
      lineHeight: 36,
      color: Colors["grey-900"],
    },
    textH3: {
      fontSize: 24,
      fontStyle: "normal",
      letterSpacing: -0.3,
      lineHeight: 28,
      color: Colors["grey-900"],
    },
    textH4: {
      fontSize: 20,
      fontStyle: "normal",
      letterSpacing: -0.4,
      lineHeight: 22,
      color: Colors["grey-900"],
    },
    textH5: {
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: 'normal',
      letterSpacing: -0.4,
      lineHeight: 20,
      color: Colors["grey-900"],
    },
    textH6: {
      fontSize: 16,
      fontStyle: "normal",
      letterSpacing: -0.4,
      lineHeight: 20,
      color: Colors["grey-900"],
    },
    textLABEL: {
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: '900',
      letterSpacing: -0.4,
      lineHeight: 15,
      color: Colors["grey-900"],
      textTransform: "uppercase"
    },
    textPARAGRAPH: {
      fontSize: 16,
      fontStyle: "normal",
      letterSpacing: 0.55,
      lineHeight: 24,
      color: Colors["grey-900"]
    },
    textSMALLPARAGRAPH: {
      fontSize: 14,
      fontStyle: "normal",
      letterSpacing: 0.55,
      lineHeight: 21,
      color: Colors["grey-900"]
    },
    textCAPTION: {
      fontSize: 12,
      fontStyle: "normal",
      letterSpacing: 0.55,
      lineHeight: 17,
      color: Colors["grey-900"]
    },
    innerTextH1: {
      lineHeight: 1.14,
    },
    innerTextH2: {
      lineHeight: 1.13
    },
    innerTextH3: {
      lineHeight: 1.17
    },
    innerTextH4: {
      lineHeight: 1.1
    },
    innerTextH5: {
      lineHeight: 1.11
    },
    innerTextH6: {
      lineHeight: 1.25
    },
    innerTextLABEL: {
      lineHeight: 1.25
    },
    innerTextPARAGRAPH: {
      lineHeight: 1.5
    },
    innerTextSMALLPARAGRAPH: {
      lineHeight: 1.5
    },
    innerTextCAPTION: {
      lineHeight: 1.42
    }
  });
  
  render() {
    //console.log(styles.textH1);
    //const className = `${styles['text' + this.props.type]} ${styles['algn' + this.props.align]} ${styles[this.props.textWeight + 'Weight']}`;
    // We want to take some of the properties from the user such as align, weight, texttype, strikethru thats we use flatten ()
    const style = StyleSheet.flatten([
      this.styles['text' + this.props.type.toUpperCase()],  
      this.styles[this.props.textWeight + 'Weight'],  
      this.styles[this.props.textType + 'TextType'],
      // this.styles[this.props.lineHeight + 'lineheight'],
      this.styles[this.props.strike ? 'strikeText' : ''],
      this.styles[this.props.align + 'AlignText'],  
      
    ]);
    const viewStyle = StyleSheet.flatten([
      {width: '100%', flexDirection: 'row'},  
      this.styles[this.props.align + 'Align'],  
    ]);
    return (
      (<View style={viewStyle}>
        <ReactText 
          style={style} children={this.props.children}>
        </ReactText>
      </View>)
    );
  }
}
export default Text;