const SkillTestCard = ({onUpdateClick}: {onUpdateClick: () => void}) => {
  return (
    <div className="bg-white rounded-lg p-3 pt-4 pb-4 flex items-center border-2 border-gray-100 justify-between">
      {/* Left Section - Icon and Details */}
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          alt="HTML Logo"
          className="w-5 h-5 mr-4 sm:w-8 sm:h-8"
        />
        <div>
          <h3 className="text-sm font-bold text-gray-800">
            Hyper Text Markup Language
          </h3>
          <p className="text-sm font-semibold text-gray-500">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
      </div>

      {/* Update Button */}
      <button 
      onClick={onUpdateClick}
      className="bg-blue-900 text-sm font-semibold hover:bg-blue-700 text-white px-6 py-2 rounded-md border-2 border-black">
        Update
      </button>
    </div>
  );
};

export default SkillTestCard;