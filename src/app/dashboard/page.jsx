import Layout from "../components/Layout";
import SmallBox from "../components/SmallBox";
import Smallbox2 from "../components/Smallbox2";
import Smallbox3 from "../components/Smallbox3";
import TransactionChart from "../components/TransactionChart";

const DashboardPage = () => {
  return (
    <Layout page="dashboard">
      <div className="dashboard">
        <div className="grid grid-cols-4 gap-2 overflow-x-hidden overflow-y-auto ">
          <SmallBox title="Total Users" value="88,166" imageUrl="/users.png" />

          <SmallBox
            title="Weekly Active Users"
            imageUrl="/weeklyact.jpg"
            value="59,374"
          />
          <SmallBox
            title="Total Transaction"
            imageUrl="/transactions.png"
            value="98M+"
          />
          <SmallBox
            title="Transaction Value"
            imageUrl="/transvalue.png"
            value="#7,547,885,26.54"
          />
        </div>

        <div className="my-2 flex gap-2">
          <div className="grow">
            <TransactionChart />
          </div>

          <div className="grow-0 flex flex-col gap-4">
            <Smallbox3
              value="DEALS CURRENTLY ONGOING"
              imageUrl="/currentdeals.jpg"
              title="204,491"
              valuep="THERE ARE"
            />

            <Smallbox3
              title="#93,772,51.57"
              imageUrl="/ongoingdeals.png"
              value="ONGOING DEALS VALUE"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <Smallbox2
            title="Nigerian Users"
            imageUrl="/Group01.jpg"
            value="700,849"
          />

          <Smallbox2
            title="United Kingdom Users"
            imageUrl="/users.png"
            value="300,225"
          />
          <Smallbox2
            title="Rwanda Users"
            imageUrl="/Rwandanusers.png"
            value="80,146"
          />
          <Smallbox2 title="Others" imageUrl="/weeklyact.jpg" value="6,288" />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
