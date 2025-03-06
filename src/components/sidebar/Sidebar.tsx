import sidebarImage from '../../assets/images/bg-sidebar-desktop.svg';
import Step from '../Steps/Step';

const Sidebar: React.FC = () => {
  return (
    <div className="w-[375px] h-full relative p-8">
      {/* Background Image with Larger Padding */}
      <img
        src={sidebarImage}
        alt="sidebar image"
        className="absolute top-4 left-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-xl"
      />

      {/* Overlay Content */}
      <div className=" ml-4 absolute top-12 left-12 w-full h-full p-8 flex flex-col gap-7">


        
      <Step number={1} title="Step 1" description="YOUR INFO" isActive={true}/>
        <Step number={2} title="Step 2" description="SELECT PLAN" />
        <Step number={3} title="Step 3" description="ADD-ONS" />
        <Step number={4} title="Step 4" description="SUMMARY" />
      </div>
    </div>
  );
};

export default Sidebar;