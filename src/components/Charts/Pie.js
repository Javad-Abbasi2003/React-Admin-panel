import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
import HC_more from "highcharts/highcharts-more";

HC_more(Highcharts);
highcharts3d(Highcharts);

const Pie = () => {
  const {innerWidth: windowWidth} = window;
  const PieOptions = {
    chart: {
      width: (windowWidth / 8) * 3 - 50,
      height: "350",
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 50,
        beta: 0,
      },
    },
    title: {
      text: "<b>سفارش ماهیانه هر دسته</b>",
    },
    tooltip: {
      pointFormat: "تعداد: <b>{point.y} عدد</b>",
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
    },
    plotOptions: {
      series: {
        animation: {
          duration: 1000,
        },
      },
      pie: {
        shadow: true,
        depth: 40,
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.y}",
        },
      },
    },
    accessibility: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "دسته",
        colorByPoint: true,
        data: [
          {
            name: "ابزار و تجهیزات صنعتی",
            y: 11,
          },
          {
            name: "ورزش و سفر",
            y: 10,
          },
          {
            name: "لوازم تحریر",
            y: 8,
          },
          {
            name: "کالای دیجیتال",
            y: 78,
            sliced: true,
          },
          {
            name: "مد و پوشاک",
            y: 31,
          },
          {
            name: "خانه و آشپزخانه",
            y: 25,
          },
          {
            name: "خوراکی ها",
            y: 22,
          },
          {
            name: "زیبایی و سلامت",
            y: 18,
          },
        ],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            chart: {
              width: 300,
              height: 300,
            },
            plotOptions: {
              pie: {
                depth: 20,
                dataLabels: {
                  enabled: false,
                  format: "<b>{point.name.charAt(0)}</b>",
                },
              },
              series: {
                dataLabels: {
                  enabled: false,
                },
                center: ["50%", "20%"],
              }
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
    <div>
      <HighchartsReact 
        highcharts={Highcharts} 
        options={PieOptions} 
      />
    </div>
  );
};

export default Pie;
