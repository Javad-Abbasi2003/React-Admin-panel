import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DashboardAreaspline = () => {
  const { innerWidth: windowWidth } = window;
  const options = {
    chart: {
      type: "areaspline",
      width: (windowWidth / 3) * 2 - 40,
      height: "480",
    },
    title: {
      text: "<b>میزان سفارش سالیانه</b>",
    },
    legend: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: '<b style="font-size:18px">مقدار</b>',
      },
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
      ],
      title: {
        text: '<b style="font-size:18px">ماه</b>',
      },
    },
    plotOptions: {
      series: {
        animation: {
          duration: 2000,
        },
      },
      areaspline: {
        fillOpacity: 0,
      },
    },
    accessibility: {
      enabled: false,
    },
    series: [
      {
        name: "تعداد",
        data: [22, 82, 58, 34, 36, 30, 54, 62, 48, 32, 44, 70],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 450,
          },
          chartOptions: {
            chart: {
              width: 300,
              height: 400,
            },
            xAxis: {
              labels: {
                formatter: function () {
                  return this.value.charAt(0);
                },
              },
            },
            yAxis: {
              title: {
                text: "",
              },
            },
          },
        },
      ],
    },
  };

  return (
    <>
      <HighchartsReact 
        highcharts={Highcharts} 
        options={options} 
      />
    </>
  );
};

export default DashboardAreaspline;
