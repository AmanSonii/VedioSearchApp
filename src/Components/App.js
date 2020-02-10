import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtbue';
import VedioList from './VedioList';
import {VedioDetail} from './VedioDetail';
class App extends React.Component
{
    state= {vedios:[],slectedVedio:null};
     cssClass = '';
     cssRow = '';
     tenWideColumn = '';
     threeWideColumn = '';
    Search =  async (d) =>
   {
       console.log(d)
    const response = await  youtube.get('/search',{
        params:{
            q: d
        }
    });
    this.setState({slectedVedio:null});
    this.setState({vedios:response.data.items});
   }

  onVideoSelect = (s) =>
  {
      console.log(s);
 this.setState({slectedVedio:s})
 this.cssClass = 'ui grid';
    this.cssRow = 'ui row';
     this.tenWideColumn = 'ten wide column';
     this.threeWideColumn = 'five wide column';
  }

    render()
    {
        return (
            <div className='ui container' style={{marginTop:'10px'}}>
              
                <SearchBar valueFromSearchBar={this.Search}></SearchBar>
                <div className={this.cssClass}>
                    <div className={this.cssRow}>
                        <div className={this.tenWideColumn}>
                             <VedioDetail vedio={this.state.slectedVedio}></VedioDetail>
                        </div>
                        <div className={this.threeWideColumn}>
                              <VedioList vedios={this.state.vedios} slectedVedio={this.onVideoSelect}></VedioList>
                        </div>
                
                    </div>
                </div>
                

            </div>
            
        )
    }
}

export default App;