interface SummaryProps {

    prevStep: () => void
}



const Summary: React.FC<SummaryProps> = ({prevStep}) => {
    return (
        <div>Summary div


<div className="flex gap-x-6">
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-12 rounded-sm focus:ring-2 focus:ring-blue-500"
        type="submit"
        onClick={prevStep}
      >
      Prev Step
      </button>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-sm focus:ring-2 focus:ring-blue-500"
        type="submit"
       
      >
      Continue
      </button>
    </div>
        </div>
    )
}

export default Summary