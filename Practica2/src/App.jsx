import Table from "./Table";

const netIncomes = [
  { brand: "McDonalds", income: 1291283 },
  { brand: "Burger King", income: 1927361 },
  { brand: "KFC", income: 1098463 },
];

const App = () => {
  const totalIncome = netIncomes.reduce((acum, item) => acum + item.income, 0);
  const promIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <h1>Tabla de ingresos netos</h1>
      <Table netIncomes={netIncomes} />
      <p>Promedio de ingreso neto: {promIncome.toFixed(2)}</p>
    </div>
  );
};

export default App;
