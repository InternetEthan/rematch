// import Tasks from "./tasks";

function Bench () {
    const month = Array(30).fill(null);

    const handleDayClick = (index) => {
        console.log(index);
    };

    return (
        <div className="month">
            <div className="week">
            {month.map((_, index) => (
                <div key={index} className="day">
                    <div>{index + 1}</div>
                    {/* <Tasks dayIndex={index} /> */}
                </div>
            ))}
        </div>
    </div>
    );
}

export default Bench;
