interface AddOnsProps {
    nextStep: () => void;
    prevStep: () => void;
}




const AddOns: React.FC<AddOnsProps> = ({nextStep, prevStep}) => {
    return (
        <div>AddOns div

<div className="flex mt-10 gap-x-4">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-sm focus:ring-2 focus:ring-blue-500"
                    type="submit"
                    onClick={prevStep}
                >
                    Previous Step
                </button>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-sm focus:ring-2 focus:ring-blue-500"
                    type="submit"
                    onClick={nextStep}
                >
                    Next Step
                </button>
            </div>
        </div>
    )
}

export default AddOns