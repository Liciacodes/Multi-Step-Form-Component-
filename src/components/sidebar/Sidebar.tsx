import sidebarImage from '../../assets/images/bg-sidebar-desktop.svg';
import Step from '../Steps/Step';

interface SidebarProps {
  currentStep: number;
}

const Sidebar: React.FC<SidebarProps> = ({currentStep}) => {
  return (
    <div className="w-[375px] h-full relative p-8 md:w-1/3 text-white  rounded-lg">
     
      <img
        src={sidebarImage}
        alt="sidebar image"
        className="absolute top-4 left-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-xl"
      />

     
      <div className=" ml-4 absolute top-12 left-12 w-full h-full p-8 flex flex-col gap-7">


        
      <Step number={1} title="Step 1" description="YOUR INFO" isActive={currentStep === 1}/>
        <Step number={2} title="Step 2" description="SELECT PLAN"  isActive={currentStep === 2}/>
        <Step number={3} title="Step 3" description="ADD-ONS"  isActive={currentStep === 3}/>
        <Step number={4} title="Step 4" description="SUMMARY"  isActive={currentStep === 4}/>
      </div>
    </div>
  );
};

export default Sidebar;