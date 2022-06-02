import React, {ChangeEvent} from 'react'
import s from '../c7-SuperRange/SuperRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange: (name: string, value: number) => void
    min: number
    max: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, min, max
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget && onChangeRange(e.currentTarget.name, +e.currentTarget.value)
    }

    return (
        <span className={s.container}>
            <input
                name={'min'}
                type={'range'}
                value={min}
                onChange={onChangeCallback}
            />
            <input
                name={'max'}
                type={'range'}
                value={max}
                onChange={onChangeCallback}
            />
        </span>
    )
}

export default SuperDoubleRange
