import DoughnutChart from "./DoughnutChart";
import AnimatedCounter from "./ui/AnimatedCounter";
const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Bank Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
          <p className='total-balance-label'>Total Current Balance</p>
          <div className='total-balance-amount flex-center gap-2'> {/* Changed from <p> to <div> due to hydration error*/}
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;