import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (from && to && date) {
            const queryParams = new URLSearchParams({
                from: from,
                to: to,
                date: date
            }).toString();
            navigate(`/tickets?${queryParams}`);
        }
    };

    const cardsData = [
        {
            trainNumber: '305',
            status: 'Проходящий',
            reviews: '2,1К отзывов',
            departureTime: '01:47',
            duration: '2 ч 53 м в пути',
            arrivalTime: '04:40',
            departureCity: 'Рязань',
            arrivalCity: 'Москва',
            departureDate: '2024-03-13'
        },
        {
            trainNumber: '702',
            status: 'Отправляется',
            reviews: '1,5К отзывов',
            departureTime: '08:30',
            duration: '1 ч 15 м в пути',
            arrivalTime: '09:45',
            departureCity: 'Подольск',
            arrivalCity: 'Москва',
            departureDate: '2024-03-13'
        },
        {
            trainNumber: '511',
            status: 'Проходящий',
            reviews: '3,8К отзывов',
            departureTime: '11:15',
            duration: '1 ч 30 м в пути',
            arrivalTime: '12:45',
            departureCity: 'Одинцово',
            arrivalCity: 'Москва',
            departureDate: '2024-03-13'
        },
        {
            trainNumber: '933',
            status: 'Отправляется',
            reviews: '900 отзывов',
            departureTime: '15:20',
            duration: '1 ч 10 м в пути',
            arrivalTime: '16:30',
            departureCity: 'Королев',
            arrivalCity: 'Москва',
            departureDate: '2024-03-13'
        },
        {
            trainNumber: '121',
            status: 'Проходящий',
            reviews: '2,3К отзывов',
            departureTime: '18:00',
            duration: '2 ч 15 м в пути',
            arrivalTime: '20:15',
            departureCity: 'Химки',
            arrivalCity: 'Москва',
            departureDate: '2024-03-15'
        },
        {
            trainNumber: '444',
            status: 'Отправляется',
            reviews: '1,2К отзывов',
            departureTime: '05:45',
            duration: '1 ч 40 м в пути',
            arrivalTime: '07:25',
            departureCity: 'Люберцы',
            arrivalCity: 'Москва',
            departureDate: '2024-04-13'
        },
        {
            trainNumber: '812',
            status: 'Проходящий',
            reviews: '4,5К отзывов',
            departureTime: '09:00',
            duration: '1 ч 20 м в пути',
            arrivalTime: '10:20',
            departureCity: 'Железнодорожный',
            arrivalCity: 'Москва',
            departureDate: '2024-03-12'
        },
        {
            trainNumber: '678',
            status: 'Отправляется',
            reviews: '800 отзывов',
            departureTime: '13:30',
            duration: '1 ч 30 м в пути',
            arrivalTime: '15:00',
            departureCity: 'Домодедово',
            arrivalCity: 'Москва',
            departureDate: '2024-03-13'
        },
        {
            trainNumber: '444',
            status: 'Отправляется',
            reviews: '1,2К отзывов',
            departureTime: '05:45',
            duration: '1 ч 40 м в пути',
            arrivalTime: '07:25',
            departureCity: 'Люберцы',
            arrivalCity: 'Москва',
            departureDate: '2024-03-13'
        },
        {
            trainNumber: '812',
            status: 'Проходящий',
            reviews: '4,5К отзывов',
            departureTime: '09:00',
            duration: '1 ч 20 м в пути',
            arrivalTime: '10:20',
            departureCity: 'Железнодорожный',
            arrivalCity: 'Москва',
            departureDate: '2024-03-17'
        },
        {
            trainNumber: '444',
            status: 'Отправляется',
            reviews: '1,2К отзывов',
            departureTime: '05:45',
            duration: '1 ч 40 м в пути',
            arrivalTime: '07:25',
            departureCity: 'Люберцы',
            arrivalCity: 'Москва',
            departureDate: '2024-03-15'
        },
        {
            trainNumber: '812',
            status: 'Проходящий',
            reviews: '4,5К отзывов',
            departureTime: '09:00',
            duration: '1 ч 20 м в пути',
            arrivalTime: '10:20',
            departureCity: 'Железнодорожный',
            arrivalCity: 'Москва',
            departureDate: '2024-04-13'
        },
    ];

    const cards = cardsData.map((card, index) => (
        <Link to={"/tickets/" + card.trainNumber} key={index} className="w-96 m-4 transition hover:translate-y-[-5px]">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-bold text-xl">№ {card.trainNumber}</span>
                        <span className="text-gray-500">{card.status}</span>
                    </div>
                    <div className="mt-4">
                        <span className="text-gray-700 font-bold text-lg">{card.reviews}</span>
                    </div>
                </div>
                <div className="bg-gray-200 p-4">
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
    ));

    return (
        <div className={"text-center"}>
            <form className="max-w-xl flex items-end mb-4 mt-4 m-auto" onSubmit={handleSubmit}>
                <div className="m-2">
                    <label htmlFor="to"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Откуда</label>
                    <input type="text" id="to" value={to} onChange={(e) => setTo(e.target.value)}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required/>
                </div>
                <div className="m-2">
                    <label htmlFor="from"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Куда</label>
                    <input type="text" id="from" value={from} onChange={(e) => setFrom(e.target.value)}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required/>
                </div>
                <div className="m-2">
                    <label htmlFor="date"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Когда</label>
                    <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required/>
                </div>
                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-11 m-2">Найти
                </button>
            </form>
            <h1 className={"text-4xl font-bold text-gray-900 dark:text-white"}>Популярные пути</h1>
            <div className={"m-4 flex flex-wrap justify-center align-center"}>
                {cards}
            </div>
        </div>
    )
}