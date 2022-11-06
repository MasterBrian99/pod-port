const MainNavigation = () => {
  return (
    <div className='w-60 bg-green-400 fixed h-full overflow-scroll'>
      <ul className=' mt-20  mb-20'>
        <li>gam</li>
        {Array.from(Array(100), (e, i) => {
          return <li key={i}>{i}</li>;
        })}
      </ul>
    </div>
  );
};

export default MainNavigation;
