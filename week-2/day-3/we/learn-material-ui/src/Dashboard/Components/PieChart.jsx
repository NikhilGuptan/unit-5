import React from "react";
import { Paper } from "@material-ui/core";
import { PieChart, Pie } from "recharts";

const data = [
	{ name: 'Group A', value: 77 },
	{ name: 'Group B', value: 15 },
	{ name: 'Group C', value: 8 },
]; 

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function PieChartComponent() {
  return (
    <Paper>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey={"name"}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
        />
      </PieChart>
    </Paper>
  );
}

export { PieChartComponent };
