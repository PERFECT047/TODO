import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const TopBar: React.FC = () => {

  const currentDate = new Date().toLocaleDateString('enn-US', {day: '2-digit'})

  return (
    <div className="pmclr text-white pt-8 pb-6 pl-4 pr-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">TODO APP</h1>
      <div className="relative flex items-center justify-center">
        <CalendarTodayIcon fontSize="large" className="text-white" />
        <span className="absolute text-sm font-bold pt-1 text-white w-6 h-6 flex items-center justify-center">
          {currentDate}
        </span>
      </div>
    </div>
  );
};

export default TopBar;
