import {useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import cardsData from '../api/data.json';

export const Tickets = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [from, setFrom] = useState(queryParams.get('from') || '');
    const [to, setTo] = useState(queryParams.get('to') || '');
    const [date, setDate] = useState(queryParams.get('date') || '');

    const filteredCards = cardsData.filter(card => {
        const fromMatch = !from || card.arrivalCity.toLowerCase().includes(from.toLowerCase());
        const toMatch = !to || card.departureCity.toLowerCase().includes(to.toLowerCase());
        const dateMatch = !date || date === card.departureDate;
        return fromMatch && toMatch && dateMatch;
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchParams = new URLSearchParams();
        searchParams.set('from', from);
        searchParams.set('to', to);
        searchParams.set('date', date);
        navigate(`/tickets?${searchParams.toString()}`);
    };

    const clearFilter = () => {
        setFrom('');
        setTo('');
        setDate('');
        const searchParams = new URLSearchParams();
        navigate(`/tickets?${searchParams.toString()}`);
    };

    return (<div className="">
        <form  style={{backgroundImage: "url('https://storage.yandexcloud.net/moskvichmag/uploads/2023/12/es104.jpg')", backgroundSize: "cover"}} className="flex justify-center pb-64 pt-64 mb-4 mt-4 align-center" onSubmit={handleSubmit}>
            <div className="m-3">
                <input type="text" id="to" value={to} onChange={(e) => setTo(e.target.value)}
                placeholder='Откуда'
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       />
            </div>
            <div className="m-3">
                <input type="text" id="from" value={from} onChange={(e) => setFrom(e.target.value)}
                placeholder='Куда'
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       />
            </div>
            <div className="m-3">
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)}
                        placeholder='Когда'
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       />
            </div>
            {(to.length || from.length || date.length) ?
                <button onClick={clearFilter} type="button"
                        className="m-5 transition bg-blue-600 text-white rounded-lg p-3">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                : <></>}
        </form>
        <div className="m-4 flex flex-wrap justify-center align-center">
            {filteredCards.length ? filteredCards.map((card, index) => (
            <Link to={"/tickets/" + card.trainNumber} key={index} className="w-96 m-4 transition hover:translate-y-[-5px]">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-bold text-xl">№ {card.trainNumber}</span>
                        <span className="text-gray-500">{card.status}</span>
                    </div>
                    <div className="mt-4">
                        <span className="text-gray-700 font-bold text-lg">{card.reviews.length} отзыва</span>
                    </div>
                </div>
                <div className="bg-orange-200 p-4">
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">{card.departureTime}</span>
                        <span className="text-lg">{card.duration}</span>
                        <span className="text-lg font-bold">{card.arrivalTime}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <div>
                            <span className="text-gray-700">{card.departureCity}</span>
                        </div>
                        <div>
                            <span className="text-gray-700">{card.arrivalCity}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
            )) : <div>
                <h3>Ничего нет :(</h3>
            </div>}
        </div>
    </div>);
};
