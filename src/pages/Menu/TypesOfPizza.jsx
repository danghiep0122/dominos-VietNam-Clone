import allPizza from '../../data/allPizza.json'
import {
  PizzaLargeIcon,
  PizzaMediumIcon,
  PizzaSmallIcon,
} from '../../icons/Icons'
import ItemCard from '../../layouts/components/ItemCard'
import { formatVND } from '../../ultilities/format'

function TypesOfPizza({ category }) {
  const allPremiumPizza = allPizza.filter((x) => x.tag === 'premium')

  const allFavoritePizza = allPizza.filter((x) => x.tag === 'favorite')

  const allSignaturePizza = allPizza.filter((x) => x.tag === 'signature')

  let premiumCategoryPizza
  category === 'all'
    ? (premiumCategoryPizza = allPremiumPizza)
    : (premiumCategoryPizza = allPremiumPizza.filter((x) =>
        x.category.find((x) => x === `${category}`)
      ))

  let favoriteCategoryPizza
  category === 'all'
    ? (favoriteCategoryPizza = allFavoritePizza)
    : (favoriteCategoryPizza = allFavoritePizza.filter((x) =>
        x.category.find((x) => x === `${category}`)
      ))

  let signatureCategoryPizza
  category === 'all'
    ? (signatureCategoryPizza = allSignaturePizza)
    : (signatureCategoryPizza = allSignaturePizza.filter((x) =>
        x.category.find((x) => x === `${category}`)
      ))

  const smallPizzaPrice = (input) =>
    allPizza.filter((x) => x.tag === input)[0].prices.size7

  const mediumPizzaPrice = (input) =>
    allPizza.filter((x) => x.tag === input)[0].prices.size9

  const largePizzaPrice = (input) =>
    allPizza.filter((x) => x.tag === input)[0].prices.size12

  const allPizzaData = [
    {
      tagName: 'premium',
      data: allPremiumPizza,
      title: '⭐ Premium Pizza ⭐',
      dataByCategory: premiumCategoryPizza,
    },
    {
      tagName: 'favorite',
      data: allFavoritePizza,
      title: '⭐ Favorite Pizza ⭐',
      dataByCategory: favoriteCategoryPizza,
    },
    {
      tagName: 'signature',
      data: allSignaturePizza,
      title: '⭐ Signature Pizza ⭐',
      dataByCategory: signatureCategoryPizza,
    },
  ]

  return (
    <>
      {allPizzaData.map((type) => (
        <section
          key={type.tagName}
          className="section-product-list"
          style={type.dataByCategory.length !== 0 ? {} : { display: 'none' }}
        >
          <div>
            <hr />
            <h2 style={{ textAlign: 'center' }}>{type.title}</h2>
            <div className="pizza-size-price-wrapper">
              <ul>
                <li
                  style={
                    smallPizzaPrice(type.tagName) ? {} : { display: 'none' }
                  }
                >
                  <PizzaSmallIcon />
                  <p>{`Small (7"):`}</p>
                  <span>{formatVND(smallPizzaPrice(type.tagName))}</span>
                </li>
                <li>
                  <PizzaMediumIcon />
                  <p>{`Medium (9"):`}</p>
                  <span>{formatVND(mediumPizzaPrice(type.tagName))}</span>
                </li>
                <li>
                  <PizzaLargeIcon />
                  <p>{`Large (12"):`}</p>
                  <span>{formatVND(largePizzaPrice(type.tagName))}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-item-wrapper-100">
            {category !== 'all' ? (
              <ItemCard data={type.dataByCategory} />
            ) : (
              <ItemCard data={type.data} />
            )}
          </div>
        </section>
      ))}
    </>
  )
}

export default TypesOfPizza
