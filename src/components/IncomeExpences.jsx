import { useGlobalState } from "../context/GlobalState";

function IncomeExpences() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transactions) => transactions.amount);
  //console.log(amounts);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  //console.log(income);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <>
      <div className="flex justify-between my-2 ">
        <h4>Ingresos</h4>
        <p>${income}.-</p>
      </div>
      <div className="flex justify-between my-2">
        <h4>Gastos</h4>
        <p>${expense}.-</p>
      </div>
    </>
  );
}

export default IncomeExpences;
