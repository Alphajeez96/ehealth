<template>
  <section class="charts">
        <h3>Bar Chart</h3>
        <vue-highcharts :options="options" ref="barChart"></vue-highcharts>
    </section>
</template>
<script>
import VueHighcharts from "vue2-highcharts";
import Highcharts from "highcharts";

const data = {

  chart: {
    type: "column"
  },
  title: {
    text: "Historic World Population by Region"
  },
  subtitle: {
    text:
      'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
  },
  xAxis: {
    categories: ["A+", "O+", "B+", "AB+", "A-","O-","B-","AB-"],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: "Population",
      align: "high"
    },
    labels: {
      overflow: "justify"
    }
  },
  tooltip: {
    valueSuffix: " Persons"
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "top",
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || "#FFFFFF",
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [
    {
         allowPointSelect: true,
      name: "20-40 Years",
      data: [107, 31, 635, 203, 2,1052, 954, 4250, ]
    },
    {
      name: "41-60 Years",
      data: [133, 156, 947, 408, 6,1052, 954, 4250, ]
    },
    {
      name: "61-80 Years",
      data: [1052, 954, 4250, 740, 38,1052, 954, 4250, ]
    },
    
  ]
};
export default {
  components: {
    VueHighcharts
  },
  data() {
    return {
      options: data
    };
  }
};
</script>
