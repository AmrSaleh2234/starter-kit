🎉 Black Friday Sale! Up to 50% Off
Buy Now
FEATURES
API
THEMING
PASS THROUGH
Chart
Chart components are based on Chart.js, an open source HTML5 based charting library.

Import

import Chart from 'primevue/chart';

Chart.js
Chart component uses Chart.JS underneath so it needs to be installed as a dependency.


npm install chart.js

Basic
A chart is configured with 3 properties; type, data and options. Chart type is defined using the type property that accepts pie, doughtnut, line, bar, radar and polarArea as a value. The data defines datasets represented with the chart and the options provide numerous customization options to customize the presentation.


<Chart type="bar" :data="chartData" :options="chartOptions" />

Pie
A pie chart is a circular statistical graphic which is divided into slices to illustrate numerical proportion.


<Chart type="pie" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />

Doughnut
A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.


<Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />

Vertical Bar
A bar chart or bar graph is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent.


<Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem"  />

Horizontal Bar
A bar chart is rendered horizontally when indexAxis option is set as y.

Composition API
Options API





<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem"  />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: "#f87979",
                
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    color: textColor,
                  
                },
                
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
}
</script>

Stacked Bar
Bars can be stacked on top of each other when stacked option of a scale is enabled.


<Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />

Line
A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.


<Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />

Multi Axis
Multiple axes can be added using the scales option.


<Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />

Line Styles
Various styles of a line series can be customized to display customizations like an area chart.


<Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />

Polar Area
Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.


<Chart type="polarArea" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />

Radar
A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.


<Chart type="radar" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />

Combo
Different chart types can be combined in the same graph usign the type option of a dataset.


<Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />

Accessibility
Screen Reader
Chart components internally use canvas element, refer to the Chart.js accessibility guide for more information. The canvas element can be customized with canvasProps property to define aria roles and properties, in addition any content inside the component is directly passed as a child of the canvas to be able to provide fallback content like a table.


<Chart type="line" :data="data" :canvasProps="{'role': 'img', 'aria-label': 'Data'}" />

PrimeVue 3.41.0 on Vue 3 by PrimeTek