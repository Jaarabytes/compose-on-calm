import './components.css'; // Import your CSS file
function Products() {

  const items = [
    {
      name: 'Recipe app',
      description: 'A website where you receive a carefully-outlined recipe of delicious foods at your disposal',
      url: 'https://sanjirecipes.netlify.app',
    },
    {
      name: 'Fashionista webpage',
      description: 'Created this webpage to help Bon Clay widen his fan base while showing the world his flare.',
      url: 'https://bonclayviva.com',
    },
    {
      name: 'Breakthrough portal',
      description: 'Designed the User Interface and Experience of the graduation website for PCA university, increasing speed and efficiency',
      url: 'https://pca.co/ke',
    },
    {
      name: 'Personal portfolio',
      description: 'Created a portfolio webpage for the Disk Jockey Tophaz to disable piracy of his soundtracks',
      url: 'https://www.djtophaz.com',
    },
    {
      name: 'Student portal',
      description: "Secured the students' password from online theft and hacking. Also, fixed a few twinks.",
      url: 'https://www.w3schools.com',
    },
  ];

  return (
    <div className='products-container'>
      <h1 style={{ textAlign: 'center' }}>OUR PRODUCTS:</h1>
      <div className="carousel-container">
        {items.map((elem, index) => (
          <div className='carousel-item' key={index}>
            <h3>{elem.name}</h3>
            <div className='description'>
              <p>{elem.description}</p>
            </div>
            <hr />
            <p className='link-to'><a href={elem.url}>See project</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
