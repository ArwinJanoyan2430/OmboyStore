import Card from "../components/Card";
import { DollarSign, ShoppingCart, Package, AlertTriangle } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-3 mt-10 ">
      <Card title="Total Sales" value="₱ 12,450" icon={DollarSign} />
      <Card title="Transactions" value="128" icon={ShoppingCart} />
      <Card title="Products" value="56" icon={Package} />
      <Card title="Low Stock" value="7" icon={AlertTriangle} />
    </div>
  );
};

export default Dashboard;