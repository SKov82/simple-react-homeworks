import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeCallback = (name: string, value: number) => {
        if (name === 'min' && value <= value2) {
            setValue1(value)
        } else if (name === 'max' && value >= value1) {
            setValue2(value)
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={onChangeCallback}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.wrapper}>
                <span>{value1}</span>
                <SuperDoubleRange min={value1}
                                  max={value2}
                                  onChangeRange={onChangeCallback}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
