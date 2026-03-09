import React from 'react'
import Card2 from "./card2"
import avatar1 from "../public/Group 39.png"
import avatar2 from "../public/Group 40.png"
import avatar3 from "../public/Group 41.png"
import avatar4 from "../public/Group (4).png"
import avatar5 from "../public/Group 42.png"
import avatar6 from "../public/Group (5).png"

const Section4 = () => {
  return (
    <div className='px-[50px] mb-[50px] md:text-start text-center'>
      <h1 className=' text-[48px] '>О нашем сервисе</h1>
      <div className='flex flex-wrap gap-10'>
        <Card2 avatar={avatar1} information="Мы жарим на сухом гриле через пергамент, запека ем в су-вид" page="Профессиональная команда поваров гарантирует вам прекрасный вкус и качество блюд" />
        <Card2 avatar={avatar2} information="Регулярное обновление меню" page="Каждую неделю новое меню, без повтора блюд" />
        <Card2 avatar={avatar3} information="Здоровые рецепты" page="Без молочки, белой муки, сахара, консервантов, усилителей вкуса и глубокой прожарки" />
        <Card2 avatar={avatar4} information="Гарантия возврата" page="100%-ная гарантия возврата денежных средств за предоплаченные дни, если что-то не понравилось в течение первой недели" />
        <Card2 avatar={avatar5} information="Контроль температуры" page="Все курьеры оснащены сумками-холодильниками, что позволяет сохранять температурный режим от 2°C до 4°C от кухни до ваших рук" />
        <Card2 avatar={avatar6} information="Забота о природе" page="Наш курьер заберёт пластиковую упаковку  для передачи на вторичную переработку" />
      </div>
    </div>
  )
}

export default Section4
