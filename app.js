const CTX = document.getElementById('lineChart');
let lineChart = new Chart(CTX, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Set", "Out" ],
    datasets: [{
      label: "% de gordura",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [85, 59, 16, 40, 56, 55, 40, 33, 45, 99],
    }]
  },
  options: {

  }
})