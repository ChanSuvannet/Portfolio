import Image from "/src/assets/image/pic1.jpg";
const VolunteerWorkComponent = () => {
  return (
    <div className="flex justify-center items-center h-full px-9">
      <div className="w-full h-auto max-w-7xl">
        <div className="flex justify-center pt-2">
          <h1 className="text-4xl font-bold max-600:text-2xl">Volunteer</h1>
        </div>
        <div className="flex justify-center gap-5 pt-6 items-center max-980:flex-col max-980:w-full">
          <div>
            <img src={Image} alt="" className="w-full " />
          </div>
          <div>
            <img src={Image} alt="" className="w-full " />
          </div>
          <div>
            <img src={Image} alt="" className="w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerWorkComponent;
