<template>
  <div class="dashboard">
    <Button label="Submit" icon="pi pi-check" />
    <dashboard-charts />

    <dashboard-info-block />

    <div class="grid grid-cols-12 gap-6">
      <dashboard-tabs class="col-span-12 lg:col-span-6" @submit="addAddressToMap" />

      <DashboardMap ref="dashboardMap" class="col-span-12 lg:col-span-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref ,onMounted } from 'vue'

  import DashboardCharts from './DashboardCharts.vue'
  import DashboardInfoBlock from './DashboardInfoBlock.vue'
  import DashboardTabs from './DashboardTabs.vue'
  import DashboardMap from './DashboardMap.vue'
  import axios from "axios";

  const dashboardMap = ref()
  const test = ref()

  function addAddressToMap({ city, country }: { city: { text: string }; country: string }) {
    dashboardMap.value.addAddress({ city: city.text, country })
  }
  onMounted(()=>{
    console.log("hello world")
    axios.get("/api/evaluations").then(res => {
      test.value= res.data

      console.log(res.data)

    })
  });

</script>

<style lang="scss">
  .dashboard {
    .va-card {
      margin-bottom: 0 !important;
      &__title {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
