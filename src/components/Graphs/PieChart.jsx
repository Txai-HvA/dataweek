import { useEffect } from 'react';
import * as d3 from 'd3';
import '../../css/PieChart.css';

export const PieChart = ({ title, data }) => {
    useEffect(() => {
        //Show the charts once the timing on the video is right
        setTimeout(() => {
            createPieChart(data);
        }, 40000);
    }, []);

    const createPieChart = (data) => {
        let width = 600;
        let height = 350;
        //The radius of the pieplot is half the width or half the height (smallest one)
        let outerRadius = Math.min(250, 250) / 2;

        //Creates new svg
        const svg = d3
            .select('#pieChart')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        //Title
        svg.append('text')
            .attr('id', 'pieChartTitle')
            .attr('x', 0)
            .attr('y', -140)
            .text(title);

        //Descriptiopn
        svg.append('text')
            .attr('id', 'pieChartDescr')
            .attr('x', 0)
            .attr('y', 145)
            .html(
                `~${data[0].estAmount}/${
                    data[0].estAmount + data[1].estAmount
                } van aantal reizigers op ons traject`
            );

        //Creates the circle
        //where .innerRadius() is the hole in the middle
        //and where .outerRadius() is the actual radius of the circle
        const arcGenerator = d3.arc().innerRadius(0).outerRadius(outerRadius);

        const pieGenerator = d3
            .pie()
            .padAngle(0)
            .value((d) => d.obsAmount);

        const pieChartSVG = svg.selectAll().data(pieGenerator(data)).enter();

        //Append arcs
        pieChartSVG
            .append('path')
            .style('fill', (d) => d.data.color)
            .transition()
            .delay((d, i) => i * 500)
            .attr('d', arcGenerator);

        //Append text labels
        pieChartSVG
            .append('text')
            .transition()
            .delay((d, i) => i * 500)
            .text((d) => d.data.obsAmount + ' ' + d.data.type)
            .style('fill', '#ffffff')
            .attr('transform', (d) => `translate(${arcGenerator.centroid(d)})`); //used to compute the midpoint of the centerline of the arc
    };

    const createComponent = () => {
        return (
            <div>
                <div id="pieChart" />
            </div>
        );
    };

    return createComponent();
};
