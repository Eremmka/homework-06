import { Link, Outlet } from 'react-router-dom'
import logo from '../pictures/Logo.png'

export function HeaderLayout() {
  return(
    <>
      <header>
        <Link className='link-logo' to='/'><img src={logo} alt='logo' /></Link>
        <ul>
            <Link to='/heroes'>
              <button>
                Герои
              </button>
            </Link>
            <Link to='/episodes'><button>
                Эпизоды
              </button>
            </Link>
            <Link to='/locations'><button>
                Локации
              </button>
            </Link>
        </ul>
      </header>
      <Outlet />
    </>
  )
}