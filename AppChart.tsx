import React, { Component, useRef, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { createChart, CrosshairMode } from 'lightweight-charts';

function AppChart(props) {
  const chartContainerRef = useRef();
  const chart = useRef();
  const resizeObserver = useRef();

  const [toolTips, setToolTips] = useState([]);

  useEffect(() => {
    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        backgroundColor: '#FFFFFF',
        textColor: 'rgba(0, 0, 0, 0.9)',
      },
      grid: {
        vertLines: {
          color: '#f0f0f0',
        },
        horzLines: {
          color: '#f0f0f0',
        },
      },
      crosshair: {
        mode: CrosshairMode.Magnet,
      },
      priceScale: {
        borderColor: '#485c7b',
        autoScale: true,
        mode: 0,
      },
      timeScale: {
        borderColor: '#485c7b',
      },
      handleScroll: {
        mouseWheel: true,
        pressedMouseMove: true,
      },
      handleScale: {
        axisPressedMouseMove: true,
        mouseWheel: true,
        pinch: true,
      },
    });

    chart.current.subscribeCrosshairMove(handleCrosshairMoved);

    var lineSeries = chart.current.addLineSeries({
      lineWidth: 2,
    });

    var data = [
      { time: '2019-04-11', value: 80.01 },
      { time: '2019-04-12', value: 96.63 },
      { time: '2019-04-13', value: 76.64 },
      { time: '2019-04-14', value: 81.89 },
      { time: '2019-04-15', value: 74.43 },
      { time: '2019-04-16', value: 80.01 },
      { time: '2019-04-17', value: 96.63 },
      { time: '2019-04-18', value: 76.64 },
      { time: '2019-04-19', value: 81.89 },
      { time: '2019-04-20', value: 74.43 },
      { time: '2019-04-21', value: 60.01 },
      { time: '2019-04-22', value: 56.63 },
      { time: '2019-04-23', value: 46.64 },
      { time: '2019-04-24', value: 61.89 },
      { time: '2019-04-25', value: 54.43 },
      { time: '2019-04-26', value: 70.01 },
      { time: '2019-04-27', value: 86.63 },
      { time: '2019-04-28', value: 96.64 },
      { time: '2019-04-29', value: 81.89 },
      { time: '2019-04-30', value: 74.43 },
    ];

    lineSeries.setData(data);
  }, []);

  function handleCrosshairMoved(param) {
    if (param.point != undefined) {
      const aList = param.seriesPrices;
      setToolTips(Array.from(aList.values()));
    }
  }

  return (
    <div>
      {toolTips !== [] && toolTips[0] !== undefined ? (
        <p> Value : {toolTips[0]}</p>
      ) : null}
      <div
        id="chartContainerRef"
        ref={chartContainerRef}
        className="chart-container"
        style={{
          marginLeft: '12px',
        }}
      />
    </div>
  );
}

// interface AppProps { }
// interface AppState {
//   name: string;
// }

// class LightWeightChartsView  extends Component<AppProps, AppState> {

//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//       Hi
//       </div>
//     );
//   }
// }

export default AppChart;
