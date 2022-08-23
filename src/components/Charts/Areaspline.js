import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Areaspline = () => {
  const {innerWidth: windowWidth} = window;
  const AreasplineOptions = {
    chart: {
      width: windowWidth / 3 * 2 - 40,
      height: "350",
      type: 'areaspline'
    },
    title: {
      text: 'فروش سال اخیر نسبت به میانگین'
    },
    accessibility: {
      enabled: false,
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      width: '150px',
      x: 80,
      y: 25,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#F5F5F5'
    },
    yAxis: {
      title: {
        text: '<b>مقدار</b>'
      }
    },
    xAxis: {
      categories: [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
      ],title: {
        text: '<b>ماه</b>'
      }
    },
    tooltip: {
      shared: true,
      headerFormat: '<b>فروش ماه {point.x}</b><br>'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        animation: {
          duration: 1500,
        },
      },
      areaspline: {
        fillOpacity: 0.5
      }
    },
    series: [{
      name: 'امسال',
      data: [
        220,
        229,
        248,
        213,
        191,
        214,
        231,
        195,
        197,
        225,
        248,
        223
      ]
    }, {
      name: 'میانگین سالهای گذشته',
      data: [
        205,
        212,
        232,
        221,
        192,
        206,
        227,
        181,
        188,
        216,
        224,
        213
      ]
    }],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              x: 50,
              y: 225,
              borderWidth: 1,
              backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#F5F5F5'
            },
            xAxis: {
              labels: {
                formatter: function () {
                  return this.value.charAt(0);
                }
              }
            },
            yAxis: {
              title: {
                enabled: false,
              }
            },
            chart: {
              width: 300,
              height: 350
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
        options={AreasplineOptions} 
      />
    </div>
  );
};

export default Areaspline;