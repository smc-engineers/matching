import React, { Component } from 'react';
import { connect } from 'react-redux';

const SerchResultList = ({ name, lyrist,composer, voice_part }) => (
  <div>
    <div className="song">
      <p>曲名:{name} 作詩:{lyrist} 作曲:{composer} 声部:{voice_part}</p>
      <input className="cinnamon-btn" type="button" value="曲詳細" />
    </div>
  </div>
);

const songList = [
  {
    "id": "1",
    "name": "生きる",
    "lyrist": "谷川俊太郎",
    "composer": "なかにしあかね",
    "voice_part":"混声",
    "description":"test1"
  },
  {
    "id": "2",
    "name": "生きる",
    "lyrist": "谷川俊太郎",
    "composer": "三善晃",
    "voice_part":"混声",
    "description":"test2"
  }
]

class Searchresult extends Component{
  constructor(props){
    super(props)
    this.resultlist = songList;
  } 
  // SerchResultList = ({ name, lyrist,composer, voice_part }) => (
  //   <div>
  //     <p>曲名:{name} 作詩:{lyrist} 作曲:{composer} 声部:{voice_part}!</p>
  //   </div>
  // );

  render(){
    return(
      <header className="App-header">
        <div className="searchresult">{this.props.location.state.searchword}</div>
        <div>
          {songList.map((item) => (
          <SerchResultList name={item.name} lyrist={item.lyrist} composer={item.composer} voice_part={item.voice_part}/>
         
          ))}
        </div>
      
      </header>
    )
  }
}

const mapDispatchToProps = ({})

export default connect (null, mapDispatchToProps)(Searchresult)
