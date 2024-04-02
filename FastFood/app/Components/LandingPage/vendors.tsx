"use client";

export const ChooseVendor = () => {
  return (
    <>
      <div>
        <h1 className="text-center font-bold text-[30px] sm:text-[40px]">
          Hungry?🤤
        </h1>
        <div className="mt-2 text-center">
          {/* <Image src={} alt=''/> */}
          <div>
            <h2 className="text-[15px] p-2 font-bold  sm:text-[25px]">
              Hungry but have alot to do in the office ?, or hungry and roaming
              in search of food feels like a hussle?.
            </h2>
            <p className="p-2">
              Don't worry , you can order from here . A lot of Joints around you
              have menus up to date and available for you to choose. Just select
              a joint of your choice, choose from the menu available, attach
              your name againt the food and its done. No stress😋
            </p>
            <button className=" items-center btn text-white bg-slate-900 p-4 w-full sm:w-[50%]">See Joints Available</button>
          </div>
        </div>
      </div>
    </>
  );
};
