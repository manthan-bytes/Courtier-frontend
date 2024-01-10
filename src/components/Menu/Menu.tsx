import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LANGUAGES } from '../../core/constants/constants';

const isActive = ({ isActive }: any) => `link ${isActive ? 'active' : ''}`

export const Menu = () => {

    const { i18n, t } = useTranslation()
    const changeLanguage = (lng:any) => {
        console.log("🚀 ~ file: Menu.tsx:19 ~ changeLanguage ~ lng:", lng)
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