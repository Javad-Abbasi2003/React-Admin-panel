import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HC_more from "highcharts/highcharts-more";
import solidGauge from "highcharts/modules/solid-gauge.js";

HC_more(Highcharts);
solidGauge(Highcharts);

const Gauge = () => {
  const {innerWidth: windowWidth} = window;
  const [sale, setSale] = useState(50);

  useEffect(() => {
    setInterval(() => {
      const newSale = Math.floor(Math.random() * 90 + 5);
      setSale(newSale);
    }, 3000)
  },[])
  
  const GaugeOptions = {
    chart: {
      width: windowWidth / 4 - 50,
      height: "350",
      type: 'solidgauge'
    },
    title: "فروش هفتگی",
    pane: {
      center: ['50%', '75%'],
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc'
      }
    },
    tooltip: {
      enabled: false
    },
    accessibility: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: '<b style="font-size:20px">فروش هفتگی</b>',
        y: -100
      },
      stops: [
        [0.2, '#DF5353'], // red
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#55BF3B'] // green
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      labels: {
        y: 20
      }
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: -30,
          borderWidth: 0,
          useHTML: true
        }
      }
    },
    series: [{
      name: 'فروش',
      data: [sale],
      dataLabels: {
        format:
          '<span style="font-size:25px">{y}</span>'
      }
    }],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            chart: {
              width: 300,
            },
          },
        },
      ],
    }
  };

  return (
    <div>
      <HighchartsReact 
        highcharts={Highcharts} 
        options={GaugeOptions} 
      />
    </div>
  );
};

export default Gauge;