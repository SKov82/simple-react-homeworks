import React, {useState} from 'react';
import s from '../h4/HW4.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';

export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [response, setResponse] = useState<string>('')

    const onclickHandler = () => {
        fetch(
            'https://neko-cafe-back.herokuapp.com/auth/test',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({success: checked}),
            }
        ).then(res => setResponse(res.statusText))
    }

    return (
        <div>
            <hr/>
            homeworks 13

            <div className={s.column}>
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    {checked ? 'ВКЛ' : 'ВЫКЛ'}
                </SuperCheckbox>

                Ответ сервера - {response}
                <SuperButton
                    onClick={onclickHandler}
                >
                    Request
                </SuperButton>
            </div>
        </div>
    )
};