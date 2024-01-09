import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LANGUAGES } from '../../core/constants/constants';

const isActive = ({ isActive }: any) => `link ${isActive ? 'active' : ''}`

export const Menu = () => {

    const { i18n, t } = useTranslation()

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value
        console.log(i18n)
        i18n.changeLanguage(lang_code)

    }

    return (
        <nav>
            <select defaultValue={i18n.language} onChange={onChangeLang}  >
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