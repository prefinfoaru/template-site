export default {
    height: 350,
    type: 'line',
    options: {
        chart: {
            stacked: false,
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [0, 5],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },
        colors: ['#4680ff', '#11c15b'],
        fill: {
            opacity: [0.85, 1],
        },
        labels: [
            '01/01/2003',
            '02/01/2003',
            '03/01/2003',
            '04/01/2003',
            '05/01/2003',
            '06/01/2003',
            '07/01/2003',
            '08/01/2003',
            '09/01/2003',
            '10/01/2003',
            '11/01/2003'
        ],
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            min: 0
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (y) => {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + ' views';
                    }
                    return y;

                }
            }
        },
        legend: {
            labels: {
                useSeriesColors: true
            },
            markers: {
                customHTML: [
                    () => {
                        return '';
                    },
                    () => {
                        return '';
                    }
                ]
            }
        }
    },
    series: [{
        name: 'Facebook',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'Dribbble',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }]
}