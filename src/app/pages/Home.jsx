import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = () => {
        const queryParams = new URLSearchParams({
            to: to ?? "", from: from ?? "", date: date ?? ""
        }).toString();
        navigate(`/tickets?${queryParams}`);
    };

    const cardsData = [{
        "trainNumber": "305",
        "status": "Проходящий",
        "reviews": [{
            "name": "Иван", "surname": "Иванов", "rating": 4, "description": "Хороший поезд, комфортное путешествие."
        }, {
            "name": "Мария",
            "surname": "Петрова",
            "rating": 5,
            "description": "Отличный сервис на борту, всё понравилось."
        }],
        "departureTime": "01:47",
        "duration": "2 ч 53 м в пути",
        "arrivalTime": "04:40",
        "departureCity": "Рязань",
        "arrivalCity": "Москва",
        "departureDate": "2024-03-13"
    }, {
        "trainNumber": "702",
        "status": "Отправляется",
        "reviews": [{
            "name": "Алексей",
            "surname": "Сидоров",
            "rating": 3,
            "description": "Неплохой поезд, но были небольшие задержки."
        }, {
            "name": "Елена", "surname": "Козлова", "rating": 4, "description": "Удобные места, все чисто и аккуратно."
        }],
        "departureTime": "08:30",
        "duration": "1 ч 15 м в пути",
        "arrivalTime": "09:45",
        "departureCity": "Подольск",
        "arrivalCity": "Москва",
        "departureDate": "2024-03-13"
    }, {
        "trainNumber": "511",
        "status": "Проходящий",
        "reviews": [{
            "name": "Наталья",
            "surname": "Сидорова",
            "rating": 3,
            "description": "Были некоторые неудобства, но в целом нормально."
        }],
        "departureTime": "11:15",
        "duration": "1 ч 30 м в пути",
        "arrivalTime": "12:45",
        "departureCity": "Одинцово",
        "arrivalCity": "Москва",
        "departureDate": "2024-03-13"
    }, {
        "trainNumber": "933",
        "status": "Отправляется",
        "reviews": [{
            "name": "Наталья",
            "surname": "Сидорова",
            "rating": 3,
            "description": "Были некоторые неудобства, но в целом нормально."
        }],
        "departureTime": "15:20",
        "duration": "1 ч 10 м в пути",
        "arrivalTime": "16:30",
        "departureCity": "Королев",
        "arrivalCity": "Москва",
        "departureDate": "2024-03-13"
    }, {
        "trainNumber": "121",
        "status": "Проходящий",
        "reviews": [{
            "name": "Марина", "surname": "Иванова", "rating": 4, "description": "Хороший поезд, всё чисто и аккуратно."
        }, {
            "name": "Александра", "surname": "Петрова", "rating": 5, "description": "Прекрасное обслуживание, спасибо!"
        }, {
            "name": "Павел",
            "surname": "Смирнов",
            "rating": 4,
            "description": "Поездка оставила положительное впечатление."
        }, {
            "name": "Елена", "surname": "Козлова", "rating": 4, "description": "Удобные места, все чисто и аккуратно."
        }],
        "departureTime": "18:00",
        "duration": "2 ч 15 м в пути",
        "arrivalTime": "20:15",
        "departureCity": "Химки",
        "arrivalCity": "Москва",
        "departureDate": "2024-03-13"
    }, {
        "trainNumber": "444",
        "status": "Отправляется",
        "reviews": [{
            "name": "Алексей",
            "surname": "Сидоров",
            "rating": 3,
            "description": "Неплохой поезд, но были небольшие задержки."
        }, {
            "name": "Елена", "surname": "Козлова", "rating": 4, "description": "Удобные места, все чисто и аккуратно."
        }],
        "departureTime": "05:45",
        "duration": "1 ч 40 м в пути",
        "arrivalTime": "07:25",
        "departureCity": "Люберцы",
        "arrivalCity": "Москва",
        "departureDate": "2024-03-13"
    }, {
        "trainNumber": "812",
        "status": "Проходящий",
        "reviews": [{
            "name": "Марина", "surname": "Иванова", "rating": 4, "description": "Хороший поезд, всё чисто и аккуратно."
        }, {
            "name": "Александра", "surname": "Петрова", "rating": 5, "description": "Прекрасное обслуживание, спасибо!"
        }, {
            "name": "Павел",
            "surname": "Смирнов",
            "rating": 4,
            "description": "Поездка оставила положительное впечатление."
        }, {
            "name": "Елена", "surname": "Козлова", "rating": 4, "description": "Удобные места, все чисто и аккуратно."
        }],
        "departureTime": "09:00",
        "duration": "1 ч 20 м в пути",
        "arrivalTime": "10:20",
        "departureCity": "Железнодорожный",
        "arrivalCity": "Москва",
        "departureDate": "2024-03-13"
    }, {
        "trainNumber": "678",
        "status": "Отправляется",
        "reviews": [{
            "name": "Марина", "surname": "Иванова", "rating": 4, "description": "Хороший поезд, всё чисто и аккуратно."
        }, {
            "name": "Александра", "surname": "Петрова", "rating": 5, "description": "Прекрасное обслуживание, спасибо!"
        }, {
            "name": "Павел",
            "surname": "Смирнов",
            "rating": 4,
            "description": "Поездка оставила положительное впечатление."
        }, {
            "name": "Елена", "surname": "Козлова", "rating": 4, "description": "Удобные места, все чисто и аккуратно."
        }],
        "departureTime": "13:30",
        "duration": "1 ч 30 м в пути",
        "arrivalTime": "15:00",
        "departureCity": "Домодедово",
        "arrivalCity": "Москва",
        "departureDate": "2024-03-13"
    }, {
        "trainNumber": "444",
        "status": "Отправляется",
        "reviews": [{
            "name": "Марина", "surname": "Иванова", "rating": 4, "description": "Хороший поезд, всё чисто и аккуратно."
        }, {
            "name": "Александра", "surname": "Петрова", "rating": 5, "description": "Прекрасное обслуживание, спасибо!"
        }, {
            "name": "Павел",
            "surname": "Смирнов",
            "rating": 4,
            "description": "Поездка оставила положительное впечатление."
        }],
        "departureTime": "05:45",
        "duration": "1 ч 40 м в пути",
        "arrivalTime": "07:25",
        "departureCity": "Люберцы",
        "arrivalCity": "Москва",
        "departureDate": "2024-03-13"
    }, {
        "trainNumber": "812",
        "status": "Проходящий",
        "reviews": [{
            "name": "Анна",
            "surname": "Петрова",
            "rating": 3,
            "description": "Неплохой поезд, но места были не очень удобные."
        }, {
            "name": "Сергей",
            "surname": "Сидоров",
            "rating": 4,
            "description": "В целом все хорошо, но были небольшие задержки."
        }, {
            "name": "Ольга", "surname": "Козлова", "rating": 5, "description": "Путешествие было комфортным и приятным."
        }],
        "departureTime": "09:00",
        "duration": "1 ч 20 м в пути",
        "arrivalTime": "10:20",
        "departureCity": "Железнодорожный",
        "arrivalCity": "Москва",
        "departureDate": "2024-03-13"
    }, {
        "trainNumber": "444",
        "status": "Отправляется",
        "reviews": [{
            "name": "Алексей",
            "surname": "Сидоров",
            "rating": 3,
            "description": "Неплохой поезд, но были небольшие задержки."
        }, {
            "name": "Анна",
            "surname": "Петрова",
            "rating": 3,
            "description": "Неплохой поезд, но места были не очень удобные."
        }, {
            "name": "Сергей",
            "surname": "Сидоров",
            "rating": 4,
            "description": "В целом все хорошо, но были небольшие задержки."
        }, {
            "name": "Ольга", "surname": "Козлова", "rating": 5, "description": "Путешествие было комфортным и приятным."
        }],
        "departureTime": "05:45",
        "duration": "1 ч 40 м в пути",
        "arrivalTime": "07:25",
        "departureCity": "Люберцы",
        "arrivalCity": "Москва",
        "departureDate": "2024-03-13"
    }, {
        "trainNumber": "812",
        "status": "Проходящий",
        "reviews": [],
        "departureTime": "09:00",
        "duration": "1 ч 20 м в пути",
        "arrivalTime": "10:20",
        "departureCity": "Железнодорожный",
        "arrivalCity": "Москва",
        "departureDate": "2024-03-13"
    }, {
        "trainNumber": "123",
        "status": "Проходящий",
        "reviews": [{
            "name": "Игорь",
            "surname": "Николаев",
            "rating": 3,
            "description": "Нормальный поезд, но вагоны были немного старые."
        }, {
            "name": "Марина", "surname": "Иванова", "rating": 4, "description": "Хороший поезд, всё чисто и аккуратно."
        }, {
            "name": "Александра", "surname": "Петрова", "rating": 5, "description": "Прекрасное обслуживание, спасибо!"
        }],
        "departureTime": "06:15",
        "duration": "1 ч 45 м в пути",
        "arrivalTime": "08:00",
        "departureCity": "Балашиха",
        "arrivalCity": "Москва",
        "departureDate": "2024-03-13"
    }, {
        "trainNumber": "456",
        "status": "Отправляется",
        "reviews": [],
        "departureTime": "10:30",
        "duration": "1 ч 20 м в пути",
        "arrivalTime": "11:50",
        "departureCity": "Лобня",
        "arrivalCity": "Москва",
        "departureDate": "2024-03-13"
    },];

    const cards = cardsData.map((card, index) => (
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
        </Link>));

    return (<div className={"text-center"}>
            <form style={{
                backgroundImage: "url('https://storage.yandexcloud.net/moskvichmag/uploads/2023/12/es104.jpg')",
                backgroundSize: "cover"
            }} className="flex justify-center pb-64 pt-64 mb-4 mt-4 m-auto">
                <div className="m-3">
                    <input type="text" id="to" value={to} onChange={(e) => setTo(e.target.value)}
                           placeholder='Откуда'
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="m-3">
                    <input type="text" id="from" value={from} onChange={(e) => setFrom(e.target.value)}
                           placeholder='Куда'
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="m-3">
                    <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)}
                           placeholder='Когда'
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <button type="submit"
                        onClick={handleSubmit}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-12 m-4">Найти
                </button>
            </form>
            <h1 className={"text-4xl font-bold text-gray-900 dark:text-white"}>Популярные пути</h1>
            <div className={"m-4 flex flex-wrap justify-center align-center"}>
                {cards}
            </div>
        </div>)
}