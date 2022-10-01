import React from "react";
import css from './ObjectInfoPage.module.scss'
import FlatsTable, {Flat, Floor} from "./components/FlatsTable/FlatsTable";
import Space from "src/components/Space";
import InfoItem from "./components/InfoItem";
import imagePlaceholder from 'src/resources/images/image-placeholder.png'


const floors: Floor[] = [
    { number: 1, firstFlatNumber: 1, lastFlatNumber: 5 },
    { number: 2, firstFlatNumber: 6, lastFlatNumber: 9 },
    { number: 3, firstFlatNumber: 10, lastFlatNumber: 19 },
    { number: 4, firstFlatNumber: 20, lastFlatNumber: 31 },
]
const flats: Flat[] = [
    { number: 1, floor: 1, state: 'free' },
    { number: 2, floor: 1, state: 'promotions' },
    { number: 3, floor: 1, state: 'reserve' },
    { number: 4, floor: 1, state: 'sold' },
    { number: 5, floor: 1, state: 'na' },

    { number: 6, floor: 2, state: 'free' },
    { number: 7, floor: 2, state: 'promotions' },
    { number: 8, floor: 2, state: 'reserve' },
    { number: 9, floor: 2, state: 'sold' },
    { number: 10, floor: 2, state: 'na' },

    { number: 11, floor: 3, state: 'free' },
    { number: 12, floor: 3, state: 'promotions' },
    { number: 13, floor: 3, state: 'reserve' },
    { number: 14, floor: 3, state: 'sold' },
    { number: 15, floor: 3, state: 'na' },
    { number: 19, floor: 3, state: 'free' },

    { number: 22, floor: 4, state: 'free' },
    { number: 23, floor: 4, state: 'promotions' },
    { number: 27, floor: 4, state: 'reserve' },
]
const floors2 = [
    { number: 1, firstFlatNumber: 1, lastFlatNumber: 10 },
    { number: 2, firstFlatNumber: 11, lastFlatNumber: 20 },
    { number: 3, firstFlatNumber: 21, lastFlatNumber: 30 },
    { number: 4, firstFlatNumber: 31, lastFlatNumber: 40 },
    { number: 5, firstFlatNumber: 41, lastFlatNumber: 50 },
    { number: 6, firstFlatNumber: 51, lastFlatNumber: 60 },
]
const flats2: Flat[] = [
    { number: 1, floor: 1, state: 'sold' },
    { number: 2, floor: 1, state: 'sold' },
    { number: 3, floor: 1, state: 'sold' },
    { number: 4, floor: 1, state: 'sold' },
    { number: 5, floor: 1, state: 'sold' },
    { number: 6, floor: 1, state: 'sold' },
    { number: 7, floor: 1, state: 'sold' },
    { number: 8, floor: 1, state: 'sold' },
    { number: 9, floor: 1, state: 'sold' },
    { number: 10, floor: 1, state: 'sold' },

    { number: 11, floor: 2, state: 'sold' },
    { number: 12, floor: 2, state: 'sold' },
    { number: 13, floor: 2, state: 'sold' },
    { number: 14, floor: 2, state: 'sold' },
    { number: 15, floor: 2, state: 'sold' },
    { number: 16, floor: 2, state: 'sold' },
    { number: 17, floor: 2, state: 'sold' },
    { number: 18, floor: 2, state: 'sold' },
    { number: 19, floor: 2, state: 'sold' },
    { number: 20, floor: 2, state: 'free' },

    { number: 21, floor: 3, state: 'sold' },
    { number: 22, floor: 3, state: 'sold' },
    { number: 23, floor: 3, state: 'sold' },
    { number: 24, floor: 3, state: 'sold' },
    { number: 25, floor: 3, state: 'sold' },
    { number: 26, floor: 3, state: 'sold' },
    { number: 27, floor: 3, state: 'sold' },
    { number: 28, floor: 3, state: 'sold' },
    { number: 29, floor: 3, state: 'sold' },
    { number: 30, floor: 3, state: 'free' },

    { number: 31, floor: 4, state: 'sold' },
    { number: 32, floor: 4, state: 'sold' },
    { number: 33, floor: 4, state: 'sold' },
    { number: 34, floor: 4, state: 'sold' },
    { number: 35, floor: 4, state: 'sold' },
    { number: 36, floor: 4, state: 'sold' },
    { number: 37, floor: 4, state: 'sold' },
    { number: 38, floor: 4, state: 'sold' },
    { number: 39, floor: 4, state: 'sold' },
    { number: 40, floor: 4, state: 'free' },

    { number: 41, floor: 5, state: 'sold' },
    { number: 42, floor: 5, state: 'sold' },
    { number: 43, floor: 5, state: 'sold' },
    { number: 44, floor: 5, state: 'sold' },
    { number: 45, floor: 5, state: 'sold' },
    { number: 46, floor: 5, state: 'sold' },
    { number: 47, floor: 5, state: 'sold' },
    { number: 48, floor: 5, state: 'sold' },
    { number: 49, floor: 5, state: 'sold' },
    { number: 50, floor: 5, state: 'free' },

    { number: 51, floor: 6, state: 'sold' },
    { number: 52, floor: 6, state: 'sold' },
    { number: 53, floor: 6, state: 'sold' },
    { number: 54, floor: 6, state: 'sold' },
    { number: 55, floor: 6, state: 'sold' },
    { number: 56, floor: 6, state: 'sold' },
    { number: 57, floor: 6, state: 'sold' },
    { number: 58, floor: 6, state: 'sold' },
    { number: 59, floor: 6, state: 'sold' },
    { number: 60, floor: 6, state: 'free' },
]







const photos = [imagePlaceholder,imagePlaceholder,imagePlaceholder,imagePlaceholder,imagePlaceholder,imagePlaceholder,imagePlaceholder,imagePlaceholder,imagePlaceholder]

const ObjectInfoPage = () => {
    return <div className={css.page}>
        <div className={css.pageFrame}>

            <Space h={64}/>

            <div className={css.pageTopContainer}>
                <div className={css.photosContainer}>

                    <div className={css.objectName}>Название объекта</div>

                    <Space h={8}/>

                    <div className={css.developer}>
                        <div className={css.name}>Название застройщика</div>
                        <div className={css.address}>Сочи, ул. Яна Фабрициуса, 33</div>
                    </div>

                    <Space h={34}/>

                    { photos.length>0 && <div className={css.bigPhotos}>
                        { photos.slice(0,2).map(it=>
                            <div className={css.photo} style={{ backgroundImage: `url(${it})`}} />
                        ) }
                    </div>}
                    { photos.length>2 && <div className={css.smallPhotos}>
                        { photos.slice(2,4).map(it=>
                            <div className={css.photo} style={{ backgroundImage: `url(${it})`}} />
                        ) }
                        { photos[4] && <div className={css.restCounterBox}>
                            <div className={css.photo} style={{ backgroundImage: `url(${photos[4]})`}} />
                            { photos.length>5 && <div className={css.count}>+{photos.length-4}</div> }
                        </div> }
                    </div> }

                </div>
                <div className={css.infoContainer}>
                    <InfoItem title={'Срок сдачи'} items={['Март 2023 года']}/>
                    <InfoItem title={'Оплата'} items={['ДКП','Ипотека','Рассрочка: 70% первый взнос, 30% на 3 месяца']}/>
                    <InfoItem title={'Характеристики'} items={['Бизнес-класс','Управляющая компания','Закрытая охраняемая территория','1,5 км до моря','Черновая отделка','Вид на горы, море, парк, атриум']}/>
                    <InfoItem title={'Коммуникации'} items={['Центральное отопление','Водоснабжение и канализация','Электричество']}/>
                </div>
            </div>

            <Space h={106}/>

            <div className={css.tablesTitle}>Таблица квартир</div>

            <Space h={24}/>

            <div className={css.legend}>
                <div className={css.item}>
                    <div className={css.color} style={{ background: '#B4EFA6' }}/>
                    <div className={css.name}>Свободные</div>
                </div>
                <div className={css.item}>
                    <div className={css.color} style={{ background: '#EFA6A6' }}/>
                    <div className={css.name}>Акции</div>
                </div>
                <div className={css.item}>
                    <div className={css.color} style={{ background: '#A6E2EF' }}/>
                    <div className={css.name}>Резерв</div>
                </div>
                <div className={css.item}>
                    <div className={css.color} style={{ background: '#FCFCFC' }}/>
                    <div className={css.name}>Проданные</div>
                </div>
                <div className={css.item}>
                    <div className={css.color} style={{ background: '#e9e9e9' }}/>
                    <div className={css.name}>Недоступны</div>
                </div>
            </div>

            <Space h={24}/>

            <div className={css.flats}>
                <FlatsTable floors={floors} flats={flats}/>
                <FlatsTable floors={floors} flats={flats}/>
                <FlatsTable floors={floors} flats={flats}/>
                <FlatsTable floors={floors.filter(it=>it.number===4)} flats={flats} style={{ alignSelf: 'stretch' }}/>

                <FlatsTable floors={floors2} flats={flats2}/>
                <FlatsTable floors={floors2} flats={flats2}/>
                <FlatsTable floors={floors2} flats={flats2}/>
                <FlatsTable floors={floors2} flats={flats2}/>
            </div>

        </div>
    </div>
}
export default React.memo(ObjectInfoPage)