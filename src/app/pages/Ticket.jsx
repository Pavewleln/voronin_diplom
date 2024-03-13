import {useParams} from 'react-router-dom';
import cardsData from '../api/data.json';
import {useState} from "react";

export const Ticket = () => {
    const {id} = useParams();

    const ticket = cardsData.find(ticket => ticket.trainNumber === id);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(!isSubmitted);
        e.target.reset();
    };
    if (!ticket) {
        return <div>Билет не найден</div>;
    }

    return (<>
            <div className="flex">
                <div className="w-3/4 p-4">
                    <h2 className="text-2xl font-bold mb-4">Данные билета</h2>
                    <p><span className="font-bold">Номер поезда:</span> {ticket.trainNumber}</p>
                    <p><span className="font-bold">Статус:</span> {ticket.status}</p>
                    <p><span className="font-bold">Отзывы:</span> {ticket.reviews}</p>
                    <p><span className="font-bold">Время отправления:</span> {ticket.departureTime}</p>
                    <p><span className="font-bold">Продолжительность в пути:</span> {ticket.duration}</p>
                    <p><span className="font-bold">Время прибытия:</span> {ticket.arrivalTime}</p>
                    <p><span className="font-bold">Город отправления:</span> {ticket.departureCity}</p>
                    <p><span className="font-bold">Город прибытия:</span> {ticket.arrivalCity}</p>
                    <p><span className="font-bold">Дата отправления:</span> {ticket.departureDate}</p>
                </div>
                <div className="w-1/4 p-4">
                    <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="cardNumber" className="font-bold">Номер карты:</label>
                        <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000"
                               className="border border-gray-300 rounded-md p-2" required/>

                        <label htmlFor="cardHolder" className="font-bold">Владелец карты (ФИО):</label>
                        <input type="text" id="cardHolder" placeholder="Иванов Иван Иванович"
                               className="border border-gray-300 rounded-md p-2" required/>

                        <label htmlFor="email" className="font-bold">Email:</label>
                        <input type="email" id="email" placeholder="example@example.com"
                               className="border border-gray-300 rounded-md p-2" required/>

                        <label htmlFor="expirationDate" className="font-bold">Срок действия:</label>
                        <input type="text" id="expirationDate" placeholder="MM/YY"
                               className="border border-gray-300 rounded-md p-2" required/>

                        <label htmlFor="csv" className="font-bold">CSV код:</label>
                        <input type="text" id="csv" placeholder="123"
                               className="border border-gray-300 rounded-md p-2" required/>

                        <button type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Купить
                        </button>
                    </form>
                </div>
            </div>
            {isSubmitted ? <div className="fixed z-10 inset-0 overflow-y-auto">
                <div
                    className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true">&#8203;</span>

                    <div
                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            Спасибо, что пользуетесь нашим сервисом! Ваш билет будет направлен на почту
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setIsSubmitted(false)}>Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div> : null}
        </>);
};
