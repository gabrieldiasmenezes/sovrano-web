import Link from 'next/link';
import styles from './Footer.module.css';


const footerData = [
  {
    label: "Páginas",
    links: [
      { label: "Home", link: "/Home" },
      { label: "Cardápio", link: "/Menu" },
      { label: "Reserva", link: "/Reervation" },
      { label: "Sobre", link: "/About" },
    ]
  },
  {
    label: "Cardápio",
    links: [
      { label: "Entradas", link: "/menu#entradas" },
      { label: "Carnes e Peixes", link: "/menu#carnes-e-peixes" },
      { label: "Massas", link: "/menu#massas" },
      { label: "Sobremesas", link: "/menu#sobremesas" },
      { label: "Coquetéis Clássicos & Autorais", link: "/menu#coqueteis-classicos" },
      { label: "Bebidas Não Alcoólicas", link: "/menu#bebidas" },
      { label: "Carta de Vinhos", link: "/menu#vinhos" },
    ]
  },
  {
    label: "Contato",
    links: [
      { label: "contato@restaurante.com", link: "mailto:contato@restaurante.com" },
      { label: "(11) 98765-4321", link: "tel:+5511987654321" },
    ]
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {footerData.map((section, index) => (
          <nav key={index} className={styles.nav}>
            <h3 className={styles.heading}>{section.label}</h3>
            {section.links.length > 0 ? (
              <ul className={styles.links}>
                {section.links.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} className={styles.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.link}>-</p> // Placeholder caso não haja links
            )}
          </nav>
        ))}
      </div>

      {/* Rodapé inferior com direitos reservados */}
      <div className={styles.footerBottom}>
        <p>&copy; 2025 SOVRANO. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
