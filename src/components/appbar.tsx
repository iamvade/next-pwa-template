import Link from 'next/link'
import Avatar from './avatar'
import ThemeButton from './theme-button'
import button from '../styles/button.module.css'

const EditIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.10862 13.8295C7.35377 12.8305 8.0541 11.6062 9.60773 9.95407L18.6153 0.925978C19.8471 -0.30866 21.8443 -0.308659 23.0761 0.925979C24.308 2.16062 24.308 4.16236 23.0761 5.397L14.0686 14.4251C12.424 15.929 11.2031 16.6196 10.2144 16.8753C8.47113 17.326 6.67948 15.5782 7.10862 13.8295ZM21.6603 3.9844L12.6858 12.9793C11.1724 14.3574 10.2474 14.801 9.71379 14.9389C9.64526 14.9567 9.4569 14.9545 9.24583 14.7479C9.03546 14.542 9.03682 14.3639 9.05099 14.3062C9.1772 13.7919 9.61082 12.8745 11.0449 11.3452L20.0311 2.33858C20.4815 1.88714 21.2099 1.88714 21.6603 2.33858C22.1132 2.79254 22.1132 3.53044 21.6603 3.9844ZM22 13.8333C22 15.8158 21.9979 17.2024 21.854 18.2655C21.7149 19.2944 21.4566 19.8972 21.0245 20.3664C20.7663 20.6469 20.4608 20.9024 20.1138 21.1243C19.4999 21.5169 18.6927 21.7525 17.386 21.8752C16.0689 21.999 14.365 22 12 22C9.63499 22 7.93107 21.999 6.61401 21.8752C5.3073 21.7525 4.5001 21.5169 3.88615 21.1243C3.53916 20.9024 3.23373 20.6469 2.97552 20.3664C2.54343 19.8972 2.28514 19.2944 2.14596 18.2655C2.00213 17.2024 2 15.8158 2 13.8333V13C2 12.4477 1.55228 12 1 12C0.447716 12 6.99749e-07 12.4477 6.99749e-07 13V13.8333V13.9055C-2.65626e-05 15.7988 -4.761e-05 17.3209 0.164011 18.5337C0.334799 19.7961 0.696451 20.8439 1.50424 21.7212C1.88443 22.1341 2.32372 22.4991 2.80871 22.8093C3.81061 23.4499 4.98412 23.7309 6.42694 23.8665C7.84852 24 9.64628 24 11.947 24H12H12.053C14.3537 24 16.1515 24 17.5731 23.8665C19.0159 23.7309 20.1894 23.4499 21.1913 22.8093C21.6763 22.4991 22.1156 22.1341 22.4958 21.7212C23.3035 20.8439 23.6652 19.7961 23.836 18.5337C24 17.3209 24 15.7989 24 13.9056V13.8333V10C24 9.44772 23.5523 9 23 9C22.4477 9 22 9.44771 22 10V13.8333ZM12 4C12.5523 4 13 3.55228 13 3C13 2.44771 12.5523 2 12 2L11.947 2H11.947C9.6463 1.99999 7.84852 1.99999 6.42694 2.13354C4.98412 2.26909 3.81061 2.5501 2.80871 3.19075C2.32372 3.50087 1.88443 3.86592 1.50424 4.27882C0.848448 4.99102 0.483355 5.81963 0.278513 6.79434C0.164929 7.33482 0.510994 7.86504 1.05147 7.97862C1.59195 8.09221 2.12217 7.74614 2.23576 7.20566C2.38547 6.49328 2.61937 6.02036 2.97552 5.63356C3.23373 5.35314 3.53916 5.0976 3.88615 4.87572C4.5001 4.48314 5.3073 4.24753 6.61401 4.12477C7.93108 4.00104 9.63499 4 12 4Z'
      fill='currentColor'
    />
  </svg>
)

const Header = () => (
  <header>
    <Link href='/profile'>
      <a title='Profile' aria-label='Profile'>
        <Avatar src='https://images.unsplash.com/photo-1593769645155-d6416081c0c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' />
      </a>
    </Link>

    <div style={{ flex: 1 }} />

    <nav>
      <ThemeButton />

      <div className='divider' />

      <button
        type='button'
        onClick={() => {
          // todo
        }}
        className={button.icon}
      >
        <EditIcon />
      </button>
    </nav>

    <style jsx>{`
      header {
        padding: 0 var(--gap);
        padding-top: env(safe-area-inset-top);
        width: 100%;
        height: calc(env(safe-area-inset-top) + 72px);
        background: var(--base);
        border-bottom: 1px solid var(--divider);
        display: flex;
        align-items: center;
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        transition: var(--transition-colors);
      }

      nav {
        display: flex;
        align-items: center;
        z-index: 4;
      }

      h1 {
        font-size: 18px;
      }

      .divider {
        margin: 0 var(--gap);
        width: 1px;
        height: 28px;
        background: var(--divider);
        display: flex;
        transition: var(--transition-colors);
      }
    `}</style>
  </header>
)

export default Header
