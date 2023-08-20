const Navbar = () => {
    return ( 
       < nav className="navbar">
              <h1>Oulunlaitehuolto Varaosat</h1>
              <div className="links">
                    <a href="/">Siivouskoneet</a>
                    <a href="/create" style={{}}>Painepesurit</a>
                    <a href="/create" style={{}}>Keittiölaitteet</a>
                    </div>
              </nav>
     );
}
 
export default Navbar;