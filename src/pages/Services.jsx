import { GiForkKnifeSpoon, GiFullPizza } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";

export default function Services() {
  return (
    <section className="bg-orange-400">
      <div className="max-w-4xl  mx-auto grid lg:grid-cols-3 md:grid-cols-3 gap-4">
        <div className="text-center font-semibold  px-4 py-2  ">
          <div>
            <GiForkKnifeSpoon className="text-7xl inline-block text-center " />
          </div>
          <div className="text-slate-50 text-xs space-y-2">
            <h1>Order/Create Your Food</h1>
            <p>Order your Food or create a food</p>
          </div>
        </div>
        <div className="text-center font-semibold  px-4 py-2">
          <div>
            <CiDeliveryTruck className="text-7xl inline-block text-center " />
          </div>
          <div className="text-slate-50 text-xs space-y-2">
            <h1>Deliver Your Food</h1>
            <p>in city within 1 hour</p>
          </div>
        </div>
        <div className="text-center font-semibold  px-4 py-2">
          <div>
            <GiFullPizza className="text-7xl inline-block text-center " />
          </div>
          <div>
            <div className="text-slate-50 text-xs space-y-2">
              <h1>enjoy your food</h1>
              <p>Do not forget to give thanks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
