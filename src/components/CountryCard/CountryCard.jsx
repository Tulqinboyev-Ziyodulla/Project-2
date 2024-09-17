import React from 'react';

function CountryCard({ country, onDelete }) {
    return (
        <div className="pb-[46px] bg-white shadow-xl rounded-md w-[267px] text-black dark:bg-[#161444] dark:text-white overflow-hidden">
            <img
                className="w-[100%] h-[170px] object-cover mb-6"
                src={country.flag}
                alt="country img"
                width={"267"}
                height={"170"}
            />

            <div className="px-[24px]">
                <h3 className="mb-[16px] font-extrabold text-[18px] leading-[26px]">{country.name}</h3>
                <p className="text-[14px] leading-4 mb-2">
                    <strong className="font-bold">Population:</strong> {country.population}
                </p>
                <p className="text-[14px] leading-4 mb-2">
                    <strong className="font-bold">Capital:</strong> {country.capital}
                </p>
                <button
                    onClick={() => onDelete(country.name)}
                    className="absolute bottom-4 right-4 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default CountryCard;
