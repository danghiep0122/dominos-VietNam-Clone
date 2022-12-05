import PromotionItem from './PromotionItem'
import styles from './styles.module.scss'
import data from '../../data/promotionData.json'

function PromotionList() {
  return (
    <section className={styles.promotionListWrapper}>
      {data.map(({ id, title, description, imgUrl, button }) => (
        <div key={id}>
          <PromotionItem
            title={title}
            contentList={description}
            imgUrl={imgUrl}
            buttonList={button}
          />
        </div>
      ))}
    </section>
  )
}

export default PromotionList
