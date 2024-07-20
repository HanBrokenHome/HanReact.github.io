import React from "react";

const Button = (props) => {
    const { Style, Title, Onclick } = props; // Destructure Title from props

    return (
        <div>
            <button onClick={Onclick} className="text-xl font-helvetica w-[70%] my-5 rounded h-[40px] bg-blue-500">{Title}</button>
        </div>
    );
}

export default Button;
