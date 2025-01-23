const TopBar: React.FC = () => {
    return(
      <div className="pmclr text-white pt-8 pb-6 pl-4 pr-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">TODO APP</h1>
        <div className="relative flex items-center justify-center">
            <i className="material-icons text-4xl text-white">calendar_today</i>
            <span className="absolute text-sm font-bold text-white rounded-full w-6 h-6 flex items-center justify-center">
                1
            </span>
        </div>
      </div>
    )
};

export default TopBar;