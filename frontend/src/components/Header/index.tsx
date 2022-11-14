import logo from '../../assets/img/logo.svg';
export function Header() {
  return (
    <header>
      <div className='dsmeta-logo-container'>
        <img src={logo} alt='DSMeta' />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href='https://github.com/beliciobcardoso'> Belicio Cardoso</a>
        </p>
      </div>
    </header>
  );
}
