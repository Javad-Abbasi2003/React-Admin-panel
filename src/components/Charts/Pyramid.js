import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import funnel from "highcharts/modules/funnel.js";

funnel(Highcharts);

const Pyramid = () => {
  const { innerWidth: windowWidth } = window;
  const PyramidOptions = {
    chart: {
      width: (windowWidth / 8) * 3 - 50,
      height: "350",
      type: "pyramid"
    },
    title: {
      text: "هرم فروش",
      x: -35,
    },
    tooltip: {
      pointFormat: "<b>{point.y}</b>",
    },
    accessibility: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "<b>{point.name} </b>({point.y})",
          softConnector: true,
        },
        center: ["45%", "50%"],
        width: "80%",
      },
    },
    labels:{
      enabled: false,
    }
    ,
    legend: {
      enabled: false,
    },
    series: [{
        name: "کاربر",
        data: [
          ["بازدید سایت", 1654],
          ["درخواست قیمت", 1052],
          ["افزودن به سبد خرید", 388],
          ["تکمیل خرید", 226]
        ],
    }],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            title: {
              x: 0,
            },
            chart: {
              width: 300,
              height: 300
            },
            plotOptions: {
              series: {
                dataLabels: {
                  enabled: false,
                },
                center: ["50%", "50%"],
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={PyramidOptions} />
    </div>
  );
};

export default Pyramid;
