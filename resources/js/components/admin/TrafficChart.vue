<template>
  <div>
      <VueApexCharts type="line" :options="options" :series="series"></VueApexCharts>
  </div>
</template>
<script>

import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    VueApexCharts
  },
  data: function() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
          zoom: {
            enabled: false
          },
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        }
      },
      series: [
        {
          name: "IP Traffic",
          data: [1, 1.4, 1, 2, 3, 3.5, 1, 5, 8, 4, 3, 6]
        }
      ]
    };
  },
};
</script>