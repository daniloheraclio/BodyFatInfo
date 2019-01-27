const CTX = document.getElementById('barChart');
let barChart = new Chart(CTX, {
  type: 'bar',
  data: {
    labels: ["Peso corporal", "Peso gordo", "Peso magro", "% gordura"],
    datasets: [{
      label: "% de gordura",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 13, 51, 21],
    }],
  },
  options: {

  }
})

