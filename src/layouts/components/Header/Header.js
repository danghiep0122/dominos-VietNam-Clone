import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  DominoIcon,
  CartIcon,
  AccountIcon,
  DominoIconNoText,
  DeliveryIcon,
  MenuBarIcon,
  PromotionIcon,
  MenuIcon,
} from '../../../icons/Icons'
import styles from './Header.module.scss'
import images from '../../../assets/img/image'
import LogModal from '../LogModal'
import { onModal } from '../../../feature/modal/Modal'

function Header() {
  const toggleModal = useSelector((state) => state.IS_MODAL_OPEN.value)
  const dispatch = useDispatch()

  const openLoginModal = () => {
    dispatch(onModal())
  }

  const cartItems = useSelector((state) => state.CART_ITEM.value)

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoAndLanguage}>
        <Link to={'/'}>
          <DominoIcon className={styles.dominoLogo} width="156" height="24" />
          <DominoIconNoText
            className={styles.dominoLogoNoText}
            width="24px"
            height="24px"
          />
        </Link>
        <Link to={'/'}>
          <DominoIcon className={styles.dominoLogoPc} width="200" height="24" />
        </Link>
      </div>
      {toggleModal && <LogModal />}

      <div className={styles.navbarMobile}>
        <DeliveryIcon width="40px" height="24px" />
        <div className={styles.navbarSmall}>
          <PromotionIcon width="40px" height="24px" />
          <MenuIcon width="40px" height="24px" />
        </div>
        <div onClick={openLoginModal}>
          <AccountIcon width="40px" height="24px" />
        </div>
        <Link to={'/cart'}>
          <CartIcon width="40px" height="24px" />
        </Link>
        <MenuBarIcon width="40px" height="24px" />
      </div>

      <div className={styles.navbarPC}>
        <ul className={styles.navList}>
          <Link to={'/voucher'}>
            <li>Mã E-voucher</li>
          </Link>
          <Link tag="li" to={'/promotion'}>
            <li>Khuyến mãi</li>
          </Link>
          <Link tag="li" to={'/menu'}>
            <li>
              <span>Thực đơn</span>
            </li>
          </Link>
          <Link tag="li" to={'/tracking'}>
            <li>Theo dõi đơn hàng</li>
          </Link>
        </ul>
        <div className={styles.languageSwitch}>
          <img
            className={styles.languageFlag}
            alt="VietNam"
            src={images.flagVn}
          />
          <img
            className={styles.languageFlag}
            alt="English"
            src={images.flagEn}
          />
        </div>
        <div className={styles.navbarButtonPC}>
          <div onClick={openLoginModal}>
            <AccountIcon
              className={styles.buttonPC}
              width="28px"
              height="28px"
            />
          </div>
          <Link to={'/cart'}>
            <div className={styles.cartNoti}>{cartItems.length}</div>
            <CartIcon className={styles.buttonPC} width="28px" height="28px" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
