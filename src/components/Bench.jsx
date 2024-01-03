function Bench() {
    const week = Array(5).fill(null);

    return (
        <div className="month"> January
        <div className="week">
            {week.map((_, index) => ( 
                <div key={index} className="day">{ index + 1 }</div>
            ))}
        </div>
                <div className="week">
            {week.map((_, index) => ( 
                <div key={index} className="day">{ index + 6 }</div>
            ))}
        </div>
                <div className="week">
            {week.map((_, index) => ( 
                <div key={index} className="day">{ index + 11 }</div>
            ))}
        </div>
                <div className="week">
            {week.map((_, index) => ( 
                <div key={index} className="day">{ index + 16 }</div>
            ))}
        </div>
                <div className="week">
            {week.map((_, index) => ( 
                <div key={index} className="day">{ index + 21 }</div>
            ))}
        </div>
                <div className="week">
            {week.map((_, index) => ( 
                <div key={index} className="day">{ index + 26 }</div>
            ))}
        </div>
        </div>
    );
}
 export default Bench;