import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LANGUAGES } from '../../core/constants/constants';
import { useState } from 'react';

const isActive = ({ isActive }: any) => `link ${isActive ? 'active' : ''}`

export const Menu = ({getMenu, setMenu}:any) => {
    const { i18n, t } = useTranslation()
    const changeLanguage = (lng:any) => {
        setMenu(lng);
        i18n.changeLanguage(lng);
      };

    return (
        <nav>
            <select defaultValue={i18n.language} onChange={(e) => changeLanguage(e.target.value)}  >
                {
                    LANGUAGES.map(({ code, label }) => (
                        <option
                            key={code}
                            value={code}
                        >{label}</option>
                    ))
                }
            </select>
        </nav>
    )
}