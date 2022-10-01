import styles from './CompanyInfo.module.css';

import company_logo from '../../../resources/images/company_logo.svg';

const CompanyInfo = ({
    logo = company_logo,
    title = 'Company Name',
    email = 'mail@mail.ru',
    link = 'website.www.com',
    phone = '+7129856192857',
    description = `Группа Аквилон - одна из ведущих девелоперских компаний, предоставляющих полный спектр услуг на рынке недвижимости, создана в Архангельске 13 октября 2003 года, более 18 лет на рынке.
    Входит в ТОП-20 крупнейших застройщиков страны, в 10-ку крупнейших застройщиков Санкт-Петербурга.
    Группа Аквилон признана системообразующим предприятием России.
    География присутствия: Москва, Санкт-Петербург, Ленинградская область, Архангельск, Северодвинск.`}) => {

    return (
        <div className={styles['company-wrapper__header']}>
            <div className={styles['company-info__header']}>
                <div className={styles['company-info-title__header']}>
                    <img src={logo} />
                    <div>
                        <span className={styles['text-company-title']}>{title}</span>
                    </div>
                </div>
                <div className={styles['company-info__contact']}>
                    <span className={styles['text-company-contact__header']}>{email}</span>
                    <span className={styles['text-company-contact__header']}>{link}</span>
                    <span className={styles['text-company-contact__header']}>{phone}</span>
                </div>
                <div className={styles['chat-btn-wrapper__header']}>
                    <button
                        className={styles['chat-btn__header']}
                    >Чат онлайн</button>
                </div>
            </div>
            <div className={styles['company-description__header']}>
                <span className={styles['text-company-description']}>
                    {description}
                </span>
            </div>
        </div>
    )
}

export default CompanyInfo;