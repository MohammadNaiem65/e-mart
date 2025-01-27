import OverviewCard from "../../comps/OverviewCard/OverviewCard";

const Dashboard = () => {
  const cardData = [
    {
      image: "/public/assets/card1.svg",
      title: "New Users",
      percentage: "+11.01%",
      count: "7,265",
      link: "/new-users",
    },
    {
      image: "/public/assets/card2.svg",
      title: "Daily Sales",
      percentage: "+11.01%",
      count: "7,265",
      link: "/daily-sales",
    },
    {
      image: "/public/assets/card3.svg",
      title: "Today Orders",
      percentage: "+11.01%",
      count: "7,265",
      link: "/today-orders",
    },
    {
      image: "/public/assets/card4.svg",
      title: "Today's Delivery",
      percentage: "+11.01%",
      count: "7,265",
      link: "/todays-delivery",
    },
  ];


  return (
    <div className="p-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {cardData.map((card, index) => (
          <OverviewCard
            key={index}
            image={card.image}
            title={card.title}
            percentage={card.percentage}
            count={card.count}
            link={card.link}
          />
        ))}
      </div>
      {/* <div className="mt-4">
        <img className="w-full" src="/public/assets/image1.png" alt="" />
      </div>
      <div className="mt-4">
        <img className="w-full" src="/public/assets/image2.png" alt="" />
      </div> */}
    </div>
  );
};

export default Dashboard;
