<script>
  import { onMount } from "svelte";

  export let datasets;

  let canvasElement;

  onMount(() => {
    new Chart(canvasElement, {
      type: "line",
      data: {
        labels: [
          "Singapore",
          "Tokyo",
          "Sydney",
          "San Francisco",
          "Dallas",
          "New York",
          "London",
          "Amsterdam",
          "Frankfurt",
          "Bangalore",
        ],
        datasets: datasets.map((dataset) => ({
          borderDash: dataset.borderDash || [],
          borderJoinStyle: "round",
          borderCapStyle: "round",
          label: dataset.label,
          borderColor: dataset.color,
          pointBorderColor: "#FFF",
          pointBackgroundColor: dataset.color,
          pointBorderWidth: 2,
          pointRadius: 4,
          borderWidth: 4,
          data: dataset.data,
        })),
      },
      options: {
        responsive: false,
        elements: {
          line: {
            cubicInterpolationMode: "monotone",
          },
        },
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: "white",
              boxHeight: 12,
              font: {
                size: 24,
              },
            },
          },
        },
        scales: {
          y: {
            grid: {
              drawTicks: false,
              color: "rgba(255, 255, 255, 0.2)",
            },
            ticks: {
              padding: 16,
              color: "lightgray",
              font: {
                size: 20,
              },
              callback: (value) => `${value} ms`,
            },
          },
          x: {
            ticks: {
              color: "white",
              font: {
                size: 24,
              },
            },
          },
        },
      },
    });
  });
</script>

<canvas bind:this={canvasElement} width="800" height="550" />

<style>
  canvas {
    max-height: 90%;
    max-width: 100%;
  }
</style>
