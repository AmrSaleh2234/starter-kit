
<template>
    <va-card class=" h-full py-[1%] px-2 ">
        <div class="card">
            <h class="font-bold text-lg">Referring Domains</h>
            <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
        </div>
    </va-card>
   
</template>

<script setup>
import { ref, onMounted } from "vue";
import data from '../pages/admin/cart.json'
onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
     console.log(data.tasks[0].result[0].items[0].new_referring_domains)
    chartData.value.datasets[0].data[0]=data.tasks[0].result[0].items[0].referring_domains
    chartData.value.datasets[0].data[1]=data.tasks[0].result[0].items[1].referring_domains
    chartData.value.datasets[0].data[2]=data.tasks[0].result[0].items[2].referring_domains
    chartData.value.datasets[0].data[3]=data.tasks[0].result[0].items[3].referring_domains

    
    
});

const chartData = ref();
const chartOptions = ref();
        
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
          
            {
                label: 'Third Dataset',
                data: [''],
                fill: true,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4,
                backgroundColor: '#DEF0FE'
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
</script>
