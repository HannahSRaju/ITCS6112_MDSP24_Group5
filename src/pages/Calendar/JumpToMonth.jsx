import React, { useState } from 'react';
import Button from '../../components/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';
import { Input } from '@mui/material';

const JumpToMonth = ({ currentMonth, close, submit }) => {
    AOS.init();
    const inputStyle = { color: "var(--tcolor)" };
    const [month, setMonth] = useState(currentMonth);
    const handleChange = (e) => {
        setMonth(e.target.value);
    }
    const submitMonth = (e) => {
        e.preventDefault();
        submit(month);
        setMonth(() => {
            return month;
        })
    }
    return (
        <div className="calendar-edit">
            <div className="calendar-edit-box" data-aos="zoom-in">
                <div className="calendar-edit-box-topbar">
                    <div className="calendar-edit-box-topbar__close" onClick={close}>
                        <CloseIcon />
                    </div>
                </div>
                <form className="calendar-edit-box-form" onSubmit={submitMonth}>
                    <div className="calendar-edit-box-form__content">
                        <div className="calendar-edit-box-form__group">
                            <label className="calendar-edit-box-form__label" htmlFor="month">
                                <AccessTimeIcon />
                            </label>
                            <Input
                                type="month"
                                className="calendar-edit-box-form__input"
                                id="month"
                                name="month"
                                placeholder={month}
                                style={inputStyle}
                                value={month}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="calendar-edit-box-form__buttons">
                        <div className="calendar-edit-box__button">
                            <Button
                                text="Cancel"
                                variant="outline"
                                color="blue"
                                size="small"
                                className="calendar-edit-box__button-cancel"
                                onClick={close}
                            />
                        </div>
                        <div className="calendar-edit-box__button">
                            <Button
                                text="Save"
                                variant="fill"
                                color="blue"
                                size="small"
                                type="submit"
                                className="calendar-edit-box__button-cancel"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default JumpToMonth