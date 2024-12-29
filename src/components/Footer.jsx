import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section footer__section--about">
                    <h3 className="footer__title">Relatos de Papel</h3>
                    <p className="footer__description">
                        Tu portal para descubrir y adquirir los mejores libros desde la comodidad de tu hogar.
                    </p>
                </div>

                <div className="footer__section footer__section--contact">
                    <h4 className="footer__subtitle">Contacto</h4>
                    <ul className="footer__list">
                        <li className="footer__item">Email: contacto@relatosdepapel.com</li>
                        <li className="footer__item">Teléfono: +57 123 456 789</li>
                        <li className="footer__item">Dirección: Calle Ficticia 123, Ciudad Imaginaria</li>
                    </ul>
                </div>

                <div className="footer__section footer__section--social">
                    <h4 className="footer__subtitle">Síguenos</h4>
                    <ul className="footer__social-list">
                        <li className="footer__social-item">Facebook</li>
                        <li className="footer__social-item">Instagram</li>
                        <li className="footer__social-item">Twitter</li>
                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__copyright">
                    &copy; 2024 Relatos de Papel. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;