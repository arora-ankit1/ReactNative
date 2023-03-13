import React, { Component,useState } from 'react';
import { View, Text,
    StyleSheet,
    TouchableOpacity,ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchNewsData } from '../actions/NewsActions';
import Video from 'react-native-video';
// import { FlatList } from 'react-navigation';


class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props.fetchNewsArticles());
        console.log(props.newsArticles);
        this.state = {
        };
    }
    render() {
      const [selectedUrl, setSelectedUrl] = useState("");
        return (
        
            <ScrollView style={styles.container}>
              {/* <Text>Hello World !</Text> */}

              
              <Video style={styles.backgroundVideo} source={{uri:{selectedUrl}}}   
       ref={(ref) => {
         this.player = ref
       }}                                      
       onBuffer={this.onBuffer}                
       onError={this.videoError}               
        />
                {this.props.newsArticles.map(item => (
                <TouchableOpacity style={styles.item} onPress={()=>{setSelectedUrl(item.detail.playUrl)}}>
<Text style={styles.textItem}>{item.meta.title}</Text>
                </TouchableOpacity>
                ))
                                  }
                
            </ScrollView>

            
    // <Text>Hello world</Text>   
    );
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
     height: 200,
     width: 100,
    margin: 10,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10
    },
    container: {
        flex:1,
    },
    item: {
      height: 80,
      flex:1,
      backgroundColor: '#f9c2ff',
      marginStart: 30,
      marginVertical: 10,
      width: '80%',
      alignSelf: 'flex-start',
      borderRadius: 20,
     
    },
    textItem: {
      alignSelf:'center',
      fontSize: 20,
      color: 'blue',
      alignItems: 'center',
      justifyContent: 'space-around',
      textAlign: 'center',
      textAlignVertical: 'center',
      flex:1
    }
  });

  const mapStateToProps = (state) => ({
    newsArticles: state.newsReducer.results,
  })
  
  const mapDispatchToProps = (dispatch) => ({
    fetchNewsArticles: () => dispatch(fetchNewsData())
  });


export default connect(mapStateToProps,mapDispatchToProps) (Home)