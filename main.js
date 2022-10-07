const FRAME_HEIGHT = 600;
const FRAME_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const FRAME = d3.select("#vis")
                    .append("svg")
                        .attr("height", FRAME_HEIGHT)
                        .attr("width", FRAME_WIDTH)
                        .attr("class", "frame");


d3.csv("data/data.csv").then((data) => {
    console.log(data);
    
    FRAME.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
        .attr("x", MARGINS.left * 2)
        .attr("y", (d) => { return (d.Category.charCodeAt(0) - 64) * MARGINS.top; })
        .attr("width", (d) => { return d.Value/500; })
        .attr("height", 20)
        .attr("style", "fill:blue");
})