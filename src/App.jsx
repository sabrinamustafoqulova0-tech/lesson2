import React from 'react'
import Logo from "../public/7.svg"
import Vxod from "../public/entrance.png"
import Tlog from "../public/Group 54.png"
import Marker from "../public/marketplaces-logos-m 1.png"
import Smallbox from "../public/wb2_1-min 1.png"
import Usor from "../public/Group 3.png"
import Bigbox from "../public/ozon1-min 1.png"
import Strelka from "../public/Frame 54.png"
import Tochka from "../public/Ellipse 5.png"
import Table from "../public/capabilities-1 1.png"
import ImgGirl from "../public/[removal 1.png"
import Take from "../public/[removal 5.png"
import Vecktor from "../public/Vector.png"
import Img from "../public/Frame 32 (1).png"
import imgsmall from "../public/Frame 69.svg"
import ImgGirl2 from "../public/[removal 3.png"
import Podarok from "../public/[removal 7.png"
import Podarokchek from "../public/[removal 6.png"
import ImgGirlyellow from "../public/Remove-bg_ai_1691479932588-transformed 1.png"
import Podarok2 from "../public/[removal 7 (1).png"
import ix from "../public/Frame 18.png"
import ImgEndGirl from "../public/[removal 5 (1).png"
import Vc from "../public/Group 25.png"
import Teleg from "../public/Group (2).png"
import Youtybe from "../public/Group.png"
import Modul from "../public/modulbank 1.png"
import Visa from "../public/visa 1.png"
import Mastercard from "../public/mastercard 1.png"
import Mir from "../public/mir 1.png"


import "./App.css"

const App = () => {
  return (
    <div>
    <div className='start'>
      <div className='logodiv'>
      <img src={Logo} alt="" />
      <div className='p'>
        <p style={{fontSize:"14px"}}>Аналитика и оцифровка продаж </p>
        <p style={{fontSize:"14px"}}><span style={{color:"#702A8A",fontWeight:"bolder"}}>Wildberries</span> и <span style={{color:"#1065FF",fontWeight:"bolder"}}>Ozon</span></p>
      </div>
      </div>
      <div className='pages'> 
        <p>О нас</p>
        <p>Возможности</p>
        <p>Тарифы</p>
      </div>
      <div className='btnstart'>
        <div style={{display:"flex",gap:"10px"}}>
        <img className='vimg' src={Vxod}  />
        <h4 className='vtext'>Вход</h4>
        </div>
        <img className='tellog' src={Tlog} alt="" />
        <button className='register'>Зарегистрироваться</button>
      </div>
    </div>



    
      <div className='zagalovok'>
        <div className='divtext'>
          <h1 className='h1zagalovok'><span style={{color:"#2EB897"}}>Внутренняя аналитика</span> и <span style={{color:"#2A84EE"}}>финансовый учёт</span> для бизнеса на маркетплейсах</h1>
          <img className='market' src={Marker} alt="" />
          <p className='pzagalovok'>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
          <div className='inpdiv'>
            <p>Начните свой 3-дневный пробный период с неограниченным доступом ко всем возможностям</p>
            <div className='inpbtn'>
              <input className='inp' type="text" placeholder='Введите ваш email'/>
              <button className='poprob'>Попробовать</button>
            </div>
          </div>
        </div>
        <div className='imgsbox'>
          <img className='smallbox' src={Smallbox} alt="" />
          <img  className='usor' src={Usor} alt="" />
          <img className='biglbox' src={Bigbox} alt="" />
        </div>
      </div>



      <div className='boxblue'>
        <div className='box'>
          <h1 className='h1box'>777</h1>
          <p className='pbox'>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
        </div>
        <div className='box'>
          <h1 className='h1box'>5</h1>
          <p className='pbox'>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
        </div>
        <div className='box'>
          <h1 className='h1box'>100 000</h1>
          <p className='pbox'>Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и анализе отчётов</p>
        </div>
      </div>




      <div className='allbox'>
        <h1>Возможности сервиса</h1>
        <div className='boxtable'>
          <div className='namestable'>
            <div className='namebox1'>
              <p>Финансовая аналитика</p>
            </div>
            <div className='namebox'>
              <p>Товарная аналитика</p>
            </div>
            <div className='namebox'>
              <p>Аналитика внутренней рекламы</p>
            </div>
            <div className='namebox'>
              <p>Статистика</p>
            </div>
            <div className='namebox'>
              <p>Инструменты</p>
            </div>
            <h4 className='h4'>Финансовая аналитика</h4>
            <img className='img' src={Strelka} alt="" />
          </div>

          <div className='flextable'>
            <div className='paddingtable'>
              <h2 className='h4table'>Инструменты для финансовой аналитики</h2>
              <div style={{display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px"}}>
                <img src={Tochka} alt="" />
                <p>Отчёт о прибылях и убытках (P&L)</p>
              </div>
              <div style={{display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px"}}>
                <img src={Tochka} alt="" />
                <p>Отчёт о движении денежных средств (ДДС)</p>
              </div>
              <div style={{display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px"}}>
                <img src={Tochka} alt="" />
                <p>Журнал операций</p>
              </div>
              <div style={{display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px"}}>
                <img src={Tochka} alt="" />
                <p>Сводка продаж</p>
              </div>
              <div style={{display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px"}}>
                <img src={Tochka} alt="" />
                <p>Учёт самовыкупов</p>
              </div>  
              <button className='poprob'>Попробовать бесплатно</button>
            </div>
            <img className='table' src={Table} alt="" />
          </div>
        </div>
      </div>




      <div className='inpdivgirl'>
        <div className='textgirl'>
          <h2  className='h2girl'>Начните экономить своё время</h2>
            <p className='pgirl'>3-дневный пробный период с неограниченным доступом ко всем возможностям</p>
            <div className='inpbtn'>
              <input className='inp' type="text" placeholder='Введите ваш email'/>
              <button className='poprob'>Попробовать</button>
            </div>
            </div>
            <img className='imgGirl1' src={ImgGirl} alt="" />
          </div>
          
            <img className='take' src={Take} alt="" />
            <img className='imgGirl' src={ImgGirl} alt="" />



            <div className='otchot'>
              <h1 className='h1otchot'>Собираем единые отчёты по всем вашим магазинам</h1>
              <p>C Mpassistant вы сможете:</p>
              <div className='flexotchot'>
                <div>
                  <div className='kardotchot'>
                    <img src={Vecktor}alt="" />
                    <p>Сможете видеть прибыль по всем магазинам и маркетплейсам в одном месте</p>
                  </div>
                  <div className='kardotchot'>
                    <img src={Vecktor} alt="" />
                    <p>Сможете видеть прибыль по всем магазинам и маркетплейсам в одном месте</p>
                  </div>
                  <div className='kardotchot'>
                    <img src={Vecktor} alt="" />
                    <p>Сможете видеть прибыль по всем магазинам и маркетплейсам в одном месте</p>
                  </div>    
                </div>
                <img className='imgotchot' src={Img} alt="" />
              </div>
            </div>


            <div className='div'>
              <h1>Почему выбирают Mpassistant</h1>
              <div className='dfkard'>
                <div className='karddiv'>
                  <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                    <img src={imgsmall} alt="" />
                    <h3>Точность данных</h3>
                  </div>
                  <p>Данные в отчётах сервиса полностью совпадает с данными ваших магазинов на маркетплейсах.</p>
                </div>
                <div className='karddiv'>
                  <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                    <img src={imgsmall}  alt="" />
                    <h3>Большой функционал</h3>
                  </div>
                  <p>Полный набор инструментов для внутренней аналитики для Wildberries и Ozon. Более 10 полезных отчётов с удобными настраиваемыми фильтрами и параметрами.</p>
                </div>
                <div className='karddiv'>
                  <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                    <img src={imgsmall}  alt="" />
                    <h3>Лёгкость освоения</h3>
                  </div>
                  <p>Наши отчёты просты и удобны. Все отчёты имеют подробные инструкции и видео, помогающие легко читать их и использовать.</p>
                </div>
                <div className='karddiv'>
                  <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                    <img src={imgsmall}  alt="" />
                    <h3>Подходит всем</h3>
                  </div>
                  <p>Mpassistant создан селлерами для селлеров. Наш опыт в товарном бизнесе и разработке IT систем позволил создать полезный и удобный продукт, поэтому он подойдёт как для новичков, так и для опытных селлеров.</p>
                </div>
                <div className='karddiv'>
                  <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                    <img src={imgsmall}  alt="" />
                    <h3>Конфиденциальность</h3>
                  </div>
                  <p>Ваша конфиденциальность для нас самый главный приоритет. Все ваши данные надёжно сохранены, а информация об этом записана в договоре-оферте. По желанию можем заключить дополнительное соглашение (NDA).</p>
                </div>
                <div className='karddiv'>
                  <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                    <img src={imgsmall}  alt="" />
                    <h3>Служба заботы</h3>
                  </div>
                  <p>Наша служба заботы готова решить практически любые вопросы и в режиме 24/7.</p>
                </div>
              </div>
            </div>






            
      <div className='inpdivgirl'>
        <div className='textgirl'>
          <h2  className='h2girl'>Попробуйте бесплатно</h2>
            <p className='pgirl'>3-дневный пробный период с неограниченным доступом ко всем возможностям</p>
            <div className='inpbtn'>
              <input className='inp' type="text" placeholder='Введите ваш email'/>
              <button className='poprob'>Попробовать</button>
            </div>
            </div>
            <img className='imgGirl1' src={ImgGirl2} alt="" />
          </div>
          
            <img className='podarok1' src={Podarok} alt="" />
            <img className='podarok' src={Podarokchek} alt="" />
            <img className='imgGirl2' src={ImgGirl2} alt="" />



            <div className='boxprice'>
              <h1>Выберите тариф</h1>
              <div className='buttons'>
                <button style={{backgroundColor:"#11AE88",color:"#fff", border:"none"}} className='btncheslo'>
                  <p>1 месяц</p>
                </button>
                <button className='btncheslo'>
                  <p>3 месяц</p>
                </button>
                <button className='btncheslo'>
                  <p>6 месяц</p>
                </button>
                <button className='btncheslo'>
                  <p>12 месяц</p>
                </button>
              </div>
              <div className='kards'>
                <div  className='kard'>
                  <h3>Стартовый</h3>
                  <h2 className='price'>4 990 ₽</h2>
                  <button className='poprob2'>Попробовать</button>
                  <button className='podrobnee'>Подробнее </button>
                </div>
                <div style={{backgroundColor:"#2a85ee2d"}} className='kard'>
                  <h3>Стартовый</h3>
                  <h2 className='price'>4 990 ₽</h2>
                  <button className='poprob2'>Попробовать</button>
                  <button className='podrobnee'>Подробнее </button>
                </div>
                <div style={{backgroundColor:"#11ae8738"}} className='kard'>
                  <h3>Стартовый</h3>
                  <h2 className='price'>4 990 ₽</h2>
                  <button className='poprob2'>Попробовать</button>
                  <button className='podrobnee'>Подробнее </button>
                </div>
              </div>
            </div>

            
      <div className='inpdivgirlyellov'>
                <div className='kardyellow'>
                  <h3>Стартовый</h3>
                  <p style={{color:"#6C778E"}}>до 200 000 ₽/мес</p>
                  <h2 className='price'>Бесплатно</h2>
                  <button className='poprob2'>Попробовать</button>
                  <button className='podrobnee'>Подробнее </button>
                </div>
            <img className='imgGirl1' src={ImgGirlyellow} alt="" />
          </div>
          
            <img className='podarok12' src={Podarokchek} alt="" />
            <img className='podarok2' src={Podarok2} alt="" />
            <img className='imgGirlyellow' src={ImgGirlyellow} alt="" />



            <div className='otzivi'>
              <h1>Отзывы</h1>
              <div className='bigdivs'>
                <div className='boxbig'>
                  <p style={{color:"#6C778E"}}>Изначально нашёл сервис в поиске Яндекса, когда искал калькулятор unit-экономики товара. Калькулятор полностью устроил и решил пользоваться самим сайтом. К тому же это было для меня бесплатно, так как проходил по условиям бесплатного доступа: оборот до 200т.р в месяц. Этого не встретить на других сайтах, это возможность развиваться на ранних этапах, без вложения огромных сумм для доступа к подобным сайтам. </p>
                  <h3 style={{color:"#2EB897"}}>Читать полностью</h3>
                  <h3 style={{paddingTop:"20px"}}>— Алексей</h3>
                </div>
                <div className='boxbig'>
                  <p style={{color:"#6C778E"}}>Функционал сервиса, тот что есть — полностью устраивает. Хочется ещё автобиддер по ставкам в рекламных компаниях и цены вам не будет!</p>
                  <h3 style={{paddingTop:"140px"}}>— Владислав</h3>
                </div>
              </div>
            </div>







            <div className='question'>
              <h1>Часто задаваемые вопросы</h1>
              <p style={{color:" #6C778E"}}>Собрали ответы на часто задаваемые вопросы от вас</p>
              <div className='questionflex'>
                <div className='divblue'>
                  <div className='divstartblue' style={{backgroundColor:"#EAF3FD"}}>
                    <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
                      <h3>Чем вы отличаетесь от Mpstats и других систем аналитики?</h3>
                      <img src={ix} alt="" />
                    </div>
                    <p>Мы специализируемся на внутренней финансовой аналитике, поэтому данные у нас более точные и полезные. Другие сервисы аналитики обычно специализируются на внешнем анализе продаж всех поставщиков и берут данные из открытых источников. Мы же собираем данные только по вашим кабинетам, по тем доступам, которые вы нам предоставили.</p>
                  </div>
                  <div className='bluequestion'>
                    <h3>Сколько я могу пользоваться своими данными?</h3>
                    <div className='plus'>
                      <p style={{paddingTop:"8px",color:"#2A84EE",fontWeight:"bolder",fontSize:"18px"}}>+</p>
                      </div>
                  </div>
                  <div className='bluequestion'>
                    <h3>Сколько времени занимает создание отчетов?</h3>
                    <div className='plus'>
                      <p style={{paddingTop:"8px",color:"#2A84EE",fontWeight:"bolder",fontSize:"18px"}}>+</p>
                      </div>
                  </div>
                  <div className='bluequestion'>
                    <h3>В чем удобство вашей аналитики? </h3>
                    <div className='plus'>
                      <p style={{paddingTop:"8px",color:"#2A84EE",fontWeight:"bolder",fontSize:"18px"}}>+</p>
                      </div>
                  </div>
                  <div className='bluequestion'>
                    <h3>Насколько точные данные получаются по API?</h3>
                    <div className='plus'>
                      <p style={{paddingTop:"8px",color:"#2A84EE",fontWeight:"bolder",fontSize:"18px"}}>+</p>
                      </div>
                  </div>
                  <div className='bluequestion'>
                    <h3>Что делать если маркетплейс изменит API?</h3>
                    <div className='plus'>
                      <p style={{paddingTop:"8px",color:"#2A84EE",fontWeight:"bolder",fontSize:"18px"}}>+</p>
                      </div>
                  </div>
                  <div className='bluequestion'>
                    <h3>Безопасно ли передавать вам API ключи от кабинета?</h3>
                    <div className='plus'>
                      <p style={{paddingTop:"8px",color:"#2A84EE",fontWeight:"bolder",fontSize:"18px"}}>+</p>
                      </div>
                  </div>
                </div>
              
                <div className='divGirlend'>
                  <h3 style={{marginBottom:"20px"}}>Повысьте эффективность маркетинга и продаж с Mpassistant</h3>
                  <p style={{marginBottom:"20px"}}>3-дневный пробный период с неограниченным доступом ко всем возможностям</p>
                  <div className='endinp'>
                    <input type="text" className='inp' placeholder='Введите ваш email' />
                    <button className='poprobe'>Попробовать</button>
                  </div>
                  <img style={{marginLeft:"60px"}} src={ImgEndGirl} alt="" />
                </div>

              </div>

            </div>




        <div className='end'>
          <div className='divend'>
      <img className='endimglogo' src={Logo} alt="" />
      <div className='p'>
        <p style={{fontSize:"14px"}}>Аналитика и оцифровка продаж </p>
        <p style={{fontSize:"14px"}}><span style={{color:"#702A8A",fontWeight:"bolder"}}>Wildberries</span> и <span style={{color:"#1065FF",fontWeight:"bolder"}}>Ozon</span></p>
      </div>
      <div style={{display:"flex",alignItems:"center"}}>
        <img src={Vc} alt="" />
        <img src={Teleg} alt="" />
        <img src={Youtybe} alt="" />
      </div>
      <p style={{marginTop:"20px",marginBottom:"10px"}}>© 2022–2023 Mpassistant</p>
      <p className='information'>Информация, размещённая на сайте, не является публичной офертой</p>
        </div>

      <div className='divend'>
        <h4>Сервис</h4>
        <p>Для кого</p>
        <p>Возможности</p>
        <p>Тарифы</p>
      </div>

      <div className='divend'>
        <h4>Клиентам</h4>
        <p>Вход</p>
        <p>Регистрация</p>
        <p>Восстановления пароля</p>
      </div>

      <div className='divend'>
        <h4>Документы</h4>
        <p>Пользовательское соглашение</p>
        <p>Политика конфиденциальности</p>
        <p>Публичная оферта</p>
        <p>Использование cookie</p>
        <p>Техническая поддержка</p>
        <div className='imgsens'>
          <img src={Modul} alt="" />
          <img src={Visa} alt="" />
          <img src={Mastercard} alt="" />
          <img src={Mir} alt="" />
        </div>
      </div>

          </div>












    </div> 
  )
}

export default App
