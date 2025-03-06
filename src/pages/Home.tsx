import Sidebar from "../components/sidebar/Sidebar";

const Home: React.FC = () => {
    return (
      <div className="flex justify-center items-center w-screen h-screen p-0 m-0">
      
        <div className="flex bg-white rounded-2xl shadow-lg  w-[375px] h-full md:w-[1000px] md:h-[600px] p-12">
          <Sidebar/>
          
        </div>
      </div>
    );
  };
  
  export default Home;
  