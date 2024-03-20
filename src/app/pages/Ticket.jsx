import {useParams} from 'react-router-dom';
import cardsData from '../api/data.json';
import React, {useEffect, useState} from 'react';

export const Ticket = () => {
    const {id} = useParams();

    const ticket = cardsData.find(ticket => ticket.trainNumber === id);

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [ticketState, setTicketState] = useState(ticket || {reviews: []}); // 处理 ticket 可能为 undefined 的情况


    useEffect(() => {
        console.log(ticketState);
    }, [ticketState]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(!isSubmitted);
        e.target.reset();
    };

    const [newReview, setNewReview] = useState({
        name: '', surname: '', rating: 0, description: ''
    });

    const handleReviewChange = (e) => {
        const {name, value} = e.target;
        setNewReview({
            ...newReview, [name]: value
        });
    };

    const addReview = (event) => {
        event.preventDefault();
        const updatedReviews = [...ticketState.reviews, newReview];
        setTicketState(prevTicketState => ({
            ...prevTicketState, reviews: updatedReviews
        }));
        setNewReview({
            name: '', surname: '', rating: 0, description: ''
        });
    };

    if (!ticket) {
        return <div>Билет не найден</div>;
    }

    return (<>
        <div className="flex p-8 max-w-7xl m-auto">
            <div className="w-3/4 p-4">
                <h2 className="text-2xl font-bold mb-4">Данные билета</h2>
                <p><span className="font-bold">Номер поезда:</span> {ticket.trainNumber}</p>
                <p><span className="font-bold">Статус:</span> {ticket.status}</p>
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
        <div className="p-8 max-w-7xl m-auto">
            <h2 className="text-2xl font-bold mb-4">Отзывы</h2>
            {ticketState.reviews.map((review, index) => (
                <div key={index} className="border rounded-2xl p-4 mb-4 bg-white relative">
                    <div className="absolute top-0 right-0 flex items-center justify-center m-1">
                        {[...Array(parseInt(review.rating))].map((_, i) => (<img key={i} className={"w-5 h-5"}
                                                                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu0lEQVR4nO2ZS2sTURTHr28FRUSoC4ViMHPOxLYqRUVcuPEruNKFKPgV+gHEKoiCC4WCILhoaXzW+t50Ydvk3MRdVXBRF924sCAIvmrzl5m0SYa8JnHuZEbyh7OcM7//OfdO7rlRqquuujImCB9zQsVV0PwCws9VHIUsD0K4AM1ALnlExU3Q9NSFd4MmVZwEbR8qVb8U1mEVF0F4wgvPgPBjFQdBUgerq+8aKDj7QkVd0PSwCr5kgh6oKAti74fwcn0DXEDGGlBRFTSn68KXY1xFUcimUg2rX+7CMvLUr6ImCI35qP7qXhhVURIySdtX9Su7oLmvM7AziR7krOMQOgvhSyvr/pNv+HI4z6TdHE4uJ+dMoicYyDf9O4pnGToF4SEIj0B4GsJf2wBtNX5A07tiYegKNF+Atk9CJxPNwYWGoWkxBMg2gxYdxvoGPu7bBOEnnQflevESs3u2NO7CXGojND2KACw8IfQMU72b/e2B/OAGCN+P0NKZdFaHL/iSibRaB6G7nYfncaegLcF7TGi+08FlM4qpE+vbgi+ZgFoDoZsdWDa3AbX2n+A9JjTfCK/yPBIYvMeE0PUQDNxy3hUovMeI5osGK3/VGHjbJ0//G3YsFPiiAb5noAPpMA18MGDgfTjwznlJ01LwBmip5V/btq9NTG3ibPKAeQPaOmPuK0SnQzBAlw0aGDZvwOS8IDxh3oDmeZ9AC8Vx0I0Fn8/Mm4WfS22tee/p/Zp8cefoismpOCQ5Ruhzkw4UME3bzBnI20cbrN9v7hCeT2xvUoChhpcDOYN/hiBrn68B/ss9PWb6dvnOI7xz5cbhe40OnjNnoPI0KvTbndiy1t62880md7vHdOGfFQauBUtd+UKh1yt7II2MnQws71u71+2i5j/Q9CqovNUvcpeKuetxZKwB5x2m8nfV1f+ov0WA2bF0AkOGAAAAAElFTkSuQmCC"/>
                        ))}

                    </div>
                    <p><span className="font-bold">Имя:</span> {review.name} {review.surname}</p>
                    <p><span className="font-bold">Отзыв:</span> {review.description}</p>
                </div>))}
        </div>
        <form className={"p-8 max-w-7xl m-auto text-center"} onSubmit={(event) => addReview(event)}>
            <div>
                <input type="text" name="name" value={newReview.name} onChange={handleReviewChange}
                       placeholder="Имя"
                       className="border-0 p-4 m-3 rounded-3xl"/>
                <input type="text" name="surname" value={newReview.surname} onChange={handleReviewChange}
                       placeholder="Фамилия" className="border-0 p-4 m-3 rounded-3xl"/>
                <input type="number" name="rating" value={newReview.rating} onChange={handleReviewChange}
                       placeholder="Рейтинг (1-5)" className="border-0 p-4 m-3 rounded-3xl"/>
            </div>
            <textarea name="description" value={newReview.description} onChange={handleReviewChange}
                      placeholder="Description" className="border-0 p-4 m-3 rounded-3xl w-full h-auto"/>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 m-3 rounded-md">Оставить отзыв</button>
        </form>

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
