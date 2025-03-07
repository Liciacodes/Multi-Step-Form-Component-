interface StepProps {
    number: number;
    title: string;
    description: string;
    isActive?: boolean;
  }
  
  const Step: React.FC<StepProps> = ({ number, title, description, isActive = false }) => {
    return (
      <div className="flex items-center gap-4">
        <div
          className={`flex justify-center items-center w-10 h-10 rounded-full font-bold ${
            isActive ? 'bg-[hsl(217,100%,97%)] text-blue-950 ' : 'border border-white text-white'
          }`}
        >
          {number}
        </div>
        <div>
          <h1 className="text-white font-bold text-lg">{title}</h1>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Step;