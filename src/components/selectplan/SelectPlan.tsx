interface SelectPlanProps {
    nextStep: () => void;
    prevStep: () => void;
}



        const SelectPlan: React.FC<SelectPlanProps> = ({ nextStep, prevStep }) => {
            return (
              <div className="flex flex-col gap-6 p-8">
                <h3 className="text-[hsl(213, 96%, 18%)] text-2xl font-semibold">Select Your Plan</h3>
                <p className="text-gray-500">Choose the plan that best suits you.</p>
          
                <div className="flex justify-between mt-10">
                  <button
                    className="bg-blue-600 border border-red-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg focus:ring-2 focus:ring-blue-500"
                    onClick={prevStep}
                  >
                    Previous Step
                  </button>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg focus:ring-2 focus:ring-blue-500"
                    onClick={nextStep}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            );
          };
          
    

export default SelectPlan