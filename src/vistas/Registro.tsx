import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registrarUsuario } from '../services/authService';
import '../styles/tasty.css';

export default function Registro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    confirmPassword: '',
    fechaNacimiento: '',
    terminos: false,
    newsletter: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const resultado = await registrarUsuario(formData);

    if (resultado.success) {
      alert('¡Registro exitoso! Bienvenido a Tasty Uleam.');
      navigate('/');
    } else {
      alert(resultado.error || 'Error al registrar. Por favor intenta de nuevo.');
    }
  };

  const maxDate = new Date().toISOString().split('T')[0];

  return (
    <main className="login-page">
      <div className="container">
        <div className="login-card registro-card">
          <div className="login-brand">
            <div className="logo">Tasty Uleam</div>
            <p className="muted">Crea tu cuenta — Únete a nuestra comunidad</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form registro-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre *</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido *</label>
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  placeholder="Tu apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@correo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono *</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="0999999999"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Contraseña *</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  minLength={6}
                  required
                />
                <small className="form-hint">Mínimo 6 caracteres</small>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Contraseña *</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
              <input
                id="fechaNacimiento"
                name="fechaNacimiento"
                type="date"
                max={maxDate}
                value={formData.fechaNacimiento}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="terminos"
                  checked={formData.terminos}
                  onChange={handleChange}
                  required
                />
                Acepto los <a href="#" className="link-muted">términos y condiciones</a> y la{' '}
                <a href="#" className="link-muted">política de privacidad</a> *
              </label>
            </div>

            <div className="form-group">
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                />
                Deseo recibir ofertas y novedades por correo
              </label>
            </div>

            <button type="submit" className="btn-primary login-submit">
              Crear Cuenta
            </button>
          </form>

          <div className="login-foot">
            <p className="muted">
              ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
