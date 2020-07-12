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
      options: data,
      details: {}
    };
  },

  computed:{
    formatData(){
let x = Object.values(this.details)
let e = {o:0,  i:0, a: 0, j:0, ab:0, k:0, b:0, l:0} //age 20 - 40
let f = {o:0,  i:0, a: 0, j:0, ab:0, k:0, b:0, l:0} //age 41 -60
let g=  {o:0,  i:0, a: 0, j:0, ab:0, k:0, b:0, l:0} // age 61-80

let twentygroup;
let fourtygroup;
let sixtygroup;

for(const i of x){
    if(i.Age > 19 && i.Age < 41 ){
        
        if(i.Bloodgroup === 'O+'){
            e.o++
        }else if(i.Bloodgroup === 'O-'){
            e.i++
        }
        else if(i.Bloodgroup === 'A+'){
            e.a++
        }
           else if(i.Bloodgroup === 'A-'){
            e.j++
        }
        else if (i.Bloodgroup === 'AB+'){
            e.ab++
        }
           else if(i.Bloodgroup === 'AB-'){
            e.k++
        }
         else if (i.Bloodgroup === 'B+'){
            e.b++
        }
           else if(i.Bloodgroup === 'B-'){
            e.l++
        }
      
    } else if(i.Age > 40 && i.Age < 61 ){
        if(i.Bloodgroup === 'O+'){
            f.o++
        }else if(i.Bloodgroup === 'O-'){
            f.i++
        }
        else if(i.Bloodgroup === 'A+'){
            f.a++
        }
           else if(i.Bloodgroup === 'A-'){
            f.j++
        }
        else if (i.Bloodgroup === 'AB+'){
            f.ab++
        }
           else if(i.Bloodgroup === 'AB-'){
            f.k ++
        }
         else if (i.Bloodgroup === 'B+'){
            f.b++
        }
           else if(i.Bloodgroup === 'B-'){
            f.l++
        }
    }
    else if(i.Age > 60 && i.Age < 81 ){
        if(i.Bloodgroup === 'O+'){
            g.o++
        }else if(i.Bloodgroup === 'O-'){
            g.i++
        }
        else if(i.Bloodgroup === 'A+'){
            g.a++
        }
           else if(i.Bloodgroup === 'A-'){
            g.j ++
        }
        else if (i.Bloodgroup === 'AB+'){
            g.ab++
        }
           else if(i.Bloodgroup === 'AB-'){
            getComputedStyle.k ++
        }
         else if (i.Bloodgroup === 'B+'){
            g.b++
        }
           else if(i.Bloodgroup === 'B-'){
            g.l++
        }
    }
}
twentygroup = Object.values(e)
fourtygroup = Object.values(f)
sixtygroup = Object.values(g)

return {twentygroup, fourtygroup, sixtygroup }
    }
  }
};
</script>
