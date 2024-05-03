import React, { Component } from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import LightWeightChartsView from './LightWeightChartsView';
import AppChart from './AppChart';

import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <a href=" https://www.npmjs.com/package/lightweight-charts">
         npm lightweight-charts
        </a>
        {/* <Chart name={this.state.name} /> */}
        <LightWeightChartsView />
        {/* <AppChart /> */}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
