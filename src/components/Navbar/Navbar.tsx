import styles from './Navbar.module.scss'
import SignOutButton from './SignOutButton'


const Navbar = ({ accounts }: any) => {
  return (
    <nav className={styles.nav}>
      <h1>OMP</h1>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
        {(accounts.length === 0) ? null : accounts[0].name}
        {(accounts.length === 0) ? null : <SignOutButton />}
      </div>

    </nav>
  )
}

export default Navbar