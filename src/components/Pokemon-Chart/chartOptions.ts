import { ApexOptions } from "apexcharts";

export const chartOptions: ApexOptions = {
  chart: {
    stacked: false,
    toolbar: {
      show: false
    }
  },
  responsive: [
    {
      breakpoint: 800,
      options: {
        chart: {
          // width: 600,
          height: 375
        }
      }
    },
    {
      breakpoint: 605,
      options: {
        chart: {
          // width: 450,
          height: 375
        }
      }
    },
    {
      breakpoint: 460,
      options: {
        chart: {
          // width: 350,
          height: 375
        }
      }
    },
  ],
  plotOptions: {
    bar: {
      borderRadius: 8,
      dataLabels: {
        position: 'top'
      }
    },
  },
  dataLabels:{
    enabled: true,
    style: {colors: ['#333']},
    offsetY: -20
  },
  yaxis: {
    max: 450,
    show: false
  },
  xaxis: {
    categories: ['HP', 'Attack', 'Special Attack', 'Defense', 'Special Defense', 'Speed']
  }
}
