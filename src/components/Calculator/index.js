import React, { useState } from 'react';
import '../../style/components/_calculator.sass'

const Calculator = () => {

    const [value, setValue] = useState('');

    const handleClick = (e) => {
        setValue(value + e.target.value);
    }

    const clear = () => {
        setValue('');
    }

    const result = () => {
        // eslint-disable-next-line no-eval
        setValue(eval(value));
    }

    return (
        <section>
            <div className='calculator'>
                <div className='calculator__display'>
                    <p className='calculator__display__value'>{value}</p>
                </div>
                <div className='calculator__buttons'>
                    <div className="calculator__buttons__row">
                        <button className="button" onClick={handleClick} value={"7"}><p>7</p></button>
                        <button className="button" onClick={handleClick} value={"8"}>8</button>
                        <button className="button" onClick={handleClick} value={"9"}>9</button>
                        <button className="button" onClick={handleClick} value={"+"}>+</button>
                    </div>
                    <div className="calculator__buttons__row">
                        <button className="button" onClick={handleClick} value={"4"}>4</button>
                        <button className="button" onClick={handleClick} value={"5"}>5</button>
                        <button className="button" onClick={handleClick} value={"6"}>6</button>
                        <button className="button" onClick={handleClick} value={"-"}>-</button>
                    </div>
                    <div className="calculator__buttons__row">
                        <button className="button" onClick={handleClick} value={"1"}>1</button>
                        <button className="button" onClick={handleClick} value={"2"}>2</button>
                        <button className="button" onClick={handleClick} value={"3"}>3</button>
                        <button className="button" onClick={handleClick} value={"/"}>/</button>
                    </div>
                    <div className="calculator__buttons__row">
                        <button className="button" onClick={handleClick} value={"0"}>0</button>
                        <button className="button" onClick={handleClick} value={"."}>.</button>
                        <button className="button" onClick={clear}>C</button>
                        <button className="button" onClick={handleClick} value={"*"}>*</button>
                    </div>
                    <div className="calculator__buttons__row">
                        <button className="button enter" onClick={result}>Enter</button>
                    </div>
                </div>
            </div>
            <footer>
                <a href="https://www.linkedin.com/in/opedrohamartins/">© Pedro Martins 2023</a>
            </footer>
        </section>
    )

}

export default Calculator;