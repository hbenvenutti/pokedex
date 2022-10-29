export const chartOptions = {
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
          width: 600,
          height: 375
        }
      }
    },
    {
      breakpoint: 605,
      options: {
        chart: {
          width: 450,
        }
      }
    },
    {
      breakpoint: 460,
      options: {
        chart: {
          width: 350,
        }
      }
    },
  ],
  plotOptions: {
    bar: {
      borderRadius: 8
    }
  },
  yaxis: {
    max: 450
  },
  xaxis: {
    categories: ['HP', 'Attack', 'Special Attack', 'Defense', 'Special Defense', 'Speed']
  }
}
