import Map from "../assets/map.jpg"
export const Contacts = () => {
    return (
        <div className="max-w-7xl flex justify-between mx-auto">
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">Контакты</h1>
                <p className="text-gray-700 mb-4">
                    Адрес: ул. Пушкина, д. 123, г. Москва
                </p>
                <p className="text-gray-700 mb-4">
                    Телефон: +7 (123) 456-78-90
                </p>
                <p className="text-gray-700 mb-4">
                    Email: info@baybay.ru
                </p>
                <p className="text-gray-700 mb-4">
                    График работы: пн-пт с 9:00 до 18:00
                </p>
            </div>
            <div>
                <img src={Map} alt={'Адрес'} />
            </div>
        </div>
    );
};
