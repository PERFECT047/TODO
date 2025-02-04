const AddButton: React.FC = () => {
    return(
        <div className="absolute bottom-19 right-4">
          <button className="pmclr w-16 h-16 rounded-full text-white p-4 shadow-xl hover:scale-110">
            <i className="material-icons hover:scale-110">add</i>
          </button>
        </div>
    )
};

export default AddButton;