/*
Author: prs-watch

Handle extention's popup screen.
*/
$(function(){
    let data = []
    const background = chrome.extension.getBackgroundPage()
    const count = background.count['contents']
    for (const key of Object.keys(count)){
        data.push([key, count[key]])
    }
    $('#graph').highcharts({
        title: {
            text: 'MLB.com Prospect Watch Visualizer'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    formatter: function() {
                        return '<b>'
                        + this.point.name
                        + '</b> : '
                        + Math.round(this.percentage * 10) / 10
                        + '%'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '',
            data: data
        }],
        tooltip: {
            formatter: function() {
                return this.y
            },
            enabled:true
        }
    });
})
