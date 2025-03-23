import { useEffect, useRef } from "react";

const menuItems = [
  {
    category: "LES RAMENS",
    items: [
      {
        name: "Miso Ramen",
        price: "11,50€",
        description: "Bouillon miso, nouilles, tofu, champignons, légumes.",
      },
      {
        name: "Spicy Ramen 🌶",
        price: "14€",
        description:
          "Bouillon pimenté, nouilles fraîches, chashu épicé, œuf mollet, pousses de bambou.",
      },
      {
        name: "Vegan Ramen 🌱",
        price: "12€",
        description:
          "Bouillon miso et soja, nouilles fraîches, champignons shiitaké, tofu grillé, algues.",
      },
    ],
  },
  {
    category: "ENTRÉES & ACCOMPAGNEMENTS",
    items: [
      {
        name: "Gyoza (5 pièces)",
        price: "6,50€",
        description: "Raviolis grillés au poulet et légumes.",
      },
      {
        name: "Tempura de crevettes (4 pièces)",
        price: "8€",
        description: "Beignets de crevettes croustillants avec sauce tentasu.",
      },
      {
        name: "Yakitori (2 brochettes)",
        price: "5€",
        description: "Brochettes de poulet caramélisé à la sauce teriyaki.",
      },
      {
        name: "Onigiri (2 pièces)",
        price: "5€",
        description: "Boulettes de riz garnies au saumon ou au thon mayo.",
      },
    ],
  },
  {
    category: "DESSERTS",
    items: [
      {
        name: "Mochi glacé (2 pièces)",
        price: "5,00€",
        description: "Mochi fourré à la glace, parfum au choix.",
      },
      {
        name: "Cheesecake au matcha",
        price: "7€",
        description: "Gâteau moelleux au thé vert matcha.",
      },
      {
        name: "Parfait au sésame noir",
        price: "8€",
        description:
          "Glace au sésame noir, crème fouettée et biscuit croustillant.",
      },
    ],
  },
  {
    category: "BOISSONS",
    items: [
      {
        name: "Thé matcha",
        price: "3,50€",
        description: "Thé vert japonais riche en antioxydants.",
      },
      {
        name: "Saké chaud ou froid",
        price: "8€",
        description:
          "Alcool de riz japonais, servi à la température de votre choix.",
      },
      {
        name: "Cocktail Yuzu Spritz 🍸",
        price: "9€",
        description: "Cocktail rafraîchissant au yuzu, soda et prosecco.",
      },
      {
        name: "Jus de Yuzu / Pomme / Mangue",
        price: "4€",
        description: "Jus frais 100% naturel.",
      },
    ],
  },
];

const Menu = () => {
  const categoryRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 } // L'animation se déclenche quand 50% du titre est visible
    );

    categoryRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" className="section">
      <h2 className="menu-title">Découvrez notre carte</h2>
      <div className="menu-container">
        {menuItems.map((category, index) => (
          <div key={index} className="menu-category">
            <h3
              ref={(el) => (categoryRefs.current[index] = el)}
              className="category-title"
            >
              {category.category}
            </h3>
            <ul className="menu-list">
              {category.items.map((item, idx) => (
                <li key={idx} className="menu-item">
                  <div className="menu-name">{item.name}</div>
                  <div className="menu-price">{item.price}</div>
                  <div className="menu-description">{item.description}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="menu-logo">
        <img src="/logoramen.png" alt="Logo du restaurant" />
      </div>
    </section>
  );
};

export default Menu;
