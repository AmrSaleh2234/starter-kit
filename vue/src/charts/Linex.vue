<template>
    <va-card class=" h-full py-[1%] px-2 ">
        <div class="  card flex justify-content-center">
            <Chart style="" type="doughnut" :data="chartData" :options="chartOptions" class="w-full " />
        </div>
    </va-card>
   
</template>

<script setup>
import { ref, onMounted } from "vue";
import data from '../pages/admin/cart.json'

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
     chartData.value.datasets[0].data[0]=data.tasks[0].result[0].items[0].referring_links_tld.com
    chartData.value.datasets[0].data[1]=data.tasks[0].result[0].items[1].referring_links_tld.io
    chartData.value.datasets[0].data[2]=data.tasks[0].result[0].items[2].referring_links_tld.net
    chartData.value.datasets[0].data[3]=data.tasks[0].result[0].items[2].referring_links_tld.org
});

const chartData = ref();
const chartOptions = ref(null);

const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [''],
                backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
            }
        ]
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    return {
        plugins: {
            legend: {
                labels: {
                    cutout: '60%',
                    color: textColor
                }
            }
        }
    };
};
</script>